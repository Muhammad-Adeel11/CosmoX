import { Suspense, lazy } from 'react';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { useLenis } from './Hooks/useLenis';
import Loader from './components/common/Loader/Loader';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import ScrollToTop from './components/Layout/ScrollToTop/ScrollToTop';
import Hero from './sections/Hero/Hero';
import TrustedPartners from './sections/TrustedPartners/TrustedPartners';
import MissionStats from './sections/MissionStats/MissionStats';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import FeaturedMissions from './sections/FeaturedMissions/FeaturedMissions';
import MissionTimeline from './sections/MissionTimeline/MissionTimeline';
import PlanetGallery from './sections/PlanetGallery/PlanetGallery';
import AstronautTeam from './sections/AstronautTeam/AstronautTeam';
import SpaceTechnology from './sections/SpaceTechnology/SpaceTechnology';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';

const AppContent = () => {
  const { isLoading, progress } = useLoading();
  useLenis();

  return (
    <>
      {isLoading && <Loader progress={progress} />}
      <Navbar />
      <main>
        <Hero />
        <TrustedPartners />
        <MissionStats />
        <WhyChooseUs />
        <FeaturedMissions />
        <MissionTimeline />
        <PlanetGallery />
        <AstronautTeam />
        <SpaceTechnology />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;