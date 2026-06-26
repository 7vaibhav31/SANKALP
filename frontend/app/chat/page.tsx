'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconDotsVertical } from '@tabler/icons-react';
import { Avatar } from '../../components/ui/Avatar';
import { ModelSelector } from '../../components/chat/ModelSelector';
import { ChatWindow } from '../../components/chat/ChatWindow';
import { MessageBubble } from '../../components/chat/MessageBubble';
import { QuickChips } from '../../components/chat/QuickChips';
import { FaqAccordion } from '../../components/chat/FaqAccordion';
import { TypingIndicator } from '../../components/chat/TypingIndicator';
import { ChatInputBar } from '../../components/chat/ChatInputBar';
import { FileUploadPanel } from '../../components/chat/FileUploadPanel';
import { Sidebar } from '../../components/layout/Sidebar';
import { MobileBottomNav } from '../../components/layout/MobileBottomNav';
import { useChat } from '../../lib/hooks/useChat';
import { useAuth } from '../../lib/hooks/useAuth';
import { useToast } from '../../lib/hooks/useToast';
import { FileAttachment } from '../../lib/types';
import { CHIPS } from '../../lib/constants/chips';
import { FAQS } from '../../lib/constants/faqs';
import { Toast } from '../../components/ui/Toast';

export default function ChatPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const { showToast, message: toastMessage, visible } = useToast();
  
  const { 
    messages, isTyping, currentModel, 
    sendMessage, switchModel, initMessages, clearMessages 
  } = useChat();

  const [inputText, setInputText] = useState('');
  const [isUploadPanelOpen, setIsUploadPanelOpen] = useState(false);
  const [pendingUploads, setPendingUploads] = useState<FileAttachment[]>([]);
  const [showInitialContent, setShowInitialContent] = useState(true);

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      initMessages([{
        id: 'welcome-msg',
        role: 'assistant',
        content: "Jai Shri Ram! 🙏 Namaste. I'm Sankat Mochan AI.\nHow can I help you today?",
        timestamp: new Date().toISOString()
      }]);
    }
  }, [messages.length, initMessages]);

  const userType = user?.userType || 'Student';
  const labelText = userType.split('/')[0].trim().toLowerCase();
  
  const handleSend = () => {
    if (!inputText.trim() && pendingUploads.length === 0) return;
    
    sendMessage(inputText.trim(), [...pendingUploads]);
    setInputText('');
    setPendingUploads([]);
    setIsUploadPanelOpen(false);
    setShowInitialContent(false);
  };

  const handleChipClick = (msg: string) => {
    sendMessage(msg);
    setShowInitialContent(false);
  };

  const handleFileSelect = (file: FileAttachment) => {
    setPendingUploads(prev => [...prev, file]);
  };

  const handleRemoveUpload = (idx: number) => {
    setPendingUploads(prev => prev.filter((_, i) => i !== idx));
  };

  if (authLoading) return <div className="min-h-screen bg-[#ece8e1]"></div>;

  return (
    <div className="flex h-screen bg-[#FDFCFD] overflow-hidden text-gray-900 font-sans">
      
      {/* Desktop Sidebar */}
      <Sidebar 
        recentChats={messages.filter(m => m.role === 'user')} 
        onNewChat={() => {
          clearMessages();
          setShowInitialContent(true);
        }} 
      />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 border-b border-gray-100 flex-shrink-0 z-10 sticky top-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/onboarding')} className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 -ml-2">
              <IconArrowLeft size={22} />
            </button>
            
            <Avatar initials="SM" size="md" color="brand" />
            
            <div className="ml-1">
              <div className="text-[15px] font-bold leading-tight text-slate-900">Sankat Mochan AI</div>
              <div className="text-[11px] text-green-600 font-medium tracking-wide">● Online</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ModelSelector currentModel={currentModel} onSelect={switchModel} />
            <button 
              onClick={() => showToast('More options coming soon!')}
              className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors hidden sm:block"
            >
              <IconDotsVertical size={20} />
            </button>
          </div>
        </header>
        
        {/* Messages Window */}
        <ChatWindow>
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          
          {showInitialContent && (
            <>
              <QuickChips 
                label={`Quick actions for ${labelText}s`}
                chips={CHIPS[userType] || CHIPS['Student']}
                onChipClick={handleChipClick}
              />
              <FaqAccordion faqs={FAQS[userType] || FAQS['Student']} />
            </>
          )}

          {isTyping && (
            <div className="flex gap-2 items-end justify-start">
              <div className="shrink-0 mb-1">
                <Avatar initials="SM" size="sm" color="brand" />
              </div>
              <div className="bg-white border border-gray-200 rounded-[4px_12px_12px_12px] px-3.5 py-2.5">
                <TypingIndicator />
              </div>
            </div>
          )}
        </ChatWindow>
        
        {/* Upload Panel */}
        <FileUploadPanel 
          isOpen={isUploadPanelOpen} 
          onFileSelect={handleFileSelect}
          pendingUploads={pendingUploads}
          onRemoveUpload={handleRemoveUpload}
        />
        
        {/* Input Bar */}
        <ChatInputBar 
          value={inputText}
          onChange={setInputText}
          onSend={handleSend}
          isUploadPanelOpen={isUploadPanelOpen}
          toggleUploadPanel={() => setIsUploadPanelOpen(!isUploadPanelOpen)}
          disabled={isTyping}
        />

        {/* Mobile Bottom Nav Spacer - to prevent input bar from overlapping with bottom nav on mobile */}
        <div className="h-16 md:hidden bg-white shrink-0"></div>
      </div>
      
      {/* Toast */}
      <Toast message={toastMessage} visible={visible} />
      
      {/* Mobile Nav */}
      <MobileBottomNav />
    </div>
  );
}
