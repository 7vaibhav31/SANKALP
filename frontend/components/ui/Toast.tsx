import React from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

/**
 * Toast notification component. Positioned at the bottom center.
 */
export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div 
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap transition-opacity duration-300 z-[99] pointer-events-none ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {message}
    </div>
  );
};
