'use client';
import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f5] flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Sankat Mochan AI</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Sankat Mochan AI was built with a simple mission: to make world-class AI accessible, affordable, and deeply relevant for every Indian. 
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We believe that artificial intelligence shouldn't be a privilege for the few. Whether you are a student preparing for competitive exams, a small business owner in a tier-2 city, or a homemaker looking to simplify daily tasks, AI can be a powerful ally.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why We Built This</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Current global AI platforms often lack contextual understanding of Indian cultures, languages (like mixing Hindi and English), and specific local problems. Additionally, their subscription costs can be prohibitive. Sankat Mochan AI bridges this gap by offering a familiar interface, localized pre-built prompts, and affordable pricing in INR.
          </p>
          
          <div className="bg-brand/10 p-6 rounded-xl border border-brand/20 mt-10 text-center">
            <h3 className="font-bold text-brand mb-2">Join us on this journey.</h3>
            <p className="text-sm text-brand-dark">Empowering Bharat, one prompt at a time.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
