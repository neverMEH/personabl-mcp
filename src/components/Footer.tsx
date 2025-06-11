import React from 'react';
import { Link } from 'react-router-dom';
interface FooterProps {
  onJoinButtonClick: () => void;
}
export function Footer({
  onJoinButtonClick
}: FooterProps) {
  return <footer className="bg-gray-800 text-white py-12 text-center">
      <div className="container mx-auto px-5">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Transform Your Amazon Business?
        </h3>
        <p className="mb-4 max-w-2xl mx-auto">
          Join the waitlist and be among the first to access the most advanced
          Amazon intelligence integration ever built.
        </p>
        <p className="mb-8 max-w-2xl mx-auto text-gray-300">
          Secure your 7-day free trial when we launch • Just $39.99/month after
          trial
        </p>
        <Link to="/join-waitlist" className="inline-block px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 text-white rounded-full font-semibold transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400/40">
          Join Waitlist Now
        </Link>
      </div>
    </footer>;
}