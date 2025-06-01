export default function SponsorsSection() {
  const activitySponsors = [
    "Mining Corp",
    "Aviation Inc", 
    "Insurance Co",
    "Tax Solutions",
    "Post-Secondary",
    "Tech Partner",
    "Finance Group",
    "Healthcare Ltd",
    "Energy Systems"
  ];

  const presentingSponsors = [
    "Major Sponsor 1",
    "Major Sponsor 2", 
    "Major Sponsor 3",
    "Major Sponsor 4"
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-12" id="sponsors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span style={{ color: "#0092ff" }}>Participating</span>{" "}
            Sponsors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry leaders partnering with students to build real-world skills
          </p>
        </div>
        
        {/* Activity Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Activity Sponsors
          </h3>
          
          {/* First row: 5 cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            {activitySponsors.slice(0, 5).map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-full h-1 bg-[#0092ff]"></div>
                <div className="flex items-center justify-center h-full px-4 pb-1">
                  <span className="text-gray-700 font-semibold text-center text-sm">
                    {sponsor}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row: 4 cards centered */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {activitySponsors.slice(5).map((sponsor, index) => (
              <div 
                key={index + 5}
                className="bg-white rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-full h-1 bg-[#0092ff]"></div>
                <div className="flex items-center justify-center h-full px-4 pb-1">
                  <span className="text-gray-700 font-semibold text-center text-sm">
                    {sponsor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Presenting Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Presenting Sponsors
          </h3>
          
          {/* First row: 3 cards in 5-column grid (centered) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            <div></div> {/* Empty space for centering */}
            {presentingSponsors.slice(0, 3).map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-full h-1 bg-[#0092ff]"></div>
                <div className="flex items-center justify-center h-full px-4 pb-1">
                  <span className="text-gray-700 font-semibold text-center text-sm">
                    {sponsor}
                  </span>
                </div>
              </div>
            ))}
            <div></div> {/* Empty space for centering */}
          </div>
          
          {/* Second row: 2 cards - CENTERED with constrained width */}
          <div className="flex justify-center gap-6 max-w-4xl mx-auto">
            <div className="w-56 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="w-full h-1 bg-[#0092ff]"></div>
                <div className="flex items-center justify-center h-full px-4 pb-1">
                  <span className="text-gray-700 font-semibold text-center text-sm">
                    {presentingSponsors[3]}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Become a Sponsor CTA */}
            <div className="w-56 flex-shrink-0">
              <div className="bg-[#0092ff] rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center">
                <span className="text-white font-semibold text-center text-sm">
                  Become<br />a Sponsor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 