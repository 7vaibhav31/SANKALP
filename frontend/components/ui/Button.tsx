import React from 'react';
import { Spinner } from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  isLoading?: boolean;
}

/**
 * Reusable Button component with multiple variants.
 * Applies standard styling and handles loading states.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', isLoading = false, children, disabled, ...props }, ref) => {
    
    const baseStyles = 'font-semibold text-sm px-4 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2';
    
    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-dark',
      outline: 'border border-brand text-brand hover:bg-brand-light bg-transparent',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 border border-transparent',
      danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent',
    };
    
    const disabledStyles = 'opacity-60 cursor-not-allowed';
    
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variants[variant]} ${disabled || isLoading ? disabledStyles : ''} ${className}`}
        {...props}
      >
        {isLoading && <Spinner size="sm" color={variant === 'outline' || variant === 'ghost' ? 'brand' : 'white'} />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
