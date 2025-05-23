import React from 'react';

export default function WhyMicroGrantsSection() {
  return (
    <section className="pt-32 pb-32 px-4 md:px-12 bg-white" id="why">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left column - Video Placeholder positioned to align with Submission Process */}
          <div className="lg:col-start-1 flex justify-start">
            <div className="w-full max-w-[315px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center aspect-[9/16]">
              <div className="text-center p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0092ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Video Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Right columns - Text Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why <span className="text-[#0092ff]">Micro Grants?</span></h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The Industry Immersion Series provides micro grants to empower students across Canada to explore potential career paths while developing industry-relevant skills and making meaningful connections.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Impact Through Opportunity</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-3 text-xl font-bold">•</div>
                  <div>
                    <span className="font-bold">78% of students</span> report that early industry exposure significantly influences their career decisions
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-3 text-xl font-bold">•</div>
                  <div>
                    <span className="font-bold">$80,000 in microgrants</span> distributed annually to support student skill development
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-3 text-xl font-bold">•</div>
                  <div>
                    <span className="font-bold">8 industries represented</span> in our yearly program, providing diverse career exploration opportunities
                  </div>
                </li>
              </ul>
            </div>

            <div className="italic text-gray-600 border-l-4 border-[#0092ff] pl-4 mb-8">
              &quot;The micro grants program provides students with both the financial support and industry connections they need to explore potential careers before making major educational decisions.&quot;
              <div className="mt-2 font-semibold not-italic">— Dr. Maria Chen, Educational Advisor</div>
            </div>

            <button className="px-6 py-3 bg-[#0092ff] text-white font-medium rounded-lg hover:bg-[#0070cc] transition-colors">
              Learn About Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 