'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import React from 'react';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import type { Element } from 'hast';

// Use more specific types for each element
interface MarkdownProps {
  content: string;
}

// Define specific props for code blocks
interface CustomCodeProps extends React.HTMLAttributes<HTMLElement> {
  node?: Element;
  inline?: boolean;
  // className and children are inherited from React.HTMLAttributes<HTMLElement>
}

export default function MarkdownRenderer({ content }: MarkdownProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />,
          h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-bold mb-4 mt-6" {...props} />,
          h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-bold mb-3 mt-5" {...props} />,
          p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
          ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mb-4 ml-6 list-disc" {...props} />,
          ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
          li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li className="mb-1 text-gray-700 dark:text-gray-300" {...props} />,
          a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
            <a 
              className="text-blue-600 dark:text-blue-400 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props} 
            />
          ),
          blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-700 dark:text-gray-400 mb-4" {...props} />
          ),
          code: ({ inline, className, children, ...props }: CustomCodeProps) => {
            if (inline) {
              // Apply new styles for inline code
              return (
                <code 
                  className="font-mono text-sm italic bg-[#444] text-gray-100 py-px px-0.5 rounded-lg"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            // For fenced code blocks, rehype-highlight adds classes to `className`
            // and `children` are the highlighted tokens.
            return (
              <code className={className} {...props}> 
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 