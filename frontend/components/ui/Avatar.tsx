import React from 'react';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'brand' | 'gray' | 'blue';
}

/**
 * Avatar component displaying initials.
 */
export const Avatar: React.FC<AvatarProps> = ({ initials, size = 'md', color = 'brand' }) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-xl'
  };

  const colorMap = {
    brand: 'bg-brand text-white',
    gray: 'bg-gray-200 text-gray-700',
    blue: 'bg-blue-600 text-white'
  };

  return (
    <div className={`rounded-full flex items-center justify-center font-bold ${sizeMap[size]} ${colorMap[color]}`}>
      {initials.toUpperCase()}
    </div>
  );
};
