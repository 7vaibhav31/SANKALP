import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'gray' | 'success' | 'warning' | 'outline';
  className?: string;
}

/**
 * Small badge component for tags and status indicators.
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    brand: 'bg-brand-light text-brand',
    gray: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    outline: 'bg-transparent border border-gray-300 text-gray-600'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
