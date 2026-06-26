import React from 'react';
import Link from 'next/link';
import { IconMenu2 } from '@tabler/icons-react';
import { Button } from '../ui/Button';

/**
 * Top navigation bar for desktop and mobile.
 */
export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xs">
            🙏
          </div>
          <span className="font-bold text-lg text-gray-900 hidden sm:block">Sankat Mochan AI</span>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">About</Link>
        </nav>
        
        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" className="py-2 px-3 text-xs sm:py-3 sm:px-4 sm:text-sm">Get Started Free</Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600">
            <IconMenu2 size={24} />
          </button>
        </div>
        
      </div>
    </header>
  );
};
