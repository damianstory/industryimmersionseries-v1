import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-12 bg-white" id="home">
        {/* Left: Text and Form */}
        <div className="flex-1 max-w-2xl pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Industry Immersion Series</h1>
          <p className="text-lg text-gray-600 mb-2 max-w-md">Available to all grade 7-12 students across Canada, launching October 2025.</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md">Join the mailing list to get notified about which industries are going to be involved and how your students can participate.</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden flex-1 max-w-md">
              <input type="text" placeholder="Your email..." className="py-3 px-2 outline-none flex-1" />
            </div>
            
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-opacity-90 transition whitespace-nowrap">Stay Informed</button>
          </div>
        </div>
        
        {/* Right: Profile Card Mockup */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-[450px] h-[450px] bg-blue-50 rounded-full absolute -z-10 opacity-20"></div>
          <div className="relative w-[420px] bg-white rounded-3xl shadow-lg p-6">
            {/* Decorative stars */}
            <div className="absolute right-0 top-0 -mt-14 -mr-4">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute right-12 top-4 -mt-8">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-yellow-300">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-gray-500">Price Active</p>
                <p className="text-2xl font-bold">$15,000</p>
              </div>
              <div className="h-10 w-24 bg-blue-100 rounded-md overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <svg viewBox="0 0 100 30" className="w-full h-8">
                    <path d="M0,15 Q20,5 40,20 Q60,35 80,15 Q100,0 100,15" stroke="#6366f1" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mb-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                TC
              </div>
              <div>
                <p className="font-bold">Tumber Cook</p>
                <p className="text-xs text-gray-500">5.4M Followers</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mb-1">Official Account for 2E E-Sports</p>
            <p className="text-xs text-gray-500 mb-4">Game Organization</p>
            
            <div className="flex items-center justify-center gap-1 mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 10C19 16 12 21 12 21C12 21 5 16 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm bg-purple-100 text-purple-700 rounded-md px-2 py-1">Saudi Arabia</span>
            </div>
            
            <div className="flex justify-center gap-3 mb-6">
              {['youtube', 'tiktok', 'facebook', 'instagram'].map((platform, index) => (
                <div key={platform} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-600 font-bold">
                  {platform.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between gap-3 mb-4">
              <button className="flex-1 bg-pink-100 text-pink-600 px-2 py-1 rounded-lg flex items-center justify-center gap-1 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.7399V19.6799C22 20.3699 21.4399 20.9999 20.7699 21.0099H20.7599C18.4699 20.9999 16.2699 20.3099 14.4099 19.0799C12.6599 17.9399 11.1399 16.4099 9.99992 14.6599C8.76992 12.7899 8.07992 10.5899 8.06992 8.28989V8.27989C8.06992 7.59989 8.69992 7.03989 9.38992 7.03989H12.3299C12.9499 7.03989 13.4899 7.47989 13.6099 8.08989L14.0999 10.2999C14.1999 10.8399 14.0699 11.3999 13.7499 11.8399L12.5899 13.4799C13.4999 15.1199 14.9099 16.5199 16.5499 17.4199L18.1899 16.2599C18.6199 15.9399 19.1799 15.8099 19.7299 15.9099L21.9399 16.3999C22.5599 16.5299 22.9999 17.0699 22.9999 17.6999L22 16.7399Z" fill="currentColor"/>
                </svg>
                <span>Book 1-1 call with me</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs">
                  R
                </div>
                <span className="text-sm font-semibold">Reach</span>
                <span className="text-xs text-green-500 ml-auto">+1.02%</span>
              </div>
              <p className="text-2xl font-bold">234,000</p>
              <p className="text-xs text-gray-500">From Last 7 days</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex items-center justify-center overflow-hidden mt-20">
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl">✦</span>
          <span className="text-lg font-medium">Real Companies Helping Students Build Real Skills </span>
          <span className="text-2xl">✦</span>
        </div>
      </div>
    </>
  );
} 