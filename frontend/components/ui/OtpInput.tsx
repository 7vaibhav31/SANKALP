import React, { useRef } from 'react';

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (val: string) => void;
}

/**
 * OTP Input with multiple boxes. Auto-advances focus.
 */
export const OtpInput: React.FC<OtpInputProps> = ({ length = 6, value, onChange }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value.replace(/\D/g, '');
    if (!val) return;

    const newVal = value.split('');
    newVal[index] = val.substring(val.length - 1);
    const result = newVal.join('').substring(0, length);
    onChange(result);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
        const newVal = value.split('');
        newVal[index - 1] = '';
        onChange(newVal.join(''));
      } else {
        const newVal = value.split('');
        newVal[index] = '';
        onChange(newVal.join(''));
      }
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => { inputsRef.current[idx] = el; }}
          type="tel"
          maxLength={1}
          className="w-[46px] h-[50px] border-[1.5px] border-gray-300 rounded-lg text-xl font-semibold text-center text-gray-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
          value={value[idx] || ''}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};
