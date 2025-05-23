import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import IncentivesSection from "../components/IncentivesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyMicroGrantsSection from "../components/WhyMicroGrantsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyMicroGrantsSection />
      <TimelineSection />
      <IncentivesSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
}
