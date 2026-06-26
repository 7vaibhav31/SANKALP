import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7f5]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium">
              🇮🇳 Made for Bharat
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight max-w-4xl mx-auto">
              One <span className="text-brand">AI Platform</span> for Every Indian.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a student, small business owner, or homemaker — Sankat Mochan AI brings the power of world-class AI models like Claude & ChatGPT right to your fingertips in Hindi and English.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-brand/20 hover:-translate-y-0.5 transition-transform">
                  Start For Free
                </Button>
              </Link>
            </div>
            
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-white px-4 border-y border-gray-100" id="features">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose Sankat Mochan?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We&apos;ve built an AI that understands your local context, language, and unique daily challenges.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f8f7f5] rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🗣️
                </div>
                <h3 className="font-bold text-lg mb-2">Bilingual Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chat fluently in Hindi or English. Mix both naturally (Hinglish). Our AI understands your local nuances.
                </p>
              </div>
              
              <div className="bg-[#f8f7f5] rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🔒
                </div>
                <h3 className="font-bold text-lg mb-2">Secure & Private</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your data is encrypted and securely stored. We respect your privacy and never train models on your personal conversations.
                </p>
              </div>
              
              <div className="bg-[#f8f7f5] rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💰
                </div>
                <h3 className="font-bold text-lg mb-2">Affordable</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get access to premium models like GPT-4o and Claude at a fraction of the cost, priced in Rupees.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 bg-brand px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your digital life?</h2>
            <p className="text-brand-light mb-10 text-lg">Join thousands of Indians already using Sankat Mochan AI daily.</p>
            <Link href="/signup">
              <button className="bg-white text-brand font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Create Free Account
              </button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
