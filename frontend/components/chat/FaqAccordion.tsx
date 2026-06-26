import React, { useState } from 'react';
import { FAQ } from '../../lib/types';
import { IconHelpCircle } from '@tabler/icons-react';

interface FaqAccordionProps {
  faqs: FAQ[];
}

/**
 * Expandable list of FAQs relevant to the user type.
 */
export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="ml-0 sm:ml-8 mt-2">
      <div className="text-[10px] text-gray-400 mb-1 pl-2 sm:pl-0">Frequently Asked — tap to expand</div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`p-3 cursor-pointer ${idx < faqs.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex items-start gap-2">
              <IconHelpCircle size={15} className="text-brand flex-shrink-0 mt-0.5" />
              <div className="text-[11px] font-semibold text-brand">{faq.question}</div>
            </div>
            
            {openIndex === idx && (
              <div className="mt-2 text-[11px] text-gray-600 leading-relaxed pl-6 animate-in slide-in-from-top-1 fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
