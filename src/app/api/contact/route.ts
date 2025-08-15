import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only when API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

export async function POST(req: NextRequest) {
  try {
    // Check if Resend API key is configured
    const resend = getResend();
    if (!resend) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json({ 
        error: 'Email service is not configured. Please try again later.' 
      }, { status: 500 });
    }

    const { name, email, message } = await req.json();
    console.log('Received contact form:', { name, email, message });
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'saketkmr.dev@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    });

    console.log('Resend response:', { data, error });
    
    if (error) {
      console.error('Resend error:', error);
      // Provide more specific error messages
      let errorMessage = 'Failed to send email.';
      if (error.message?.includes('domain')) {
        errorMessage = 'Email service configuration issue. Please try again later.';
      } else if (error.message?.includes('rate limit')) {
        errorMessage = 'Too many requests. Please try again in a few minutes.';
      }
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('API route error:', err);
    return NextResponse.json({ 
      error: 'An unexpected error occurred. Please try again later.' 
    }, { status: 500 });
  }
} 