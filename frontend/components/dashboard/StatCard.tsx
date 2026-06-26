import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subValue, icon }) => {
  return (
    <Card padding="md" className="flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</h4>
        {icon && <div className="text-brand opacity-80">{icon}</div>}
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {subValue && <span className="text-xs font-medium text-gray-400">{subValue}</span>}
      </div>
    </Card>
  );
};
