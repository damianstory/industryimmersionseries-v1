import React from 'react';

export default function IncentivesSection() {
  return (
    <section className="pt-24 pb-16 px-4 md:px-12 bg-white" id="incentives">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Incentives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not just for students. Educators and schools are also eligible for participation prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Monthly Incentives Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-[#0092ff] font-semibold mb-2">01</div>
            <h3 className="text-2xl font-bold mb-3">Monthly Student Microgrants</h3>
            <p className="text-gray-600 mb-6">
              Each month, we award 20 microgrants of $500 each to students who submit outstanding work for that month&apos;s industry challenge.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0092ff] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Total Monthly Distribution</div>
                  <div className="text-xl font-bold">$10,000 Every Month</div>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-2">•</div>
                  <span>20 microgrants awarded each month</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-2">•</div>
                  <span>$500 per student recipient</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0092ff] mr-2">•</div>
                  <span>Assessed against activity specific rubric</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Student Completion Incentive Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-[#0092ff] font-semibold mb-2">02</div>
            <h3 className="text-2xl font-bold mb-3">Series Completion Incentive</h3>
            <p className="text-gray-600 mb-6">
              Students who complete all (8) monthly activities are eligible for separate series completion incenitves.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88M15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 10C20 14.42 16.42 18 12 18C7.58 18 4 14.42 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Effort Rewarded</div>
                  <div className="text-xl font-bold">More Chances to Win</div>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-purple-600 mr-2">•</div>
                  <span>Must complete all eight monthly activities</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-600 mr-2">•</div>
                  <span>Winners will be randomly chosen</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-600 mr-2">•</div>
                  <span>Multiple different incentives available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Educator Incentive Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-[#0092ff] font-semibold mb-2">03</div>
            <h3 className="text-2xl font-bold mb-3">Educator-Level Incentives</h3>
            <p className="text-gray-600 mb-6">
              Educators on the Industry Immersion Series mailing list can win prizes designed to support your classroom, and make you smile!
            </p>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Why Should Students Have All The Fun?</div>
                  <div className="text-xl font-bold">Educator Incenitve</div>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2">•</div>
                  <span>Monthly prizes for educators on the mailing list</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2">•</div>
                  <span>Winners will be randomly chosen                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2">•</div>
                  <span>Sign up with your school email to be eligible.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* School Incentive Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-[#0092ff] font-semibold mb-2">04</div>
            <h3 className="text-2xl font-bold mb-3">School-Level Incentive</h3>
            <p className="text-gray-600 mb-6">
              Schools with 100+ students who complete all monthly activities are entered to win some legit school-level prizes. 
            </p>
            <div className="bg-amber-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Building Incentive</div>
                  <div className="text-xl font-bold">Recognition Award</div>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-amber-600 mr-2">•</div>
                  <span>Requires 100+ student participants from your school</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-600 mr-2">•</div>
                  <span>Those students must each complete all monthly activities</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-600 mr-2">•</div>
                  <span>More students participating = more chances to win</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 