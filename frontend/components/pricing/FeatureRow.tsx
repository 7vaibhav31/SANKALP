import React from 'react';
import { IconCheck } from '@tabler/icons-react';

interface FeatureRowProps {
  text: string;
}

export const FeatureRow: React.FC<FeatureRowProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">
        <IconCheck size={14} stroke={3} />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
};
