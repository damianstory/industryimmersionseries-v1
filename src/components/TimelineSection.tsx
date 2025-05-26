import React from 'react';

// Timeline data for each month
const timelineData = [
  {
    year: "2025",
    month: "September",
    title: "Program Launch",
    sponsor: "myBlueprint",
    description: "Official kickoff of the Industry Immersion Series program for students across Canada.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "October",
    title: "Coming Soon",
    sponsor: "Mining",
    description: "Words will go here.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "November",
    title: "Coming Soon",
    sponsor: "Post-Secondary",
    description: "Words will go here.",
    confirmed: true,
  },
  {
    year: "2025",
    month: "December",
    title: "Want to sponsor this month?",
    sponsor: "TBD",
    description: "Words will go here.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "January",
    title: "Coming Soon",
    sponsor: "Aviation",
    description: "Words will go here.",
    confirmed: true,
  },
  {
    year: "2026",
    month: "February",
    title: "Coming Soon",
    sponsor: "Insurance",
    description: "Words will go here.",
    confirmed: true,
  },
  {
    year: "2026",
    month: "March",
    title: "Coming Soon",
    sponsor: "Taxes",
    description: "Words will go here.",
    confirmed: true,
  },
  {
    year: "2026",
    month: "April",
    title: "Want to sponsor this month?",
    sponsor: "TBD",
    description: "Words will go here.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "May",
    title: "Want to sponsor this month?",
    sponsor: "TBD",
    description: "Words will go here.",
    confirmed: false,
  },
  {
    year: "2026",
    month: "June",
    title: "Want to sponsor this month?",
    sponsor: "TBD",
    description: "Words will go here.",
    confirmed: false,
  }
];

export default function TimelineSection() {
  return (
    <section className="pt-8 pb-16 px-4 md:px-12 bg-white" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Activity <span style={{ color: '#0092ff' }}>Timeline</span></h2>
          <p className="text-xl text-gray-600">Each month will have a different activity sponsored by a different industry partner</p>
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
                      <p className="text-[#0092ff] font-semibold">{item.year}</p>
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
                      <p className="text-[#0092ff] font-semibold">{item.year}</p>
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