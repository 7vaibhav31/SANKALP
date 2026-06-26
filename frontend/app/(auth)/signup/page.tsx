'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialAuthButtons } from '../../../components/auth/SocialAuthButtons';
import { Input } from '../../../components/ui/Input';
import { emailSignup, googleAuth } from '../../../lib/api/auth';
import { useToast } from '../../../lib/hooks/useToast';
import { Toast } from '../../../components/ui/Toast';

export default function SignupPage() {
  const router = useRouter();
  const { message, visible, showToast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      showToast('Name, Email and Password are required');
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await emailSignup(formData);
      if (res.success) {
        showToast('Account created successfully!');
        router.push('/onboarding');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async () => {
    setIsLoading(true);
    try {
      await googleAuth('dummy-credential');
      router.push('/onboarding');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center md:p-6 w-full relative"
      style={{ backgroundImage: "url('/auth-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="bg-white md:rounded-2xl flex flex-col w-full min-h-screen md:min-h-0 md:max-w-[420px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 relative z-10 md:my-8">
        
        {/* Header */}
        <div className="pt-10 px-8 pb-6 text-center shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-brand/10 mx-auto mb-5 flex items-center justify-center text-3xl border border-brand/20 shadow-sm">
            🙏
          </div>
          <h1 className="text-gray-900 text-2xl font-bold tracking-tight">Create your account</h1>
          <p className="text-gray-500 text-sm mt-2">Join Sankat Mochan AI today</p>
        </div>
        
        {/* Body */}
        <div className="px-8 pb-10 flex-1 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <form onSubmit={handleSignup} className="flex flex-col gap-3.5 mb-2">
            <Input 
              label="Full Name *" 
              name="name"
              placeholder="E.g. Priya Sharma" 
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            
            <Input 
              label="Work Email *" 
              name="email"
              type="email"
              placeholder="you@company.com" 
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            
            <Input 
              label="Phone Number" 
              name="phone"
              type="tel"
              placeholder="10-digit mobile number" 
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
            />
            
            <Input 
              label="Company / Organization" 
              name="company"
              placeholder="Optional" 
              value={formData.company}
              onChange={handleChange}
              disabled={isLoading}
            />
            
            <Input 
              label="Password *" 
              name="password"
              type="password"
              placeholder="At least 6 characters" 
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />

            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand text-white text-center p-3.5 rounded-lg text-sm font-semibold hover:bg-brand-dark active:bg-brand-dark disabled:bg-[#e0a070] transition-colors w-full tracking-wide mt-2"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <SocialAuthButtons 
            onGoogle={handleSocialAuth} 
            onApple={handleSocialAuth}
            onMicrosoft={handleSocialAuth}
            isLoading={isLoading} 
          />
          
          <div className="mt-8 text-center">
            <p className="text-[13px] text-gray-500">Already have an account? <Link href="/login" className="text-brand hover:underline font-semibold">Log in instead</Link></p>
          </div>
        </div>

        <Toast message={message} visible={visible} />
      </div>
    </div>
  );
}
