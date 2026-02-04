'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Machines', href: '/machines' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-[#A24CDC] rounded-lg group-hover:shadow-lg group-hover:shadow-[#A24CDC]/20 transition-all">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            APEX<span className="text-[#A24CDC]">MACHINA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#A24CDC] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#A24CDC] text-white text-sm font-semibold rounded-lg shadow-sm hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            Start Production
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-[#A24CDC]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 flex flex-col gap-4 px-6 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-[#A24CDC]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 bg-[#A24CDC] text-white font-semibold rounded-lg"
          >
            Start Production
          </Link>
        </div>
      )}
    </nav>
  );
}
