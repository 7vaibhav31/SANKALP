import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Tier',
    price: 0,
    priceYearly: 0,
    messagesPerDay: 20,
    features: [
      '20 messages per day',
      'Access to 2 basic packs',
      'Basic AI models',
      'Contains ads'
    ],
    isPopular: false
  },
  {
    id: 'student',
    name: 'Student Plan',
    price: 49,
    priceYearly: 490,
    messagesPerDay: 200,
    features: [
      '200 messages per day',
      'All 10 prompt packs',
      'Hindi & English support',
      'Verified student badge'
    ],
    isPopular: false
  },
  {
    id: 'general',
    name: 'General Plan',
    price: 99,
    priceYearly: 990,
    messagesPerDay: 500,
    features: [
      '500 messages per day',
      'All 10 prompt packs',
      'Priority response speed',
      'No ads'
    ],
    isPopular: true
  },
  {
    id: 'power',
    name: 'Power Plan',
    price: 249,
    priceYearly: 2490,
    messagesPerDay: 2000,
    features: [
      '2000 messages per day',
      'Image generation',
      'Voice input support',
      'Premium AI models'
    ],
    isPopular: false
  }
];
