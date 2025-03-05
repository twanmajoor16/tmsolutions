import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
// import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      {/* <PortfolioSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
