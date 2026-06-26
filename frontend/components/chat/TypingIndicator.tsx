import React from 'react';

/**
 * Three bouncing dots animation for typing state.
 */
export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-1 px-1 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-40 typing-dot"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-40 typing-dot"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-40 typing-dot"></span>
    </div>
  );
};
