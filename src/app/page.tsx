import '@/styles/Query.css';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Social from '@/components/social/Social';
import PopularSection from '@/components/popularSection/PopularSection';
import JourneyMade from '@/components/journeyMadeSimple/JourneyMade';
import PremiumUnleash from '@/components/premiumUnleash/PremiumUnleash';
import About from '@/components/about/About';
import Discover from '@/components/discovers/Discover';
import Testimonial from '@/components/testimonials/Testimonial';
import Explore from '@/components/explore/Explore';
import Footer from '../components/Footer';





export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Social Media Section */}
      <Social />
  

      {/* Popular Destinations Section */}
      <PopularSection />
      {/* Journey Made Simple Section */}
      <JourneyMade />

      {/* Premium Unleash Wanderlust Section */}
      <PremiumUnleash />

       {/* About Us Section */}
       <About />

        {/* Discover the World from Above Section */}
        <Discover />

        {/* Testimonial Section */}
        <Testimonial />

      {/* Explore the Skies Section */}
      <Explore />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}