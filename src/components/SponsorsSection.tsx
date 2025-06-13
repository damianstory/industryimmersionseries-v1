'use client';

import { useState } from 'react';

// Modal data structure for each sponsor
const modalData: { [key: string]: { title: string; content: string; icon: string } } = {
  "October 2025": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "November 2025": {
    title: "It&apos;s a secret...for now", 
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "December 2025": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "January 2026": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "February 2026": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "March 2026": {
    title: "It&apos;s a secret...for now", 
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "April 2026": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "May 2026": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "June 2026": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "Sign up": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "to be": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "the first": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "to find out 👇": {
    title: "It&apos;s a secret...for now",
    content: "But the first people to find out which companies are participating, and what incentives are available, are going to be the people on our mailing list.",
    icon: "🤫"
  },
  "Become a Sponsor": {
    title: "Email Damian",
    content: "Want more young people to know about opportunities within your company or industry? Want to fund incentives that encourage students to participate?\n\nLet&apos;s talk: damian.matheson@myblueprint.ca",
    icon: "🤝"
  }
};

// Modal Component
function SponsorModal({ 
  isOpen, 
  onClose, 
  title, 
  content,
  icon,
  showCloseButton = false,
  showSignUpButton = true
}: { 
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  icon: string;
  showCloseButton?: boolean;
  showSignUpButton?: boolean;
}) {
  const handleSignUp = () => {
    // Scroll to stay informed section
    const stayInformedSection = document.getElementById('stay-informed');
    if (stayInformedSection) {
      stayInformedSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl relative">


        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-[#0092ff] to-[#0070cc] px-6 py-4 text-center relative">
          {/* Decorative illustration placeholder */}
          <div className="w-16 h-16 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-8">
            {content}
          </p>
          
          {/* Sign up button - conditionally shown */}
          {showSignUpButton && (
            <button
              onClick={handleSignUp}
              className="bg-[#0092ff] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0070cc] transition-colors"
            >
              Sign up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  const [selectedSponsor, setSelectedSponsor] = useState<string | null>(null);

  const activitySponsors = [
    "October 2025",
    "November 2025", 
    "December 2025",
    "January 2026",
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026"
  ];

  const presentingSponsors = [
    "Sign up",
    "to be", 
    "the first",
    "to find out 👇"
  ];

  const handleSponsorClick = (sponsor: string) => {
    setSelectedSponsor(sponsor);
  };

  const handleCloseModal = () => {
    setSelectedSponsor(null);
  };

  return (
    <>
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
              Let&apos;s celebrate these industry leaders<br />
              collaborating with students to help them develop real-world skills 👏
            </p>
          </div>
          
          {/* Activity Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Monthly Activity Sponsors
            </h3>
            
            {/* First row: 5 cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {activitySponsors.slice(0, 5).map((sponsor, index) => (
                <div 
                  key={index}
                  onClick={() => handleSponsorClick(sponsor)}
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
                  onClick={() => handleSponsorClick(sponsor)}
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
              Incentive Sponsors
            </h3>
            
            {/* First row: 3 cards in 5-column grid (centered) */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              <div></div> {/* Empty space for centering */}
              {presentingSponsors.slice(0, 3).map((sponsor, index) => (
                <div 
                  key={index}
                  onClick={() => handleSponsorClick(sponsor)}
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
                <div 
                  onClick={() => handleSponsorClick(presentingSponsors[3])}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                >
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
                <div 
                  onClick={() => handleSponsorClick("Become a Sponsor")}
                  className="bg-[#0092ff] rounded-lg shadow-sm border border-gray-200 h-28 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center"
                >
                  <span className="text-white font-semibold text-center text-sm">
                    Become<br />a Sponsor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSponsor && modalData[selectedSponsor] && (
        <SponsorModal
          isOpen={true}
          onClose={handleCloseModal}
          title={modalData[selectedSponsor].title}
          content={modalData[selectedSponsor].content}
          icon={modalData[selectedSponsor].icon}
          showCloseButton={selectedSponsor === "Become a Sponsor"}
          showSignUpButton={selectedSponsor !== "Become a Sponsor"}
        />
      )}
    </>
  );
} 