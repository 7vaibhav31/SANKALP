import React from 'react';

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, error, className = '', ...props }, ref) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, '');
      onChange(val.substring(0, 10));
    };

    return (
      <div className={`w-full ${className}`}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number</label>
        <div className={`flex border-[1.5px] rounded-lg overflow-hidden bg-[#fafafa] focus-within:border-brand transition-colors ${error ? 'border-red-500' : 'border-gray-200'}`}>
          <div className="px-3.5 py-3 border-r-[1.5px] border-gray-200 text-sm font-medium text-gray-800 bg-[#f5f5f5] flex items-center shrink-0">
            +91
          </div>
          <input
            ref={ref}
            type="tel"
            maxLength={10}
            className="flex-1 px-3.5 py-3 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
            placeholder="Enter your number"
            value={value}
            onChange={handleChange}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
PhoneInput.displayName = 'PhoneInput';
