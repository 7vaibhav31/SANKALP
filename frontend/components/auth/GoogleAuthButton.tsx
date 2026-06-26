import React from 'react';

interface GoogleAuthButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="w-full border-[1.5px] border-gray-200 rounded-lg p-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors text-sm font-medium text-gray-700 disabled:opacity-60"
    >
      <svg width="16" height="16" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
        <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.8 0-14.5 4.3-18.2 10.7z"/>
        <path fill="#FBBC05" d="M24 44c5.4 0 10.3-2 14-5.2l-6.5-5.5C29.6 35 26.9 36 24 36c-5.2 0-9.7-3.4-11.3-8.1L6 33.3C9.7 39.7 16.3 44 24 44z"/>
        <path fill="#EA4335" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.1-2.2 4-4.1 5.3l6.5 5.5C37.4 39 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
      </svg>
      Continue with Google
    </button>
  );
};
