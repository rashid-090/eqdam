import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CutCornerButton from '../CutCornerButton';
import { FiCheckCircle } from 'react-icons/fi';

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

export default function Contact() {
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' or 'track'
  const [submitted, setSubmitted] = useState(false);
  const [trackingSubmitted, setTrackingSubmitted] = useState(false);

  // Form State with exact required fields: name, email, phone, service, message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [trackingNumber, setTrackingNumber] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 4000);
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    setTrackingSubmitted(true);
    setTimeout(() => {
      setTrackingSubmitted(false);
      setTrackingNumber('');
    }, 4000);
  };

  return (
    <section className="bg-[#080808] text-white py-16 sm:py-24 overflow-hidden">
      <div className="w-11/12 mx-auto">
        
        {/* Main Content Grid: Left Unsplash Image Card, Right Form Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* Left Column: Unsplash Image Card with Top-Left & Bottom-Right Diagonal Corner Cuts */}
          <motion.div variants={revealItemVariants} className="lg:col-span-4 relative min-h-[350px] lg:min-h-[580px] w-full">
            <div 
              className="w-full h-full min-h-[350px] lg:min-h-[580px] overflow-hidden relative shadow-2xl bg-slate-900 border border-slate-800 group"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics shipment transport" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: White Form Container with Corner Cuts */}
          <motion.div variants={revealItemVariants} className="lg:col-span-8 relative">
            <div 
              className="w-full h-full bg-white text-slate-900 p-6 sm:p-10 lg:p-12 shadow-2xl relative flex flex-col justify-between"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
              }}
            >
              <div>
                
                {/* Header Tabs: Request Quote / Track & Trace */}
                <div className="flex items-center gap-3 pb-5 pt-7 md:pt-0 border-b border-slate-100">
                  <h2 className='text-2xl sm:text-3xl font-medium tracking-tight transition-colors cursor-pointer'>
                    Request Quote
                  </h2>
                </div>

                {/* ---------------- REQUEST QUOTE FORM ---------------- */}
                {activeTab === 'quote' && (
                  <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                    
                    {/* Submission Success Alert */}
                    {submitted && (
                      <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-lg animate-fadeIn">
                        <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Thank you! Your quote request has been submitted successfully.</span>
                      </div>
                    )}

                    {/* Section 1: Personal Data */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
                        Personal Data
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Name Input */}
                        <div>
                          <input 
                            type="text" 
                            name="name" 
                            required
                            placeholder="Your name *" 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            placeholder="Email address *" 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors"
                          />
                        </div>

                        {/* Phone Input */}
                        <div>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            placeholder="Phone number *" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Service & Message */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
                        Service &amp; Details
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {/* Select Service Dropdown */}
                        <div>
                          <select 
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors cursor-pointer"
                          >
                            <option value="">Select Service</option>
                            <option value="Road Freight">Road Freight</option>
                            <option value="Ocean Freight">Ocean Freight</option>
                            <option value="Air Freight">Air Freight</option>
                            <option value="Rail Freight">Rail Freight</option>
                          </select>
                        </div>

                        {/* Message Input */}
                        <div>
                          <textarea 
                            name="message" 
                            rows={5}
                            placeholder="Your Message *" 
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Action Button */}
                    <div className="pt-2">
                      <CutCornerButton 
                        type="submit"
                        bgColor="#FF822A" 
                        hoverBgColor="#0C3063"
                        className="text-xs sm:text-sm px-7 py-3.5"
                      >
                        Request a Quote
                      </CutCornerButton>
                    </div>

                  </form>
                )}

                {/* ---------------- TRACK & TRACE FORM ---------------- */}
                {activeTab === 'track' && (
                  <form onSubmit={handleTrackingSubmit} className="space-y-6 pt-6">
                    {trackingSubmitted && (
                      <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-lg">
                        <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Searching tracking database for #{trackingNumber}... Status: In Transit.</span>
                      </div>
                    )}

                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
                        Track Shipment
                      </h4>
                      <div>
                        <input 
                          type="text" 
                          required
                          placeholder="Enter Tracking ID or Waybill Number *" 
                          value={trackingNumber}
                          onChange={(e) => setTrackingNumber(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff5500] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <CutCornerButton 
                        type="submit"
                        bgColor="#FF822A" 
                        hoverBgColor="#0C3063"
                        className="text-xs sm:text-sm px-7 py-3.5"
                      >
                        Track Cargo
                      </CutCornerButton>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}