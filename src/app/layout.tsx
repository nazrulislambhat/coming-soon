import './globals.css';
import { Inter } from 'next/font/google';
import type React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Irzam Tour & Travel - Adventure Awaits – Go Find It!',
  description: 'Adventure Awaits – Go Find It!',
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
