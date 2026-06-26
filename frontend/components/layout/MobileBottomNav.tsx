'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMessageCircle, IconGridDots, IconLayoutDashboard, IconUser } from '@tabler/icons-react';

/**
 * Bottom navigation bar for mobile devices only.
 * Hidden on md+ screens.
 */
export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Chat', icon: <IconMessageCircle size={22} />, path: '/chat' },
    { label: 'Dashboard', icon: <IconLayoutDashboard size={22} />, path: '/dashboard' },
    { label: 'Profile', icon: <IconUser size={22} />, path: '/profile' }
  ];

  // Only show on these routes
  const activeRoutes = ['/chat', '/dashboard', '/profile'];
  const isVisible = activeRoutes.some(r => pathname?.startsWith(r));

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-40 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);
        return (
          <Link 
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-brand' : 'text-gray-500 hover:text-gray-900'}`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
