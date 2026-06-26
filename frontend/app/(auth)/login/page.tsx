'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialAuthButtons } from '../../../components/auth/SocialAuthButtons';
import { Input } from '../../../components/ui/Input';
import { emailLogin, googleAuth } from '../../../lib/api/auth';
import { useToast } from '../../../lib/hooks/useToast';
import { Toast } from '../../../components/ui/Toast';

export default function LoginPage() {
  const router = useRouter();
  const { message, visible, showToast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await emailLogin(email, password);
      if (res.success) {
        if (res.isNewUser) {
          router.push('/onboarding');
        } else {
          router.push('/chat');
        }
      } else {
        showToast('Invalid credentials. Password must be at least 6 characters.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async () => {
    setIsLoading(true);
    try {
      const res = await googleAuth('dummy-credential');
      if (res.isNewUser) {
        router.push('/onboarding');
      } else {
        router.push('/chat');
      }
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
          <h1 className="text-gray-900 text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-2">Log in to Sankat Mochan AI</p>
        </div>
        
        {/* Body */}
        <div className="px-8 pb-10 flex-1 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
            <Input 
              label="Email Address" 
              type="email"
              placeholder="you@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            
            <div>
              <Input 
                label="Password" 
                type="password"
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <div className="text-right mt-1.5">
                <a href="#" className="text-[11px] text-brand hover:underline font-medium">Forgot password?</a>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand text-white text-center p-3.5 rounded-lg text-sm font-semibold hover:bg-brand-dark active:bg-brand-dark disabled:bg-[#e0a070] transition-colors w-full tracking-wide mt-2"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <SocialAuthButtons 
            onGoogle={handleSocialAuth} 
            onApple={handleSocialAuth}
            onMicrosoft={handleSocialAuth}
            isLoading={isLoading} 
          />
          
          <div className="mt-8 text-center">
            <p className="text-[13px] text-gray-500">Don&apos;t have an account? <Link href="/signup" className="text-brand hover:underline font-semibold">Sign up</Link></p>
          </div>
        </div>

        <Toast message={message} visible={visible} />
      </div>
    </div>
  );
}
