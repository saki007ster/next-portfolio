import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_RYHGAp3J_CCxKjoL76p1cmSSgQZxzpGFZ');

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log('Received contact form:', { name, email, message });
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'saki007ster@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });
    console.log('Resend response:', { data, error });
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Server error.';
    console.error('API route error:', err);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
} 