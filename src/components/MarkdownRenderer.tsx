'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Use more specific types for each element
interface MarkdownProps {
  content: string;
}

// Define specific props for code blocks
interface CodeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function MarkdownRenderer({ content }: MarkdownProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
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
          code: ({ inline, className, children, ...props }: CodeProps) => {
            const match = /language-(\w+)/.exec(className || '');
            return inline ? (
              <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm" {...props}>
                {children}
              </code>
            ) : (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match ? match[1] : undefined}
                PreTag="div"
                customStyle={{
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  background: 'var(--tw-prose-pre-bg, #1e1e1e)',
                }}
                wrapLongLines={true}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
          blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-700 dark:text-gray-400 mb-4" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 