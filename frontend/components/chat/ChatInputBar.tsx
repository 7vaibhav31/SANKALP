import React, { useRef, useEffect } from 'react';
import { IconPlus, IconX, IconSend } from '@tabler/icons-react';

interface ChatInputBarProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  isUploadPanelOpen: boolean;
  toggleUploadPanel: () => void;
  disabled?: boolean;
}

/**
 * Bottom input bar with textarea and attach/send buttons.
 */
export const ChatInputBar: React.FC<ChatInputBarProps> = ({
  value, onChange, onSend, isUploadPanelOpen, toggleUploadPanel, disabled
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-transparent px-4 py-3 sm:px-8 flex items-end justify-center w-full max-w-4xl mx-auto shrink-0 z-20 pb-safe sm:pb-6 relative">
      <div className="w-full flex items-end gap-2 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-[32px] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <button 
          onClick={toggleUploadPanel}
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ml-1 ${
            isUploadPanelOpen ? 'bg-brand/10 text-brand' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {isUploadPanelOpen ? <IconX size={20} /> : <IconPlus size={20} />}
        </button>
        
        <div className="flex-1 flex items-center min-h-[40px] py-0.5">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Ask anything in Hindi or English…"
            className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 resize-none py-[9px] px-2 max-h-[120px] no-scrollbar placeholder:text-gray-400 disabled:opacity-50"
            rows={1}
          />
        </div>
        
        <button 
          onClick={onSend}
          disabled={disabled || (!value.trim() && !isUploadPanelOpen)} // Allow send if files
          className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0 hover:bg-brand-dark active:scale-95 disabled:bg-[#e0a070] disabled:active:scale-100 transition-all shadow-md mr-0.5"
        >
          <IconSend size={18} stroke={2.5} className="mr-0.5 mt-0.5" />
        </button>
      </div>
    </div>
  );
};
