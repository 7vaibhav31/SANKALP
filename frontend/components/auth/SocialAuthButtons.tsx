import React from 'react';
import { IconBrandApple, IconBrandWindows } from '@tabler/icons-react';
import { GoogleAuthButton } from './GoogleAuthButton';

interface SocialAuthButtonsProps {
  onGoogle: () => void;
  onApple: () => void;
  onMicrosoft: () => void;
  isLoading?: boolean;
}

export const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({ onGoogle, onApple, onMicrosoft, isLoading }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <GoogleAuthButton onClick={onGoogle} isLoading={isLoading} />
      
      <button
        type="button"
        onClick={onMicrosoft}
        disabled={isLoading}
        className="w-full border-[1.5px] border-gray-200 rounded-lg p-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors text-sm font-medium text-gray-700 disabled:opacity-60"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21"><path fill="#f25022" d="M1 1h9v9H1z"/><path fill="#00a4ef" d="M1 11h9v9H1z"/><path fill="#7fba00" d="M11 1h9v9h-9z"/><path fill="#ffb900" d="M11 11h9v9h-9z"/></svg>
        Continue with Microsoft
      </button>

      <button
        type="button"
        onClick={onApple}
        disabled={isLoading}
        className="w-full border-[1.5px] border-gray-200 rounded-lg p-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors text-sm font-medium text-gray-700 disabled:opacity-60"
      >
        <IconBrandApple size={18} className="text-black" />
        Continue with Apple
      </button>
    </div>
  );
};
