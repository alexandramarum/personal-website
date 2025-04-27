'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <>
      {/* Full-width background for navbar */}
      <div className="w-full bg-white">
        <nav className="flex flex-col items-center p-6 text-gray-800 font-helvetica w-11/12 md:w-1/2 mx-auto">
          {/* Your name at the top */}
          <div className="text-4xl font-semibold mb-4 mt-8">
            Alexandra Marum
          </div>

          {/* Navigation links below your name */}
          <div className="flex space-x-6 text-sm mb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded transition-all ${
                  pathname === link.href
                    ? 'bg-gray-800 text-white rounded-none'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-black hover:rounded-none'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider below the nav buttons */}
          <div className="w-full border-b border-gray-600 mt-1" />
        </nav>
      </div>
    </>
  );
}
