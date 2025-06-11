import React, { useEffect, useState, useRef } from 'react';
interface HeroSectionProps {
  onJoinWaitlist: (email: string) => void;
  waitlistCount: number;
}
export function HeroSection({
  onJoinWaitlist,
  waitlistCount
}: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [displayCount, setDisplayCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onJoinWaitlist(email);
      setEmail('');
    }
  };
  useEffect(() => {
    const target = waitlistCount;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800">
      {/* Floating elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-20 h-20 rounded-full bg-white bg-opacity-10 top-[10%] left-[10%] animate-float"></div>
        <div className="absolute w-32 h-32 rounded-full bg-white bg-opacity-10 top-[70%] right-[10%] animate-float delay-1000"></div>
        <div className="absolute w-16 h-16 rounded-full bg-white bg-opacity-10 top-[30%] right-[30%] animate-float delay-2000"></div>
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div className="container mx-auto px-5 relative z-20">
        <div className="max-w-3xl text-white">
          <div className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
            Personabl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            AI-Powered Amazon Intelligence Integration
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Turn Amazon data into competitive advantage with advanced market
            analysis, pricing optimization, and opportunity discovery powered by
            Keepa's comprehensive database.
          </p>
          <div className="mb-8 text-lg opacity-90">
            <span className="font-semibold">Join the waitlist now for a 7-day free trial</span>
            <span className="mx-2">•</span>
            <span>$39.99/month at launch</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8 max-w-lg">
            
            
          </form>
          
        </div>
      </div>
    </section>;
}