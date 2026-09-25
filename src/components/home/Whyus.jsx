import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CutCornerButton from '../CutCornerButton';
import { FiShield, FiBox, FiGlobe } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Staggered blur & slide reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
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

// Carousel 3 Images for Why Us Section
const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    alt: 'Container port logistics'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Warehouse freight management'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600633532411-13ed06f7bcc6?q=80',
    alt: 'Global transport logistics'
  }
];

const featureCards = [
  {
    id: 1,
    icon: FiShield,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull"
  },
  {
    id: 2,
    icon: FiBox,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull"
  },
  {
    id: 3,
    icon: FiGlobe,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull"
  }
];

export default function Whyus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto carousel slide transition interval (4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24 -mb-20 overflow-hidden">
      <div className="w-11/12 mx-auto space-y-16">
        
        {/* Main Content Grid: Left Text & Action Button, Right Image Carousel with Corner Cuts */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Tagline, Main Title, and CutCornerButton with Staggered Reveal */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="lg:col-span-6 space-y-8"
          >
            
            {/* Tagline with Vertical Orange Bar Accent */}
            <motion.div variants={revealItemVariants} className="lg:col-span-3 flex items-center gap-2">
              <span className="w-0.5 h-5 bg-[#ff5500] inline-block shrink-0" />
              <span className="text-[#ff5500] text-sm sm:text-base font-medium tracking-wide">
                Why Us
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              variants={revealItemVariants}
              className="text-2xl md:text-4xl lg:text-5xl lg:w-[75%] font-medium text-slate-900 tracking-tight leading-[1.15]"
            >
              Lorem ipsum dolor sit 
              amet, cons ectetur
              adipis cing elitull
            </motion.h2>

            {/* Let's discuss today! Action Button */}
            <motion.div variants={revealItemVariants} className="pt-2">
              <CutCornerButton 
                to="/about"
                bgColor="#FF822A" 
                hoverBgColor="#0C3063"
                className="text-xs sm:text-sm px-6 py-3"
              >
                Let's discuss!
              </CutCornerButton>
            </motion.div>

          </motion.div>

          {/* Right Column: Image Carousel with Left Vertical Pagination & Corner Cuts */}
          <motion.div 
            initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-4 relative pl-6 sm:pl-8"
          >
            
            {/* Left Vertical Pagination Indicator matching exact reference image */}
            <div className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full cursor-pointer focus:outline-none ${
                    currentIndex === idx
                      ? 'w-[5px] h-7 bg-[#ff5500] shadow-xs'
                      : 'w-[5px] h-[5px] bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Image Card Container with ClipPath */}
            <div 
              className="w-full h-[360px] xl:h-[600px] overflow-hidden relative shadow-2xl bg-slate-200 border border-slate-300 group"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
              }}
            >
              {CAROUSEL_IMAGES.map((item, idx) => (
                <img 
                  key={item.id}
                  src={item.url} 
                  alt={item.alt} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                    currentIndex === idx 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
            </div>

          </motion.div>

        </div>

        {/* ---------------- DESKTOP BOTTOM FEATURE CARDS (Bordered Box Grid) ---------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="hidden md:grid grid-cols-3 border border-slate-200 divide-x divide-slate-200 bg-white shadow-xs overflow-hidden"
        >
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="p-8 space-y-3">
                <Icon className="w-7 h-7 text-primary" />
                <h4 className="text-base font-medium text-slate-900">{feature.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed xl:max-w-[70%]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* ---------------- MOBILE BOTTOM FEATURE CARDS SWIPER CAROUSEL ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="block md:hidden w-full"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="feature-swiper pb-4"
          >
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <SwiperSlide key={feature.id}>
                  <div className="p-8 space-y-3 border border-slate-200 bg-white shadow-xs">
                    <Icon className="w-7 h-7 text-primary" />
                    <h4 className="text-base font-medium text-slate-900">{feature.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}