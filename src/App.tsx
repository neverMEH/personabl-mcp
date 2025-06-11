import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { Footer } from './components/Footer';
import { WaitlistPage } from './pages/WaitlistPage';
import { ThankYouPage } from './pages/ThankYouPage';
function HomePage() {
  const [waitlistCount, setWaitlistCount] = useState(847);
  const handleJoinWaitlist = (email: string) => {
    setWaitlistCount(prevCount => prevCount + 1);
    toast.success("🎉 You're on the list! We'll notify you when Personabl launches.");
  };
  const scrollToEmailInput = () => {
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput) {
      emailInput.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        emailInput.focus();
      }, 500);
    }
  };
  return <>
      <Header />
      <HeroSection onJoinWaitlist={handleJoinWaitlist} waitlistCount={waitlistCount} />
      <FeaturesSection />
      <CapabilitiesSection />
      <ComingSoonSection />
      <Footer onJoinButtonClick={scrollToEmailInput} />
    </>;
}
export function App() {
  return <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-900">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join-waitlist" element={<WaitlistPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </BrowserRouter>;
}