import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import logoImg from '../assets/logo/logo.webp';

const footerNavItems = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'About Us', path: '/about' },
  { id: 3, label: 'Services', path: '/products' },
  { id: 4, label: 'FAQs', path: '/faqs' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200/80 pt-16 pb-8 font-sans relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-32 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="w-11/12 mx-auto relative z-10 space-y-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-slate-200/80">
          
          {/* Left Column: Logo & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src={logoImg} 
                alt="EQDAM for Customs Clearance Est." 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="space-y-3 pt-2">
              <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase block">
                Socials
              </span>
              <div className="flex items-center gap-3">
                
                {/* LinkedIn Icon */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>

                {/* X (Twitter) Icon */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Section: Navigation Links & Contact Information */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Navigation Items */}
            <nav className="flex flex-wrap items-center gap-8 sm:gap-12">
              {footerNavItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-base sm:text-lg font-medium text-slate-900 hover:text-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Horizontal Line */}
            <div className="border-t border-slate-200/80 w-full" />

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              
              {/* Email & Phone */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FiMail className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Email</span>
                  </div>
                  <a 
                    href="mailto:Examplemail@gmail.com" 
                    className="block text-lg sm:text-xl font-medium text-slate-900 hover:text-primary transition-colors break-all"
                  >
                    eqdammail@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Phone</span>
                  </div>
                  <a 
                    href="tel:+111122233344" 
                    className="block text-lg sm:text-xl font-medium text-slate-900 hover:text-primary transition-colors"
                  >
                    +1 11 222 333 44
                  </a>
                </div>

              </div>

              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Address</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs pt-1">
123 Logistics Avenue,<br/> Industrial Area,<br/> Dubai, UAE
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy Policy & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <p>©2026. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
           <a href="https://dostudio.co.in" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">Powered by Do Studio</a>

            {/* Smooth Back to Top Button */}
            <button 
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer shadow-xs"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}