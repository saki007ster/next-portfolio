import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Saket Kumar - AI Developer & Researcher',
    template: '%s | Saket Kumar AI',
  },
  description: 'Portfolio and blog of Saket Kumar, an AI Developer specializing in Fine tuning LLMs, MLX, etc.]. Discover projects, articles, and insights into the world of Artificial Intelligence.',
  openGraph: {
    siteName: 'Saket Kumar - AI Portfolio & Blog',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  keywords: ['AI Developer', 'Machine Learning', 'Portfolio', 'Blog', 'Artificial Intelligence'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
