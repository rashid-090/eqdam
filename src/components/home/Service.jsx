import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CutCornerButton from '../CutCornerButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const servicesData = [
  {
    id: '01',
    title: 'Rail Freight',
    subtitle: 'Rail Freight Logistics',
    description: 'Reliable and cost-effective rail transport connecting major industrial hubs and cross-border rail networks with scheduled arrivals.',
    image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '02',
    title: 'Ocean Freight',
    subtitle: 'Ocean & Maritime Shipping',
    description: 'Full container load (FCL) and less than container load (LCL) sea freight with global port coverage and maritime customs clearance.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '03',
    title: 'Air Freight',
    subtitle: 'Express Air Cargo & Delivery',
    description: 'High-speed air freight cargo services for time-sensitive international shipments with temperature control and real-time tracking.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '04',
    title: 'Road Freight',
    subtitle: 'Road Freight & Customs Clearance',
    description: 'Lorem ipsum dolor sit amet, cons ectetur adipis cing elitullLorem ipsum dolor sit amet, cons ectetur adipis cing elitull',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(3); // Default active for desktop: Road Freight (04)
  const [isHovered, setIsHovered] = useState(false);

  const currentService = servicesData[activeIndex];

  // Desktop auto-change active service with intervals when not hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative w-full bg-[#080808] text-white py-20 sm:py-28 overflow-hidden">
      
      <div className="w-11/12 mx-auto space-y-10 lg:space-y-12">
        
        {/* Top Header Row */}
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-6">
          <span className="w-0.5 h-5 bg-[#ff5500] inline-block shrink-0" />
          <span className="text-white text-sm sm:text-base font-medium tracking-wide">
            Our Services
          </span>
        </div>

        {/* ---------------- DESKTOP LAYOUT (100% UNTOUCHED) ---------------- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Animated Image & Active Content Details */}
          <div className="col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                {/* Service Image with Top-Left & Bottom-Right Diagonal Corner Cuts */}
                <div
                  className="w-full aspect-16/10 rounded-xl overflow-hidden relative shadow-2xl bg-slate-900 border border-slate-800"
                  style={{
                    clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                  }}
                >
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                {/* Subtitle & Description */}
                <div className="space-y-2 pt-2">
                  <span className="text-base font-semibold text-white block tracking-wide">
                    {currentService.subtitle}
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed max-w-md">
                    {currentService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Services List */}
          <div 
            className="col-span-7 space-y-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            <div className="space-y-1">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="relative cursor-pointer py-5 sm:py-6 border-b border-slate-800/80 group transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      
                      {/* Fluid Left-to-Right Single Element Background Text Fill */}
                      <span
                        className="text-4xl md:text-5xl font-medium tracking-tight bg-clip-text text-transparent transition-[background-position] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] select-none inline-block"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #ffffff 50%, #475569 50%)',
                          backgroundSize: '200% 100%',
                          backgroundPosition: isActive ? '0% 0%' : '100% 0%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {service.title}
                      </span>

                      {/* Service Index [ 01 ] */}
                      <span className={`text-xs sm:text-sm font-mono font-bold transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-slate-500'
                      }`}>
                        [{service.id}]
                      </span>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Request a Quote Action Button */}
            <div className="pt-6">
              <CutCornerButton 
                to="/about"
                bgColor="#FF822A" 
                hoverBgColor="#0C3063"
                className="text-xs sm:text-sm px-5 py-2.5"
              >
                Request a Quote
              </CutCornerButton>
            </div>

          </div>

        </div>

        {/* ---------------- MOBILE & TABLET SWIPER CAROUSEL (PAGINATION UNDER CARD) ---------------- */}
        <div className="block lg:hidden w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="service-swiper"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="space-y-4 bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80 shadow-xl">
                  
                  {/* Service Image with Top-Left & Bottom-Right Diagonal Corner Cuts */}
                  <div
                    className="w-full aspect-16/10 rounded-xl overflow-hidden relative shadow-2xl bg-slate-900 border border-slate-800"
                    style={{
                      clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  {/* Header Title & Index Number */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#ff5500]">
                      [ {service.id} ]
                    </span>
                  </div>

                  {/* Subtitle & Description */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 block tracking-wide">
                      {service.subtitle}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Bottom Right Cut Corner Edge Accent */}
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