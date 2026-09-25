import { motion } from "framer-motion";
import { FiShield, FiBox, FiGlobe } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Staggered blur & slide reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const revealItemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const metricCards = [
  {
    id: 1,
    number: "50+",
    label: "Years of Experience",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    alt: "Logistics truck transport",
    clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 35px)",
    alignContainer: "flex flex-col justify-end text-left",
  },
  {
    id: 2,
    number: "100+",
    label: "Countries Covered",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    alt: "Air cargo logistics",
    clipPath: null,
    alignContainer:
      "flex flex-col items-start md:items-center justify-end md:justify-center text-left md:text-center",
  },
  {
    id: 3,
    number: "5000",
    label: "Delivered Packages",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    alt: "Container port delivery",
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%)",
    alignContainer:
      "flex flex-col items-start md:items-end justify-end md:justify-start text-left md:text-right",
  },
];

const featureCards = [
  {
    id: 1,
    icon: FiShield,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull",
  },
  {
    id: 2,
    icon: FiBox,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull",
  },
  {
    id: 3,
    icon: FiGlobe,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, cons ectetur adipis cing elitull",
  },
];

export default function About() {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24 -mb-20 overflow-hidden">
      <div className="w-11/12 mx-auto space-y-16">
        {/* Top Header Section with Staggered Reveal Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Top Left Tag */}
          <motion.div
            variants={revealItemVariants}
            className="lg:col-span-3 flex items-center gap-2"
          >
            <span className="w-0.5 h-5 bg-[#ff5500] inline-block shrink-0" />
            <span className="text-[#ff5500] text-sm sm:text-base font-medium tracking-wide">
              About Us
            </span>
          </motion.div>

          {/* Top Right Main Title & Sub-paragraph */}
          <div className="lg:col-span-9">
            {/* Title Column */}
            <div className="w-full space-y-5">
              <motion.h2
                variants={revealItemVariants}
                className="text-2xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15]"
              >
                At Eqdam, we move the world
                <br className="hidden md:block" /> with smart and seamless
                logistics.
              </motion.h2>

              {/* Paragraph Column */}
              <motion.div
                variants={revealItemVariants}
                className="text-slate-500 text-xs sm:text-sm leading-relaxed space-y-2"
              >
                <p>
                  At Eqdam, we deliver reliable logistics solutions that keep
                  your business moving. From road and rail to air and ocean, we
                  connect your cargo to destinations worldwide. With dependable
                  service, smart coordination, and secure handling, we simplify
                  every shipment. Moving your goods faster, safer, and further —
                  wherever business takes you.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ---------------- DESKTOP METRIC CARDS GRID (3 Columns) ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {metricCards.map((card) => (
            <div
              key={card.id}
              className={`relative text-white h-[360px] xl:h-[600px] p-8 shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.01] ${card.alignContainer}`}
              style={card.clipPath ? { clipPath: card.clipPath } : {}}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/55 transition-colors" />

              <div className="relative z-10 space-y-1">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white">
                  {card.number}
                </h3>
                <p className="text-xs sm:text-sm text-white tracking-wide">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ---------------- MOBILE SWIPER CAROUSEL (1 View Card with Pagination Bullet) ---------------- */}
        <div className="block md:hidden w-full">
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
            className="metric-swiper pb-4"
          >
            {metricCards.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  className={`relative text-white h-[380px] p-8 shadow-lg overflow-hidden ${card.alignContainer}`}
                  style={card.clipPath ? { clipPath: card.clipPath } : {}}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/50" />

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-6xl font-medium tracking-tight text-white">
                      {card.number}
                    </h3>
                    <p className="text-sm text-slate-200 tracking-wide">
                      {card.label}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                <h4 className="text-base font-medium text-slate-900">
                  {feature.title}
                </h4>
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
                    <h4 className="text-base font-medium text-slate-900">
                      {feature.title}
                    </h4>
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
