import React from 'react';

interface DividerProps {
  label?: string;
}

/**
 * Horizontal divider, optionally with a text label in the middle.
 */
export const Divider: React.FC<DividerProps> = ({ label }) => {
  if (!label) {
    return <div className="h-px bg-gray-200 w-full my-4" />;
  }

  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px bg-gray-200 flex-1" />
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</span>
      <div className="h-px bg-gray-200 flex-1" />
    </div>
  );
};
