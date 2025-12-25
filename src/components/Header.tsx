'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { rockSalt } from '@/app/layout';

const navItems = [
//   { label: 'Home', href: '/' },
  { label: 'Characters', href: '/characters' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'Locations', href: '/locations' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-md">
    {/* <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md text-black shadow-md"> */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className={`${rockSalt.className} text-4xl font-bold flex items-center gap-2 text-yellow-400 drop-shadow-[0_4px_12px_rgba(250,204,21,0.6)]`}>
          🍩 <Link href="/">The Simpsons</Link>
        </h1>

        {/* Botón mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menú */}
        <ul
          className={`
            absolute md:static top-16 left-0 w-full md:w-auto
            bg-white md:bg-transparent
            flex flex-col md:flex-row
            items-center gap-6
            transition-all
            ${open ? 'block' : 'hidden'}
            md:flex
          `}
        >
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  px-3 py-2 rounded-md font-medium
                  hover:bg-gray-100 shadow-sm
                  ${
                    pathname === item.href
                      ? 'text-yellow-400 font-semibold'
                      : 'text-gray-900'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
