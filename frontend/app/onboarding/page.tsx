'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconSchool, IconIdBadge2, IconPalette, IconBriefcase, IconHome } from '@tabler/icons-react';
import { USER_TYPES } from '../../lib/constants/userTypes';
import { UserTypeCard } from '../../components/onboarding/UserTypeCard';
import { Button } from '../../components/ui/Button';
import { updateUserType } from '../../lib/api/user';
import { UserType } from '../../lib/types';

export default function OnboardingPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<UserType>('Student');
  const [isLoading, setIsLoading] = useState(false);

  // Map icon strings from constants to React components
  const iconMap: Record<string, React.ReactNode> = {
    'ti-school': <IconSchool size={22} />,
    'ti-id-badge-2': <IconIdBadge2 size={22} />,
    'ti-palette': <IconPalette size={22} />,
    'ti-briefcase': <IconBriefcase size={22} />,
    'ti-home': <IconHome size={22} />
  };

  const handleContinue = async () => {
    setIsLoading(true);
    try {
      await updateUserType(selectedType);
      router.push('/chat');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ece8e1] md:p-6 w-full">
      <div className="bg-white md:rounded-[28px] overflow-hidden flex flex-col w-full min-h-screen md:min-h-[680px] md:max-h-[720px] md:max-w-[800px] md:shadow-2xl relative">
        
        {/* Header */}
        <div className="pt-6 px-5 pb-3 shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => router.back()} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors -ml-1.5">
              <IconArrowLeft size={22} />
            </button>
            <div>
              <h2 className="text-[18px] font-bold text-gray-900 leading-tight">Who are you?</h2>
              <p className="text-[12px] text-gray-500 mt-0.5">We&apos;ll personalise your experience</p>
            </div>
          </div>
        </div>
        
        {/* List */}
        <div className="flex-1 px-4 overflow-y-auto pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {USER_TYPES.map((type) => (
              <UserTypeCard
                key={type.label}
                label={type.label}
                desc={type.desc}
                bg={type.bg}
                color={type.color}
                icon={iconMap[type.icon]}
                selected={selectedType === type.label}
                onClick={() => setSelectedType(type.label as UserType)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 shrink-0 bg-white border-t border-gray-100">
          <Button 
            className="w-full md:max-w-xs md:ml-auto block" 
            onClick={handleContinue}
            isLoading={isLoading}
          >
            Continue as {selectedType.split('/')[0].trim()}
          </Button>
        </div>
        
      </div>
    </div>
  );
}
