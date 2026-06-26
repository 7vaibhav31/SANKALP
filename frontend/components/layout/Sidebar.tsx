import React from 'react';
import { Message } from '../../lib/types';
import { IconMessage, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

interface SidebarProps {
  recentChats: Message[];
  onNewChat: () => void;
}

/**
 * Desktop sidebar for chat history. Hidden on mobile.
 */
export const Sidebar: React.FC<SidebarProps> = ({ recentChats, onNewChat }) => {
  return (
    <div className="hidden lg:flex w-[280px] bg-[#0a192f] flex-col h-full overflow-hidden text-slate-300 shadow-xl z-20">
      <div className="p-5">
        <button 
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 bg-brand/90 text-white rounded-xl py-3 text-sm font-semibold hover:bg-brand transition-colors shadow-sm"
        >
          <IconPlus size={18} stroke={2.5} />
          New Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 no-scrollbar">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-3">Recent History</div>
        
        <div className="space-y-1">
          {recentChats.map((chat, idx) => (
            <Link 
              key={idx} 
              href="#" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-[13px] font-medium text-slate-300 transition-colors truncate"
            >
              <IconMessage size={16} className="text-slate-500 flex-shrink-0" />
              <span className="truncate">{chat.content.substring(0, 20)}...</span>
            </Link>
          ))}
          {recentChats.length === 0 && (
            <div className="text-sm text-slate-500 px-3 py-2 italic">No recent chats</div>
          )}
        </div>
      </div>
      
      <div className="p-5 border-t border-white/5">
        <Link href="/dashboard" className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
          Dashboard
        </Link>
      </div>
    </div>
  );
};
