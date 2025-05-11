import type { Metadata } from 'next';
import HomePageClientContent from '@/components/HomePageClientContent'; // Adjust path if needed

export const metadata: Metadata = {
  title: 'Saket Kumar - AI Developer Portfolio & Machine Learning Blog',
  description: 'Welcome to the portfolio of Saket Kumar, an AI Developer passionate about building intelligent systems, LLMs, and MLX. Explore my AI projects and read my latest blog posts on machine learning innovations.',
  openGraph: {
    title: 'Saket Kumar - AI Developer Portfolio & Machine Learning Blog',
    description: 'Explore AI projects and read my latest blog posts on machine learning innovations.',
    url: 'https://saketkmr.com', // Replace with your actual domain
    images: [
      {
        url: 'https://saketkmr.com/images/og-homepage.jpg', // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Homepage of Saket Kumar - AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saket Kumar - AI Developer Portfolio & Machine Learning Blog',
    description: 'Explore AI projects and machine learning insights.',
    // images: ['https://yourdomain.com/images/twitter-homepage.jpg'], 
    // creator: '@YourTwitterHandle', // Add your Twitter handle
  },
  // Add other general keywords if desired
  keywords: ['AI Developer', 'Machine Learning', 'Portfolio', 'Blog', 'Artificial Intelligence', 'Saket Kumar', 'LLM', 'MLX'],
};

export default function HomePage() {
  return (
    <div>
      {/* Any content that can be server-rendered can go here directly */}
      {/* For example, a static introduction or title */}
      {/* 
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header> 
      */}
      
      {/* Render the client component that holds the interactive parts */}
      <HomePageClientContent />
    </div>
  );
}
