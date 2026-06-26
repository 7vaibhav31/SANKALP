import React from 'react';
import { FileAttachment } from '../../lib/types';
import { IconPhoto, IconFileText } from '@tabler/icons-react';
import { FilePreviewChip } from './FilePreviewChip';

interface FileUploadPanelProps {
  isOpen: boolean;
  onFileSelect: (file: FileAttachment) => void;
  pendingUploads: FileAttachment[];
  onRemoveUpload: (index: number) => void;
}

/**
 * Collapsible panel for uploading images and documents.
 */
export const FileUploadPanel: React.FC<FileUploadPanelProps> = ({ isOpen, onFileSelect, pendingUploads, onRemoveUpload }) => {
  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'doc') => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onFileSelect({
        name: file.name,
        type,
        size: file.size
      });
      // Reset input so the same file can be selected again if removed
      e.target.value = '';
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-3 shrink-0 animate-in slide-in-from-bottom-2 fade-in duration-200 z-10">
      <div className="text-[11px] text-gray-500 font-semibold mb-2 uppercase tracking-wide">Attach files</div>
      
      <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-4">
        <label className="flex-1 border-[1.5px] border-dashed border-gray-300 rounded-xl py-3 px-2 flex flex-col items-center justify-center cursor-pointer bg-[#fafafa] hover:border-brand hover:bg-[#fff8f5] transition-colors group">
          <IconPhoto size={24} className="text-gray-400 group-hover:text-brand mb-1 transition-colors" />
          <span className="text-[11px] font-medium text-gray-600 group-hover:text-brand transition-colors">Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'image')} />
        </label>
        
        <label className="flex-1 border-[1.5px] border-dashed border-gray-300 rounded-xl py-3 px-2 flex flex-col items-center justify-center cursor-pointer bg-[#fafafa] hover:border-brand hover:bg-[#fff8f5] transition-colors group">
          <IconFileText size={24} className="text-gray-400 group-hover:text-brand mb-1 transition-colors" />
          <span className="text-[11px] font-medium text-gray-600 group-hover:text-brand transition-colors">Document</span>
          <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={(e) => handleFileChange(e, 'doc')} />
        </label>
      </div>
      
      {pendingUploads.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-gray-100">
          {pendingUploads.map((file, idx) => (
            <FilePreviewChip 
              key={idx} 
              file={file} 
              onRemove={() => onRemoveUpload(idx)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
