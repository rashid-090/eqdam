import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CutCornerButton from '../CutCornerButton';

// Multiple Unsplash Logistics Background Images for 5-second slideshow
const HERO_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1662083823095-c509c12e3d7d?q=80',
    alt: 'Seamless Cargo Port Logistics'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
    alt: 'Global Freight Container Transport'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80',
    alt: 'Warehouse Express Logistics'
  },
];

// Staggered reveal animation variants for text, heading, and buttons
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15
    }
  }
};

const revealItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 35,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function Hero() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto transition background image every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Hook into scroll position relative to the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax transform to shift background container vertically on scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[620px] lg:min-h-[750px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white font-sans pt-28 pb-12"
    >
      
      {/* Background Unsplash Logistics Images Container with Parallax & 5s Smooth Crossfade */}
      <motion.div 
        style={{ y }}
        className="absolute -top-[15%] -bottom-[15%] inset-x-0 z-0 overflow-hidden pointer-events-none"
      >
        {HERO_IMAGES.map((img, idx) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === idx 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          />
        ))}
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-slate-900/50 z-20 pointer-events-none" />
      </motion.div>

      {/* Main Hero Content with Staggered Reveal Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-11/12 mx-auto space-y-8 my-auto"
      >
        
        {/* Top Tagline with Vertical Orange Bar Accent */}
        <motion.div variants={revealItemVariants} className="flex items-center gap-2">
          <span className="w-0.5 h-5 bg-[#ff5500] inline-block shrink-0" />
          <span className="text-white text-sm sm:text-base font-medium tracking-wide">
           Seamless Logistics
          </span>
        </motion.div>

        {/* Main Heading with Reveal Motion */}
        <motion.h1 
          variants={revealItemVariants}
          className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] max-w-4xl font-sans"
        >
          Seamless Logistics <br />
          From Origin
          To Destination
        </motion.h1>

        {/* Action Buttons with Reveal Motion */}
        <motion.div variants={revealItemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          {/* Orange Primary Button */}
          <CutCornerButton 
            to="/about"
            bgColor="#FF822A" 
            hoverBgColor="#0C3063"
            className="text-sm px-6 py-4"
          >
            Request a Quote
          </CutCornerButton>

          {/* Translucent Secondary Button */}
          <CutCornerButton 
            to="/products"
            bgColor="rgba(255, 255, 255, 0.25)" 
            hoverBgColor="rgba(255, 255, 255, 0.35)"
            className="text-sm px-6 py-4 backdrop-blur-md"
          >
            Explore Services
          </CutCornerButton>
        </motion.div>

      </motion.div>

      {/* Bottom Row: Clients Logos & Right Summary Text with Fade Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 w-11/12 mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
      >
        
        

        {/* Bottom Right: Description Text */}
        <div className="text-white text-sm sm:text-base max-w-2xl leading-snug pr-8 sm:pr-12 lg:pr-16">
          We handle every step of your shipment with precision and care, from origin to destination. Our reliable logistics solutions ensure smooth coordination, secure handling, and timely delivery throughout the journey.
        </div>

      </motion.div>

      {/* Bottom Right Cut Corner White Edge Accent */}
      <svg 
        className="absolute bottom-0 right-0 w-12 h-12 text-white z-20 pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <polygon points="100,0 100,100 0,100" fill="currentColor" />
      </svg>

    </section>
  );
}