import Image from "next/image";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  { 
    step: 'Step 1', 
    title: 'Awareness',
    content: 'Students don\'t know what they don\'t know.\n\nWhile the range of jobs available is diversifying, student job expectations have become more narrow, often dominated by a few traditional roles and what they see in the media.\n\nChanging that starts with awareness.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3' 
  },
  { 
    step: 'Step 2',
    title: 'Action',
    content: 'Awareness alone is not enough.\n\nStudents need to take action. Employer engagement is essential in helping to make that action meaningful and relevant.\n\nActivities that connect students directly with people in work and workplaces are strongly linked with long-term boosts in employment.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  { 
    step: 'Step 3',
    title: 'Reflection',
    content: 'Longitudinal studies show that the ways in which teenagers think about their potential futures in work matters and that this "career thinking" is linked to better outcomes.\n\n Students will be encouraged to document and reflect on each of these monthly activities within their myBlueprint or SpacesEDU portfolios.\n\n',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
];

export default function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 pt-20 pb-12 px-12 bg-white" id="home">
        {/* Left: Text and Form */}
        <div className="flex-1 max-w-2xl pl-8 md:pl-16 lg:pl-24 pt-4 md:pt-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <AnimatedGradientText 
              colorFrom="#0070cc" 
              colorTo="#00b4ff"
              className="text-5xl md:text-6xl font-extrabold"
            >
              Industry Immersion Series
            </AnimatedGradientText>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-md">Available to all grade 7-12 students across North America, launching October 2025.</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md">Join the mailing list to get notified about which industries are going to be involved and how your students can participate.</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden flex-1 max-w-md">
              <input type="text" placeholder="Your email..." className="py-3 px-2 outline-none flex-1" />
            </div>
            
            <button className="text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-opacity-90 transition whitespace-nowrap" style={{ backgroundColor: '#0092ff' }}>Stay Informed</button>
          </div>
        </div>
        
        {/* Right: Feature Steps Component */}
        <div className="flex-1 flex justify-center items-start">
          <FeatureSteps 
            features={features}
            autoPlayInterval={7000}
            className="p-4 md:p-6 max-w-2xl"
          />
        </div>
      </section>
      
      {/* Bottom Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex items-center justify-center overflow-hidden mt-12">
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl">✦</span>
          <span className="text-lg font-medium">Real Companies Helping Students Build Real Skills </span>
          <span className="text-2xl">✦</span>
        </div>
      </div>
    </>
  );
} 