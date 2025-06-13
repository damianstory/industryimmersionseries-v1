"use client";

import React from 'react';
import { FaqSection } from '@/components/ui/faq-section';

const DEMO_FAQS = [
  {
    question: "What grade levels can participate?",
    answer: "The program is available to all students across grades 7-12.",
  },
  {
    question: "Does my school need to be licensing myBlueprint?",
    answer: "No. Any grade 7-12 student across North America can participate.",
  },
  {
    question: "When does the program launch?",
    answer: "The first monthly activity is launching in October 2025. A landing page will be created for each month that explains the activity and how students can participate. Join the mailing list below to be the first to know.",
  },
  {
    question: "What types of industries are participating?",
    answer: "We've tried to ensure there's a diverse group of industries available for students to learn about. We'll be announcing specifics soon. To be one of the first to know, join the mailing list below.",
  },
  {
    question: "Are there incentives for educators as well?",
    answer: "Yes :) Monthly giveaways for educators who join the mailing list, and school prizes for schools with a lot of student participation.",
  },
  {
    question: "What data is being collected?",
    answer: "myBlueprint will collect the names and emails of students when they submit their monthly activities. This information will not be shared with any third parties. Industry partners will receive anonymized data on the number of students who participated in their activity.",
  },
  {
    question: "What is myBlueprint?",
    answer: "myBlueprint is a trusted partner to almost 300 school boards across Canada, helping to empower every student to thrive and succeed in education, career, and life.",
  },
  {
    question: "How can my company get involved?",
    answer: "Email our Director, Special Projects at damian.matheson@myblueprint.ca",
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