import React from 'react';
import { Chip } from '../../lib/types';
import { IconFileCv, IconBook, IconPencil, IconCode, IconMail, IconFileDescription, IconForms, IconBriefcase, IconWriting, IconFileInvoice, IconVideo, IconCash, IconCalculator, IconFileDollar, IconUsers, IconReport, IconHeart, IconScale, IconFirstAidKit, IconHome } from '@tabler/icons-react';

interface QuickChipsProps {
  label: string;
  chips: Chip[];
  onChipClick: (message: string) => void;
}

// Map string icons to React components
const iconMap: Record<string, React.ReactNode> = {
  'ti-file-cv': <IconFileCv size={16} />,
  'ti-book': <IconBook size={16} />,
  'ti-pencil': <IconPencil size={16} />,
  'ti-code': <IconCode size={16} />,
  'ti-mail': <IconMail size={16} />,
  'ti-file-description': <IconFileDescription size={16} />,
  'ti-forms': <IconForms size={16} />,
  'ti-briefcase': <IconBriefcase size={16} />,
  'ti-writing': <IconWriting size={16} />,
  'ti-file-invoice': <IconFileInvoice size={16} />,
  'ti-video': <IconVideo size={16} />,
  'ti-cash': <IconCash size={16} />,
  'ti-calculator': <IconCalculator size={16} />,
  'ti-file-dollar': <IconFileDollar size={16} />,
  'ti-users': <IconUsers size={16} />,
  'ti-report': <IconReport size={16} />,
  'ti-heart': <IconHeart size={16} />,
  'ti-scale': <IconScale size={16} />,
  'ti-first-aid-kit': <IconFirstAidKit size={16} />,
  'ti-home': <IconHome size={16} />
};

/**
 * Grid of quick action chips.
 */
export const QuickChips: React.FC<QuickChipsProps> = ({ label, chips, onChipClick }) => {
  if (!chips || chips.length === 0) return null;

  return (
    <div className="ml-0 sm:ml-8 mb-4">
      <div className="text-[10px] text-gray-400 text-center sm:text-left mb-1.5">{label}</div>
      <div className="grid grid-cols-2 gap-2">
        {chips.map((chip, idx) => (
          <div 
            key={idx}
            onClick={() => onChipClick(chip.message)}
            className="bg-white border border-gray-200 rounded-xl px-2.5 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#fef5f0] hover:border-brand transition-colors active:scale-[0.98]"
          >
            <div style={{ color: chip.color }} className="flex-shrink-0">
              {iconMap[chip.icon] || <IconBook size={16} />}
            </div>
            <span className="text-[10px] sm:text-[11px] text-gray-800 font-medium truncate">{chip.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
