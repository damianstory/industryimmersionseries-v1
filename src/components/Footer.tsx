"use client";

import React from 'react';
import { FaqSection } from '@/components/ui/faq-section';

const DEMO_FAQS = [
  {
    question: "What grade levels can participate in the Industry Immersion Series?",
    answer: "The program is available to all students in grades 7-12 across Canada. We've designed challenges and learning experiences appropriate for different grade levels to ensure everyone can participate meaningfully.",
  },
  {
    question: "Does my school need to be licensing myBlueprint to participate?",
    answer: "You can sign up for the Industry Immersion Series by clicking the 'Sign up to stay informed' button at the bottom of the page. You will be added to our mailing list and will be notified when the program launches.",
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
    question: "How can my company/industry association get involved?",
    answer: "We're actively partnering with schools across Canada. Educators and administrators can contact us through our educator portal to learn about bringing the program to their students and integrating it with their curriculum.",
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* FAQ Section */}
      <FaqSection
        title={<>Frequently Asked <span className="text-[#0092ff]">Questions</span></>}
        description="Everything you need to know about the Industry Immersion Series"
        items={DEMO_FAQS}
        className="bg-white mt-8 lg:mt-8 pb-20 px-4 md:px-12"
        id="faq"
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-black py-20 px-4 md:px-12" id="stay-informed">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sign up to stay informed
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We'll only email you with the specifics about what you and your students need to know to take advantage of each month's industry sponsored skill building opportunity. 
          </p>
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex items-center border border-gray-600 rounded-full overflow-hidden flex-1 bg-white">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="py-3 px-4 outline-none flex-1 text-gray-800" 
              />
            </div>
            <button className="bg-[#0092ff] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#0070cc] transition whitespace-nowrap">
              Get Notified
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="bg-white border-t border-gray-200 py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Industry Immersion Series. myBlueprint Special Projects.
          </p>
        </div>
      </div>
    </footer>
  );
} 