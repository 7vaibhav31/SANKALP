import React from 'react';
import { IconCheck } from '@tabler/icons-react';

interface UserTypeCardProps {
  label: string;
  icon: React.ReactNode;
  bg: string;
  color: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}

/**
 * Card for selecting a user persona during onboarding.
 */
export const UserTypeCard: React.FC<UserTypeCardProps> = ({
  label, icon, bg, color, desc, selected, onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white border-[1.5px] rounded-xl p-3.5 flex items-center gap-3 cursor-pointer transition-colors ${
        selected ? 'border-brand border-2' : 'border-gray-200 hover:border-brand-light'
      }`}
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" 
        style={{ backgroundColor: bg, color: color }}
      >
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="text-[11px] text-gray-500 mt-0.5">{desc}</div>
      </div>
      
      <div className={`w-[18px] h-[18px] rounded-full bg-brand flex items-center justify-center flex-shrink-0 text-white ${selected ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        <IconCheck size={12} stroke={3} />
      </div>
    </div>
  );
};
