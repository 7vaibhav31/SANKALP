import React from 'react';
import { Card } from '../ui/Card';
import { Message } from '../../lib/types';
import { IconMessage } from '@tabler/icons-react';
import { formatDate } from '../../lib/utils/formatters';

interface RecentChatsProps {
  chats: Message[];
}

export const RecentChats: React.FC<RecentChatsProps> = ({ chats }) => {
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">Recent Conversations</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {chats.length === 0 ? (
          <div className="p-6 text-center text-sm text-gray-500">No recent chats found.</div>
        ) : (
          chats.map((chat) => (
            <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand shrink-0">
                <IconMessage size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {chat.content}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-gray-500">{formatDate(chat.timestamp)}</span>
                  <span className="text-[11px] text-gray-400">•</span>
                  <span className="text-[11px] text-brand">{chat.model || 'Claude'}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};
