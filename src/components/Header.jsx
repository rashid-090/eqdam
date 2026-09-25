import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo/logo.webp";
import CutCornerButton from "./CutCornerButton";

// Navigation menu stored in an array
const navMenuItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About Us", path: "/about" },
  { id: 3, label: "Services", path: "/products" },
  { id: 4, label: "Contact Us", path: "/faqs" },
];

// Stagger container variant strictly for menu items
const navListVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.01,
    },
  },
};

// Item variant applied only to individual menu items
const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scrolled style threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling DOWN; show header when scrolling UP (reverse direction) or near top
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible || mobileMenuOpen ? "translate-y-0 " : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-md border-b border-slate-200/80 py-2"
          : "bg-white backdrop-blur-sm shadow-xs py-4 border-b border-slate-100"
      }`}
    >
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={logoImg}
              alt="EQDAM for Customs Clearance Est."
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="flex items-center justify-between gap-10">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navMenuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `text-sm capitalize font-medium tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "text-slate-950 border-b-1 border-[#ff5500]"
                        : "text-slate-600 hover:text-slate-950"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Button - Reusable CutCornerButton */}
            <div className="hidden sm:flex items-center">
              <CutCornerButton to="/about">Get in Touch</CutCornerButton>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Staggered Framer Motion Effect Applied ONLY to Menu Items */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl  px-5 mt-5 pb-4">
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navListVariants}
              className="flex flex-col space-y-3 pt-2"
            >
              {navMenuItems.map((item) => (
                <motion.div key={item.id} variants={menuItemVariants}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-semibold px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-orange-50 text-[#ff5500] font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile Action Button inside menu items animation */}
              <motion.div
                variants={menuItemVariants}
                className="pt-3 border-t border-slate-100 flex justify-center"
              >
                <CutCornerButton
                  to="/about"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                  <FiArrowRight className="w-4 h-4" />
                </CutCornerButton>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
