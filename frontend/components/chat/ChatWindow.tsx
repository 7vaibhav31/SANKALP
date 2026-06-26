'use client';
import React, { useEffect, useRef } from 'react';

interface ChatWindowProps {
  children: React.ReactNode;
}

/**
 * Main scrollable chat area container.
 */
export const ChatWindow: React.FC<ChatWindowProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when children change (new messages)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto bg-[#f5f4f2] p-3 sm:p-5 lg:p-8 flex flex-col gap-3 relative"
    >
      {/* Spacer for sticky header */}
      <div className="h-2"></div>
      
      {children}
      
      {/* Bottom spacer so last message isn't cut off by input */}
      <div className="h-4"></div>
    </div>
  );
};
