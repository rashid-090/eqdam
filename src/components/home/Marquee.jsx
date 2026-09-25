import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import image assets from src/assets/Images
import shipImg from '../../assets/Images/ship.png';
import planeImg from '../../assets/Images/plane.png';
import truckImg from '../../assets/Images/truck.png';
import trainImg from '../../assets/Images/train.png';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MARQUEE_ITEMS = [
  { id: 'ocean', label: 'Ocean Freight', image: shipImg },
  { id: 'air', label: 'Air Freight', image: planeImg },
  { id: 'road', label: 'Road Freight', image: truckImg },
  { id: 'rail', label: 'Rail Freight', image: trainImg },
];

export default function Marquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Create seamless infinite horizontal loop using xPercent
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 18,
        ease: 'none',
      });

      // 2. Attach GSAP ScrollTrigger to react dynamically to page scroll velocity with silk-smooth easing
      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          // Scale velocity smoothly to speed boost multiplier (1x up to 3.5x)
          const speedBoost = 1 + Math.min(velocity / 300, 2.5);
          // Direction shift: forward when scrolling down, reverse when scrolling up
          const scrollDir = self.direction === -1 ? -1 : 1;
          const targetTimeScale = speedBoost * scrollDir;

          // Silk-smooth ramp up on scroll using power2.out
          gsap.to(tweenRef.current, {
            timeScale: targetTimeScale,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
            onComplete: () => {
              // Smoothly glide back to normal base speed (timeScale = 1) after scroll stops
              if (tweenRef.current) {
                gsap.to(tweenRef.current, {
                  timeScale: 1,
                  duration: 1.4,
                  ease: 'power2.out',
                  overwrite: 'auto',
                });
              }
            },
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover handlers to smoothly slow down / resume marquee motion
  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0.3, duration: 0.6, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6, ease: 'power2.out' });
    }
  };

  // Duplicate MARQUEE_ITEMS twice inside two identical sets for 100% seamless xPercent -50% loop
  const repeatedItems = [
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
  ];

  return (
    <section 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-[#ff5500] py-4 sm:py-5 shadow-md select-none z-20 border-y border-white/10"
    >
      {/* Ambient glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500] via-[#ff6a00] to-[#ff4500] opacity-90 pointer-events-none" />

      {/* Marquee Track Container animated by GSAP */}
      <div
        ref={trackRef}
        className="flex whitespace-nowrap items-center will-change-transform relative z-10 w-max"
      >
        {/* Render duplicate sets for seamless loop */}
        {repeatedItems.map((item, index) => {
          return (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-4 sm:gap-6 mx-6 sm:mx-10 shrink-0 group cursor-default"
            >
              {/* Freight Item Label */}
              <span className="text-white font-medium text-lg sm:text-xl md:text-2xl tracking-wide capitalize font-sans drop-shadow-xs">
                {item.label}
              </span>

              {/* Marquee Item PNG Image Icon */}
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-7 h-7 md:w-12 md:h-12 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}