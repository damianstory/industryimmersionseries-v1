"use client";

import React from 'react';
import Link from 'next/link';
import { FaqSection } from '@/components/ui/faq-section';

const DEMO_FAQS = [
  {
    question: "What grade levels can participate in the Industry Immersion Series?",
    answer: "The program is available to all students in grades 7-12 across Canada. We've designed challenges and learning experiences appropriate for different grade levels to ensure everyone can participate meaningfully.",
  },
  {
    question: "When does the program launch and how can students participate?",
    answer: "The Industry Immersion Series is launching in October 2025. Students can join our mailing list to stay informed about the application process, participating schools, and how to get involved in their region.",
  },
  {
    question: "What types of industry challenges will students work on?",
    answer: "Students will tackle real-world challenges from partner companies across various industries including technology, healthcare, finance, manufacturing, and sustainability. Each challenge is designed to build industry-relevant skills while exploring potential career paths.",
  },
  {
    question: "How do schools become partners in the program?",
    answer: "We're actively partnering with schools across Canada. Educators and administrators can contact us through our educator portal to learn about bringing the program to their students and integrating it with their curriculum.",
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-black py-20 px-4 md:px-12" id="stay-informed">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to launch your career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students across Canada who are exploring potential career paths while developing industry-relevant skills.
          </p>
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex items-center border border-gray-600 rounded-full overflow-hidden flex-1 bg-white">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="py-3 px-4 outline-none flex-1 text-gray-800" 
              />
            </div>
            <button className="bg-[#8367f6] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#7559e0] transition whitespace-nowrap">
              Get Notified
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about the Industry Immersion Series"
        items={DEMO_FAQS}
        className="bg-white"
      />

      {/* Footer Links Section */}
      <section className="bg-white py-16 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">IIS</div>
                <span className="font-bold text-xl tracking-tight">Industry Immersion</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Empowering Canadian students to explore career paths through industry-sponsored challenges and skill development opportunities.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Program */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Program</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#timeline" className="text-gray-600 hover:text-gray-900 transition">Timeline</Link></li>
                <li><Link href="#how" className="text-gray-600 hover:text-gray-900 transition">How It Works</Link></li>
                <li><Link href="#incentives" className="text-gray-600 hover:text-gray-900 transition">Incentives</Link></li>
                <li><Link href="#why" className="text-gray-600 hover:text-gray-900 transition">Why Micro Grants</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">FAQs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Guidelines</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Support</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</Link></li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Partners</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Become a Sponsor</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Educator Portal</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">School Partners</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 Industry Immersion Series. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition">Privacy Policy</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
} 