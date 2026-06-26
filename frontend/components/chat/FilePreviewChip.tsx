import React from 'react';
import { FileAttachment } from '../../lib/types';
import { IconPhoto, IconFileText, IconX } from '@tabler/icons-react';

interface FilePreviewChipProps {
  file: FileAttachment;
  onRemove?: () => void;
  readOnly?: boolean;
}

/**
 * Displays a small chip for an attached file (image or doc).
 */
export const FilePreviewChip: React.FC<FilePreviewChipProps> = ({ file, onRemove, readOnly = false }) => {
  const Icon = file.type === 'image' ? IconPhoto : IconFileText;
  
  return (
    <div className={`bg-gray-100 rounded-md px-2.5 py-1 text-[11px] text-gray-800 flex items-center gap-1.5 ${!readOnly ? 'border border-gray-200' : ''}`}>
      <Icon size={14} className="text-brand" />
      <span className="truncate max-w-[120px]">{file.name}</span>
      
      {!readOnly && onRemove && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-0.5 text-gray-400 hover:text-gray-700 cursor-pointer p-0.5 rounded-full hover:bg-gray-200 transition-colors"
        >
          <IconX size={12} />
        </button>
      )}
    </div>
  );
};
