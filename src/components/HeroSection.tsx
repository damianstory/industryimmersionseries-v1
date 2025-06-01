import Image from "next/image";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  { 
    step: 'Step 1', 
    title: 'Awareness',
    content: "You don't know what you don't know.", 
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3' 
  },
  { 
    step: 'Step 2',
    title: 'Action',
    content: 'You can just do things. Start now.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  { 
    step: 'Step 3',
    title: 'Reflection',
    content: 'Did you enjoy it? Follow your curioisty.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
];

export default function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 py-10 px-12 bg-white" id="home">
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
        
        {/* Right: Feature Steps Component */}
        <div className="flex-1 flex justify-center items-start mt-12">
          <FeatureSteps 
            features={features}
            autoPlayInterval={4000}
            className="p-4 md:p-6 max-w-2xl"
          />
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