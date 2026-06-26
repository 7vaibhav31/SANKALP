import React from 'react';
import { Message } from '../../lib/types';
import { Avatar } from '../ui/Avatar';
import { FilePreviewChip } from './FilePreviewChip';

interface MessageBubbleProps {
  message: Message;
}

/**
 * Individual chat message bubble (User or AI).
 */
export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-2 items-end ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="shrink-0 mb-1">
          <Avatar initials="SM" size="sm" color="brand" />
        </div>
      )}
      
      <div className={`
        px-4 py-3 text-[14px] leading-relaxed max-w-[85%] lg:max-w-[70%] shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        ${isUser 
          ? 'bg-[#C8490B] text-white rounded-[16px_4px_16px_16px]' 
          : 'bg-[#F8FAFC] text-slate-800 border border-slate-100 rounded-[4px_16px_16px_16px]'
        }
      `}>
        {/* Render text with basic newlines */}
        {message.content.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== message.content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}

        {/* Attachments if any */}
        {message.attachments && message.attachments.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {message.attachments.map((file, idx) => (
              <FilePreviewChip key={idx} file={file} readOnly />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
