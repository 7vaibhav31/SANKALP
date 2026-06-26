'use client';
import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { MobileBottomNav } from '../../components/layout/MobileBottomNav';
import { PricingCard } from '../../components/pricing/PricingCard';
import { PRICING_PLANS } from '../../lib/constants/pricing';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f5] flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing for Bharat</h1>
          <p className="text-gray-600">Choose the plan that fits your needs. No hidden fees, ever.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              isPopular={plan.id === 'general'} 
            />
          ))}
        </div>
        
        {/* Enterprise / NGO CTA */}
        <div className="mt-20 max-w-3xl mx-auto bg-brand-light/30 rounded-2xl p-8 text-center border border-brand/20">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Need a custom solution for your NGO or Business?</h3>
          <p className="text-gray-600 mb-6 text-sm">Contact our sales team for tailored packages, bulk licenses, and API access.</p>
          <button className="text-brand font-semibold text-sm hover:underline">Contact Sales &rarr;</button>
        </div>
      </main>
      
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
