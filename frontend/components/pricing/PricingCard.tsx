import React from 'react';
import { PricingPlan } from '../../lib/types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { FeatureRow } from './FeatureRow';
import { formatCurrency } from '../../lib/utils/formatters';

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isPopular }) => {
  return (
    <Card 
      className={`relative flex flex-col h-full ${
        isPopular ? 'border-brand border-2 shadow-lg scale-100 md:scale-105 z-10' : 'border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-gray-900">{formatCurrency(plan.price)}</span>
          <span className="text-sm text-gray-500 font-medium">/ month</span>
        </div>
      </div>
      
      <div className="space-y-4 flex-1 mb-8">
        {plan.features.map((feature, idx) => (
          <FeatureRow key={idx} text={feature} />
        ))}
      </div>
      
      <Button 
        variant={isPopular ? 'primary' : 'outline'} 
        className="w-full mt-auto"
      >
        {plan.price === 0 ? 'Start Free' : 'Choose Plan'}
      </Button>
    </Card>
  );
};
