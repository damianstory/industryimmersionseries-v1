import Image from "next/image";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-12 bg-white" id="home">
        {/* Left: Text and Form */}
        <div className="flex-1 max-w-2xl pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <AnimatedGradientText 
              colorFrom="#0070cc" 
              colorTo="#00b4ff"
              className="text-5xl md:text-6xl font-extrabold"
            >
              Industry Immersion Series
            </AnimatedGradientText>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-md">Available to all grade 7-12 students across Canada, launching October 2025.</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md">Join the mailing list to get notified about which industries are going to be involved and how your students can participate.</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden flex-1 max-w-md">
              <input type="text" placeholder="Your email..." className="py-3 px-2 outline-none flex-1" />
            </div>
            
            <button className="text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-opacity-90 transition whitespace-nowrap" style={{ backgroundColor: '#0092ff' }}>Stay Informed</button>
          </div>
        </div>
        
        {/* Right: Hero Image with Fade Effect */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Background decorative circle */}
          <div className="w-[450px] h-[450px] bg-blue-50 rounded-full absolute -z-10 opacity-20"></div>
          
          {/* Main image container with natural fade animation */}
          <div className="relative w-[420px] h-[500px] overflow-hidden animate-fade-in">
            <Image
              src="https://images.pexels.com/photos/2040889/pexels-photo-2040889.jpeg"
              alt="Professional woman looking at city view"
              fill
              className="object-cover"
              priority
            />
            
            {/* Multiple gradient overlays for natural fade effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
            
            {/* Soft edge fade */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 -mt-14 -mr-4">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-gray-300 animate-pulse">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute right-12 top-4 -mt-8">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-yellow-300 animate-pulse">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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