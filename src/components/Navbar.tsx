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
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={clsx(
          'transition-all duration-300 border rounded-full px-6 py-2 flex items-center justify-between w-full max-w-5xl',
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-lg'
            : 'bg-white/50 backdrop-blur-sm border-white/20 shadow-sm'
        )}
      >
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="p-1.5 bg-[#A24CDC] rounded-full group-hover:shadow-lg group-hover:shadow-[#A24CDC]/20 transition-all">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            APEX<span className="text-[#A24CDC]">MACHINA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
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
            className="px-4 py-2 bg-[#A24CDC] text-white text-sm font-semibold rounded-full shadow-sm hover:brightness-110 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Start Production
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-[#A24CDC]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-xl rounded-2xl py-4 flex flex-col gap-4 px-6 animate-in fade-in zoom-in-95">
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
              className="w-full text-center px-5 py-3 bg-[#A24CDC] text-white font-semibold rounded-xl"
            >
              Start Production
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
