import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import About from '../components/home/About';
import Service from '../components/home/Service';
import Whyus from '../components/home/Whyus';
import Testimonial from '../components/home/Testimonial';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Banner Component */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Services Interactive Section */}
      <Service />
      {/* Why Us Section */}
      <Whyus />
      {/* Marquee Ticker Component */}
      <Marquee />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Request Quote / Contact Section */}
      <Contact />
    </div>
  );
}