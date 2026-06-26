import { useState, useCallback } from 'react';
import { Message, AIModel, FileAttachment } from '../types';
import { sendMessage as apiSendMessage, clearHistory } from '../api/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentModel, setCurrentModel] = useState<AIModel>('Claude');

  const sendMessage = useCallback(async (content: string, attachments?: FileAttachment[]) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
      attachments
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await apiSendMessage(content, currentModel, attachments);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        model: response.model,
        timestamp: new Date().toISOString()
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Failed to send message', error);
    } finally {
      setIsTyping(false);
    }
  }, [currentModel]);

  const switchModel = useCallback((model: AIModel) => {
    setCurrentModel(model);
  }, []);

  const clearMessages = useCallback(async () => {
    await clearHistory();
    setMessages([]);
  }, []);
  
  const initMessages = useCallback((initialMessages: Message[]) => {
    setMessages(initialMessages);
  }, []);

  return {
    messages,
    isTyping,
    currentModel,
    sendMessage,
    switchModel,
    clearMessages,
    initMessages
  };
}
