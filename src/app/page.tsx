import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import IncentivesSection from "../components/IncentivesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyMicroGrantsSection from "../components/WhyMicroGrantsSection";
import SponsorsSection from "../components/SponsorsSection";
import Footer from "../components/Footer";
import BottomSection from "../components/BottomSection";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyMicroGrantsSection />
      <TimelineSection />
      <IncentivesSection />
      <Footer />
      <SectionDivider />
      <SponsorsSection />
      <BottomSection />
    </>
  );
}
