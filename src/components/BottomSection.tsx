import Script from 'next/script';

export default function BottomSection() {
  return (
    <>
      <Script 
        src="https://subscribe-forms.beehiiv.com/embed.js" 
        strategy="lazyOnload"
      />
      <section className="w-full">
        {/* CTA Section */}
        <div className="bg-gradient-to-b from-white to-black py-20 px-4 md:px-12" id="stay-informed">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sign up to stay informed
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We'll only email you with the specifics about what you and your students need to know to take advantage of each month's industry sponsored skill building opportunity. 
          </p>
          <div className="flex justify-center">
            <iframe 
              src="https://subscribe-forms.beehiiv.com/714f20fb-3d72-43af-b3af-7ed2c902003e" 
              className="beehiiv-embed" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{ 
                width: '400px', 
                height: '200px', 
                margin: '0 auto', 
                borderRadius: '0px 0px 0px 0px !important', 
                backgroundColor: 'transparent', 
                boxShadow: '0 0 #0000' 
              }}
            />
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