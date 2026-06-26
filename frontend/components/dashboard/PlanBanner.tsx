import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { PlanType } from '../../lib/types';
import Link from 'next/link';

interface PlanBannerProps {
  plan: PlanType;
  renewalDate?: string;
}

export const PlanBanner: React.FC<PlanBannerProps> = ({ plan, renewalDate }) => {
  const planNames: Record<PlanType, string> = {
    free: 'Free Tier',
    student: 'Student Plan',
    general: 'General Plan',
    power: 'Power Plan'
  };

  const isFree = plan === 'free';

  return (
    <Card 
      className={`bg-gradient-to-r ${isFree ? 'from-gray-900 to-gray-800 text-white' : 'from-brand to-[#e06a32] text-white'} border-none`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold mb-1">Current Plan: {planNames[plan]}</h3>
          {isFree ? (
            <p className="text-sm text-gray-300">Upgrade to unlock all prompt packs and unlimited messages.</p>
          ) : (
            <p className="text-sm text-white/80">
              Renews on {renewalDate || 'N/A'}. Thank you for supporting Sankat Mochan!
            </p>
          )}
        </div>
        
        <Link href="/pricing">
          <Button variant={isFree ? 'primary' : 'outline'} className={isFree ? 'bg-brand text-white border-none' : 'text-white border-white hover:bg-white/10'}>
            {isFree ? 'Upgrade Now' : 'Manage Plan'}
          </Button>
        </Link>
      </div>
    </Card>
  );
};
