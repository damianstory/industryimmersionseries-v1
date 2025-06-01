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
    </footer>
  );
} 