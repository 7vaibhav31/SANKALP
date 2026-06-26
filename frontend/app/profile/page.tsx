'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { MobileBottomNav } from '../../components/layout/MobileBottomNav';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Avatar } from '../../components/ui/Avatar';
import { useAuth } from '../../lib/hooks/useAuth';
import { IconLogout, IconSettings, IconUserCircle, IconCreditCard, IconHelpCircle } from '@tabler/icons-react';

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  if (isLoading) return <div className="min-h-screen bg-[#f8f7f5]" />;

  return (
    <div className="min-h-screen bg-[#f8f7f5] pb-20 md:pb-0">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>
        
        <Card className="mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <Avatar initials={user?.name?.[0] || 'U'} size="lg" color="brand" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h2>
            <p className="text-sm text-gray-500 mb-1">+91 {user?.phone || 'XXXXXXXXXX'}</p>
            <p className="text-xs font-medium bg-brand/10 text-brand px-2 py-0.5 rounded-full inline-block mt-1">
              {user?.userType || 'Student'}
            </p>
          </div>
          <Button variant="outline" className="px-3 py-1.5 text-xs" onClick={() => router.push('/onboarding')}>
            Edit Profile
          </Button>
        </Card>
        
        <div className="space-y-4">
          <Card padding="none" className="overflow-hidden">
            <div className="divide-y divide-gray-100">
              
              <div className="p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <IconUserCircle size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Account Settings</div>
                  <div className="text-xs text-gray-500">Manage your personal information</div>
                </div>
              </div>
              
              <div 
                className="p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors"
                onClick={() => router.push('/pricing')}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <IconCreditCard size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Plan & Billing</div>
                  <div className="text-xs text-gray-500">Current Plan: {user?.plan || 'Free'}</div>
                </div>
              </div>
              
              <div className="p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <IconSettings size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Preferences</div>
                  <div className="text-xs text-gray-500">Language, Theme, Notifications</div>
                </div>
              </div>
              
              <div className="p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <IconHelpCircle size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Help & Support</div>
                  <div className="text-xs text-gray-500">FAQs and Contact us</div>
                </div>
              </div>
              
            </div>
          </Card>
          
          <Button 
            variant="danger" 
            className="w-full flex justify-center items-center gap-2"
            onClick={handleLogout}
          >
            <IconLogout size={18} />
            Log Out
          </Button>
        </div>
      </main>
      
      <MobileBottomNav />
    </div>
  );
}
