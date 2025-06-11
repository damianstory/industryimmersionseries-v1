export default function BottomSection() {
  return (
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
  );
} 