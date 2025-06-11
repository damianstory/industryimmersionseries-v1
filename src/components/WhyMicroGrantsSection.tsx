import React from 'react';

export default function WhyMicroGrantsSection() {
  return (
    <section className="pt-32 pb-32 px-4 md:px-12 bg-white" id="why">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
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
              In 2025, students no longer need to wait for permission to start developing industry relevant skills outside of the classroom. What they often need is a little more support and a few more resources. Industry sponsored micro grants can remove both of those constraints, while helping students develop a portfolio of projects they will be excited to share.
              <br />
              </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Scholarships are great, but...</h3>
              <div className="space-y-4">
                <div className="text-md text-gray-700 mb-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Not every student is headed to college or university</li>
                    <li>Not every role requires them to</li>
                    <li>And for those that are, micro grants can help fund projects that allow them to develop the skills now that will make their applications stand out that much more</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="italic text-gray-600 border-l-4 border-[#0092ff] pl-4 mb-8">
              &quot;Good morning, Mr. Matheson.
I had a lot of fun with the micro grant contest, so I decided to take your recommendation and apply for Basecamp. Thank you so much for giving me the opportunity to develop the skills and confidence I need to thrive in a place like Basecamp.
I'm really excited to see what this summer has in store for me.&quot;
              <div className="mt-2 font-semibold not-italic">— Student from micro grant pilot with DMZ</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 