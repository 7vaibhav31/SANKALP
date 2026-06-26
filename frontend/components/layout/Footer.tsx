import React from 'react';
import Link from 'next/link';

/**
 * Site footer with 4 columns of links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-sm text-gray-600 hover:text-brand">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-brand">Pricing</Link></li>
              <li><Link href="/languages" className="text-sm text-gray-600 hover:text-brand">Languages</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-brand">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-brand">Careers</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-brand">Blog</Link></li>
              <li><Link href="/press" className="text-sm text-gray-600 hover:text-brand">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-sm text-gray-600 hover:text-brand">Help Center</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-brand">Contact Us</Link></li>
              <li><Link href="/status" className="text-sm text-gray-600 hover:text-brand">System Status</Link></li>
              <li><Link href="/community" className="text-sm text-gray-600 hover:text-brand">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-brand">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-sm text-gray-600 hover:text-brand">Refund Policy</Link></li>
              <li><Link href="/guidelines" className="text-sm text-gray-600 hover:text-brand">Community Guidelines</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Sankat Mochan AI. Built with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};
