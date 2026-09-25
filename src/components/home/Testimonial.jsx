import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
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

export default function Testimonial() {
  return (
    <section className="bg-white text-slate-900 pt-16 md:pt-20 pb-5 overflow-hidden">
      <div className="w-11/12 mx-auto space-y-12 sm:space-y-16">
        
        {/* Header Grid: Tagline on Left, Title on Right with Staggered Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          
          {/* Left Tag */}
          <motion.div variants={revealItemVariants} className="lg:col-span-4 flex items-center gap-2 pt-2">
            <span className="w-0.5 h-5 bg-primary inline-block shrink-0" />
            <span className="text-primary text-sm sm:text-base font-medium tracking-wide">
              Testimonials
            </span>
          </motion.div>

          {/* Right Heading */}
          <div className="lg:col-span-8">
            <motion.h2 
              variants={revealItemVariants}
              className="text-2xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15]"
            >
              Lorem ipsum dolor sit amet, cons
              <br className="hidden sm:block" />ectetur adipis cing elitull
            </motion.h2>
          </div>

        </motion.div>

        {/* ---------------- DESKTOP BENTO MASONRY GRID (100% UNTOUCHED) ---------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="hidden lg:grid grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Card 1: Top-Left (Wide Grey Image Card) */}
          <div 
            className="lg:col-span-8 relative min-h-[380px] lg:min-h-[420px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden group shadow-lg bg-[#9BA0A6]"
            style={{
              clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
              alt="Logistics background"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                Lorem ipsum
              </span>
            </div>

            <div className="relative z-10 space-y-4 pt-12">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white max-w-2xl leading-snug tracking-tight">
                Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
              </p>
            </div>
          </div>

          {/* Card 2: Top-Right (Vibrant Orange Stat Card) */}
          <div 
            className="lg:col-span-4 relative min-h-[380px] lg:min-h-[420px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-lg bg-primary text-white"
            style={{
              clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
            }}
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-white inline-block shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                Lorem ipsum
              </span>
            </div>

            <div className="relative z-10 space-y-4 my-auto py-6">
              <h3 className="text-7xl sm:text-8xl font-medium text-white tracking-tight leading-none">
                100%
              </h3>
              <p className="text-base sm:text-lg text-white font-medium leading-snug max-w-xs">
                Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
              </p>
            </div>
          </div>

          {/* Card 3: Bottom-Left (Dark Black Stat Card) */}
          <div 
            className="lg:col-span-4 relative min-h-[380px] lg:min-h-[420px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-lg bg-[#08090A] text-white"
            style={{
              clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
            }}
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                Facts &amp; Numbers
              </span>
            </div>

            <div className="relative z-10 space-y-4 my-auto py-6">
              <h3 className="text-7xl sm:text-8xl font-medium text-white tracking-tight leading-none">
                12K+
              </h3>
              <p className="text-base sm:text-lg text-white font-medium leading-snug max-w-xs">
                Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
              </p>
            </div>
          </div>

          {/* Card 4: Bottom-Right (Wide Grey Review Card) */}
          <div 
            className="lg:col-span-8 relative min-h-[380px] lg:min-h-[420px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden group shadow-lg bg-[#9BA0A6]"
            style={{
              clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
              alt="Logistics container port"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                Review
              </span>
            </div>

            <div className="relative z-10 space-y-4 pt-12">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white max-w-2xl leading-snug tracking-tight">
                Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
              </p>
            </div>
          </div>

        </motion.div>

        {/* ---------------- MOBILE & TABLET SWIPER CAROUSEL (1 VIEW CARD WITH PAGINATION BULLETS) ---------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="block lg:hidden w-full"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="testimonial-swiper pb-4"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div 
                className="relative min-h-[380px] p-8 flex flex-col justify-between overflow-hidden shadow-lg bg-[#9BA0A6]"
                style={{
                  clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Logistics background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-2">
                  <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    Lorem ipsum
                  </span>
                </div>

                <div className="relative z-10 space-y-4 pt-12">
                  <p className="text-lg md:text-2xl lg:text-4xl font-medium text-white leading-snug tracking-tight">
                    Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div 
                className="relative min-h-[380px] p-8 flex flex-col justify-between overflow-hidden shadow-lg bg-primary text-white"
                style={{
                  clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
                }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span className="w-0.5 h-4 bg-white inline-block shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    Lorem ipsum
                  </span>
                </div>

                <div className="relative z-10 space-y-4 my-auto py-6">
                  <h3 className="text-7xl sm:text-8xl font-medium text-white tracking-tight leading-none">
                    100%
                  </h3>
                  <p className="text-base sm:text-lg text-white font-medium leading-snug">
                    Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div 
                className="relative min-h-[380px] p-8 flex flex-col justify-between overflow-hidden shadow-lg bg-[#08090A] text-white"
                style={{
                  clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
                }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    Facts &amp; Numbers
                  </span>
                </div>

                <div className="relative z-10 space-y-4 my-auto py-6">
                  <h3 className="text-7xl sm:text-8xl font-medium text-white tracking-tight leading-none">
                    12K+
                  </h3>
                  <p className="text-base sm:text-lg text-white font-medium leading-snug">
                    Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div 
                className="relative min-h-[380px] p-8 flex flex-col justify-between overflow-hidden shadow-lg bg-[#9BA0A6]"
                style={{
                  clipPath: 'polygon(35px 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%, 0 35px)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
                  alt="Logistics container port"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-2">
                  <span className="w-0.5 h-4 bg-primary inline-block shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    Review
                  </span>
                </div>

                <div className="relative z-10 space-y-4 pt-12">
                  <p className="text-lg md:text-2xl lg:text-4xl font-medium text-white leading-snug tracking-tight">
                    Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}