import React from 'react';

// Timeline data for each month
const timelineData = [
  {
    year: "2025",
    month: "September",
    title: "Program Launch",
    sponsor: "Education",
    description: "Official kickoff of the Industry Immersion Series program for students across Canada.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "October",
    title: "Flowers & Saints Founded",
    sponsor: "Technology",
    description: "Our journey began with a passion for minimal design and floral artistry.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "November",
    title: "First Major Exhibition",
    sponsor: "Arts & Design",
    description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "December",
    title: "Launch of Online Store",
    sponsor: "E-Commerce",
    description: "Expanded our reach by bringing our creations to the digital world.",
    confirmed: true,
  },
  {
    year: "2026",
    month: "January",
    title: "Collaboration with Top Brands",
    sponsor: "Retail",
    description: "Partnered with leading lifestyle brands to create exclusive collections.",
    confirmed: true,
  },
  {
    year: "2026",
    month: "February",
    title: "Sustainable Initiatives",
    sponsor: "Environmental",
    description: "Launched eco-friendly product lines and carbon-neutral shipping options.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "March",
    title: "Global Expansion",
    sponsor: "International Business",
    description: "Opened our first international studio in Berlin, expanding our global footprint.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "April",
    title: "Educational Workshops",
    sponsor: "Education",
    description: "Started offering workshops to share our design philosophy and techniques.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "May",
    title: "Mobile App Release",
    sponsor: "Software Development",
    description: "Introduced our mobile application for an enhanced customer experience.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "June",
    title: "Community Program Launch",
    sponsor: "Non-Profit",
    description: "Initiated programs to support local artists and community development projects.",
    confirmed: false,
  }
];

export default function TimelineSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Activity Timeline</h2>
          <p className="text-xl text-gray-600">The evolution of Industry Immersion Series through the years</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-100"></div>

          {/* Timeline items */}
          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Content for even indexes (left side) */}
                {index % 2 === 0 && (
                  <div className="w-5/12 pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <p className="text-blue-600 font-semibold">{item.year}</p>
                      <h3 className="text-xl font-bold mb-2">{item.month}</h3>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm mb-2">Industry: {item.sponsor}</p>
                      <p className="text-gray-600">{item.description}</p>
                      {!item.confirmed && <p className="text-yellow-600 text-sm mt-2 italic">Sponsor to be confirmed</p>}
                    </div>
                  </div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0092ff] border-4 border-white"></div>

                {/* Content for odd indexes (right side) */}
                {index % 2 === 1 && (
                  <div className="w-5/12 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <p className="text-blue-600 font-semibold">{item.year}</p>
                      <h3 className="text-xl font-bold mb-2">{item.month}</h3>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm mb-2">Industry: {item.sponsor}</p>
                      <p className="text-gray-600">{item.description}</p>
                      {!item.confirmed && <p className="text-yellow-600 text-sm mt-2 italic">Sponsor to be confirmed</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 