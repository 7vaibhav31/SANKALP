import { Message, AIModel, FileAttachment } from '../types';

// TODO: Replace with real API call

const REPLIES = [
  "Great question! Let me help you with that. 🙏",
  "Sure! Here's what you need to know — I'll break it down step by step.",
  "Bilkul! I can guide you through this. What would you like to explore first?",
  "Got it! This is a common query. Here's a clear answer for you.",
  "Here is a detailed explanation."
];

export async function sendMessage(content: string, model: AIModel, attachments?: FileAttachment[]): Promise<{ message: string; model: AIModel }> {
  console.log('Sending message:', content, 'using model:', model, 'with attachments:', attachments);
  return new Promise((resolve) => {
    setTimeout(() => {
      const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
      resolve({
        message: `Using ${model}: ${reply}`,
        model: model,
      });
    }, 1500);
  });
}

export async function getChatHistory(): Promise<Message[]> {
  console.log('Fetching chat history');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'msg-0',
          role: 'assistant',
          content: "Jai Shri Ram! 🙏 Namaste. I'm Sankat Mochan AI.\nHow can I help you today?",
          timestamp: new Date().toISOString()
        }
      ]);
    }, 500);
  });
}

export async function clearHistory(): Promise<void> {
  console.log('Clearing chat history');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
