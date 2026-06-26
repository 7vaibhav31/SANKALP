export type UserType = 'Student' | 'Government Employee' | 'Freelancer / Creator' | 'Business / MSME' | 'Homemaker / Citizen';

export type PlanType = 'free' | 'student' | 'general' | 'power';

export interface User {
  id: string;
  name: string;
  phone: string;
  userType: UserType;
  plan: PlanType;
  createdAt: string;
}

export type AIModel = 'Claude' | 'Gemini' | 'GPT-4o' | 'Grok';

export interface FileAttachment {
  name: string;
  type: 'image' | 'doc';
  size?: number;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  model?: AIModel;
  timestamp: string;
  attachments?: FileAttachment[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  template: string;      // Template with [PLACEHOLDER] markers
  description: string;
}

export interface PromptPack {
  id: string;
  name: string;
  description: string;
  icon: string;          // Tabler icon name
  color: string;         // Hex color
  bgColor: string;       // Light bg hex
  targetUserType: UserType[];
  prompts: PromptTemplate[];
  usageCount: number;
}

export interface PricingPlan {
  id: PlanType;
  name: string;
  price: number;
  priceYearly: number;
  messagesPerDay: number;
  features: string[];
  isPopular: boolean;
}

export interface Chip {
  icon: string;
  color: string;
  label: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
