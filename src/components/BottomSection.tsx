"use client";

import { useEffect, useRef } from 'react';

export default function BottomSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = `<script async src="https://subscribe-forms.beehiiv.com/embed.js"></script><iframe src="https://subscribe-forms.beehiiv.com/d207e7c5-976d-4210-ae92-f5de82a097e8" class="beehiiv-embed" data-test-id="beehiiv-embed" frameborder="0" scrolling="no" style="width: 100%; height: 52px; margin: 0; border-radius: 0px 0px 0px 0px !important; background-color: transparent; box-shadow: 0 0 #0000;"></iframe>`;
      
      // Manually execute the script
      const script = containerRef.current.querySelector('script');
      if (script) {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.async = true;
        document.head.appendChild(newScript);
      }
    }
  }, []);
  return (
    <>
      <section className="w-full">
        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-900 to-white py-20 px-4 md:px-12" id="stay-informed">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sign up to stay informed
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            We&apos;ll only email you with the specifics about what you and your students need to know to take advantage of each month&apos;s industry sponsored skill building opportunity. 
          </p>
          
          {/* Form Container - Centered horizontally */}
          <div className="flex justify-center">
            <div ref={containerRef} className="max-w-md transform -translate-x-8 -translate-y-7"></div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white border-t border-gray-200 py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Industry Immersion Series. <a 
              href="https://myblueprint.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#0092ff', textDecoration: 'none' }}
            >
              myBlueprint
            </a> Special Projects.
          </p>
        </div>
      </div>
    </section>
    </>
  );
} 