'use client';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { MobileBottomNav } from '../../components/layout/MobileBottomNav';
import { StatCard } from '../../components/dashboard/StatCard';
import { RecentChats } from '../../components/dashboard/RecentChats';
import { PlanBanner } from '../../components/dashboard/PlanBanner';
import { useAuth } from '../../lib/hooks/useAuth';
import { getUsageStats } from '../../lib/api/user';
import { getChatHistory } from '../../lib/api/chat';
import { Message } from '../../lib/types';
import { IconMessage, IconGridDots, IconFlame } from '@tabler/icons-react';

export default function DashboardPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [stats, setStats] = useState({ messagesToday: 0, limit: 20, packsUsed: 0, streak: 0 });
  const [recentChats, setRecentChats] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [usage, history] = await Promise.all([
          getUsageStats(),
          getChatHistory()
        ]);
        setStats(usage);
        setRecentChats(history.filter(m => m.role === 'user').slice(0, 5));
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) loadData();
  }, [user]);

  if (authLoading || isLoading) return <div className="min-h-screen bg-[#f8f7f5]" />;

  return (
    <div className="min-h-screen bg-[#f8f7f5] pb-20 md:pb-0 text-gray-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Good morning, {user?.name || 'User'}! 🙏</h1>
          <p className="text-sm text-gray-500">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard 
            label="Messages Today" 
            value={stats.messagesToday} 
            subValue={`/ ${stats.limit}`} 
            icon={<IconMessage size={20} />} 
          />
          <StatCard 
            label="Packs Used" 
            value={stats.packsUsed} 
            subValue="/ 10"
            icon={<IconGridDots size={20} />} 
          />
          <StatCard 
            label="Days Active" 
            value={stats.streak} 
            subValue="streak"
            icon={<IconFlame size={20} className="text-orange-500" />} 
          />
        </div>
        
        {/* Banner */}
        <div className="mb-8">
          <PlanBanner plan={user?.plan || 'free'} renewalDate="12 Aug 2026" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <RecentChats chats={recentChats} />
          </div>
        </div>
      </main>
      
      <MobileBottomNav />
    </div>
  );
}
