import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

/**
 * A basic Card container with rounded corners and border.
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md', 
  interactive = false,
  ...props 
}) => {
  
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8'
  };

  const interactiveStyles = interactive ? 'cursor-pointer transition-shadow hover:shadow-md' : '';

  return (
    <div 
      className={`bg-white border border-gray-200 rounded-xl ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
