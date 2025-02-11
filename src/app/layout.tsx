import './globals.css';
import { Inter } from 'next/font/google';
import type React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Coming Soon | Innovate. Create. Elevate.',
  description:
    'Our exciting new project is coming soon! Be the first to know when we launch.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
