import React from 'react';
import { OtpInput } from '../ui/OtpInput';
import { Button } from '../ui/Button';

interface OtpVerifyProps {
  phone: string;
  otp: string;
  setOtp: (otp: string) => void;
  onVerify: () => void;
  isLoading?: boolean;
}

export const OtpVerify: React.FC<OtpVerifyProps> = ({ phone, otp, setOtp, onVerify, isLoading }) => {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="text-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter OTP sent to +91 <span className="font-bold">{phone}</span>
        </label>
        <OtpInput length={6} value={otp} onChange={setOtp} />
      </div>
      
      <Button 
        onClick={onVerify} 
        disabled={otp.length !== 6 || isLoading}
        isLoading={isLoading}
        className="w-full mt-2"
      >
        Verify OTP
      </Button>
    </div>
  );
};
