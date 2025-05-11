import type { Metadata } from 'next';
import ProjectsPageClientContent from '@/components/ProjectsPageClientContent'; // Adjust path if needed

// Your SEO metadata (from previous discussions)
export const metadata: Metadata = {
  title: 'AI & Machine Learning Projects | Saket Kumar', // Updated with name
  description: 'Explore a collection of AI and Machine Learning projects by Saket Kumar, showcasing expertise in LLM applications, Computer Vision, MLX, and more.',
  openGraph: {
    title: 'AI & Machine Learning Projects | Saket Kumar',
    description: 'Collection of AI/ML projects by Saket Kumar demonstrating practical skills.',
    url: 'https://yourdomain.com/projects', // Replace with your domain
    images: [
      {
        url: 'https://yourdomain.com/images/og-projects.jpg', // Specific OG image
        width: 1200,
        height: 630,
        alt: 'AI & Machine Learning Projects by Saket Kumar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Projects | Saket Kumar',
    description: 'Collection of AI/ML projects demonstrating practical skills.',
    // images: ['https://yourdomain.com/images/twitter-projects.jpg'],
    // creator: '@YourTwitterHandle',
  },
  keywords: ['AI Projects', 'Machine Learning Projects', 'Saket Kumar Portfolio', 'LLM Applications', 'Computer Vision Projects', 'MLX Projects'],
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Static page title or introduction */}
      {/* 
      <section className="py-8 text-center">
        <h1 className="text-4xl font-bold">My AI & ML Projects</h1>
      </section>
      */}

      {/* Render the client component */}
      <ProjectsPageClientContent />
    </div>
  );
} 