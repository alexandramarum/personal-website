// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Personal Site',
  description: 'Created with Next.js and Tailwind',
};

// Explicitly typing 'children' as ReactNode
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
