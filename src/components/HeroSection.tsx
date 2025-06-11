import Image from "next/image";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  { 
    step: 'Step 1', 
    title: 'Awareness',
    content: 'Students don\'t know what they don\'t know.\n\n<strong>While the range of available jobs is diversifying, student job expectations have become more narrow</strong>, often dominated by a few traditional roles and what they see in the media.\n\nChanging that starts with awareness.',
    image: 'https://images.pexels.com/photos/2040889/pexels-photo-2040889.jpeg?_gl=1*1712k0j*_ga*MTY0MTMzMTAwNC4xNzQ4Nzg5MTY4*_ga_8JE65Q40S6*czE3NDk2NzE1NjIkbzMkZzEkdDE3NDk2NzE1NjYkajU2JGwwJGgw' 
  },
  { 
    step: 'Step 2',
    title: 'Action',
    content: 'Awareness alone is not enough. Students need to take action.\n\n <strong>Employer engagement is essential in helping to make that action meaningful and relevant.</strong>\n\nActivities that connect students directly with people in work and workplaces are strongly linked with long-term boosts in employment.',
    image: 'https://images.pexels.com/photos/9242816/pexels-photo-9242816.jpeg?_gl=1*jyi4vj*_ga*MTY0MTMzMTAwNC4xNzQ4Nzg5MTY4*_ga_8JE65Q40S6*czE3NDk2NzE1NjIkbzMkZzEkdDE3NDk2NzE4NTYkajE0JGwwJGgw'
  },
  { 
    step: 'Step 3',
    title: 'Reflection',
    content: 'Longitudinal studies show that the ways in which teenagers think about their potential futures in work matters and that this "career thinking" is linked to better outcomes.\n\n <strong>Students will be encouraged to document and reflect on each of these monthly activities within their myBlueprint or SpacesEDU portfolios.</strong>\n\n',
    image: 'https://images.pexels.com/photos/6473093/pexels-photo-6473093.jpeg?_gl=1*2612jv*_ga*MTY0MTMzMTAwNC4xNzQ4Nzg5MTY4*_ga_8JE65Q40S6*czE3NDk2NzE1NjIkbzMkZzEkdDE3NDk2NzIzNTUkajYwJGwwJGgw'
  },
];

export default function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 pt-12 pb-12 px-12 bg-white" id="home">
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
          
          {/* Form Container - Left aligned with text above */}
          <div className="max-w-md">
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe 
              src="https://subscribe-forms.beehiiv.com/714f20fb-3d72-43af-b3af-7ed2c902003e" 
              className="beehiiv-embed" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{ width: '100%', height: '52px', margin: 0, padding: 0, marginLeft: '-80px', marginTop: '-80px', borderRadius: '0px 0px 0px 0px !important', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
            />
          </div>
        </div>
        
        {/* Right: Feature Steps Component */}
        <div className="flex-1 flex justify-center items-start mt-4">
          <FeatureSteps 
            features={features}
            autoPlayInterval={7000}
            className="p-4 md:p-6 max-w-2xl"
          />
        </div>
      </section>
      
      {/* Bottom Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex items-center justify-center overflow-hidden mt-2">
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl">✦</span>
          <span className="text-lg font-medium">Real Companies Helping Students Build Real Skills </span>
          <span className="text-2xl">✦</span>
        </div>
      </div>
    </>
  );
} 