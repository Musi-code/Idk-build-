/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Film,
  Sparkles,
  TrendingUp,
  BarChart3,
  Layers,
  ShieldCheck,
  ArrowRight,
  Star,
  Mail,
  Play,
  Volume2,
  Tv,
  CheckCircle2,
  HelpCircle,
  Send,
  X,
  ChevronDown,
  Check,
  Menu,
  Activity,
  ArrowUpRight
} from "lucide-react";
import { PORTFOLIO_ITEMS, CAPABILITIES, TESTIMONIALS, WORKFLOW_STEPS, FAQS } from "./data";
import { PortfolioItem, Testimonial, Capability, FAQItem, WorkflowStep } from "./types";

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Modal / Interaction states
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [faqExpanded, setFaqExpanded] = useState<string | null>(null);
  const [activeWorkflowPhase, setActiveWorkflowPhase] = useState<number>(0);

  // Form submission feedback
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5,000 - $15,000",
    category: "AI Video Ads",
    message: ""
  });

  // Simulator/video states in the project modal
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [audioLevel, setAudioLevel] = useState<number[]>([12, 28, 48, 12, 10, 32, 54, 78, 40, 22, 12, 35, 62, 14, 28]);

  // Simulate audio level ripples when "video" is playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVideoPlaying) {
      interval = setInterval(() => {
        setAudioLevel(
          Array.from({ length: 18 }, () => Math.floor(Math.random() * 85) + 10)
        );
      }, 120);
    } else {
      setAudioLevel(Array.from({ length: 18 }, () => 12));
    }
    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  // Scroll spy detection for active section indicator and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "capabilities", "workflow", "testimonials", "faqs"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Calculate scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const progressPercentage = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(progressPercentage);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    // Simulate API database action latency
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setIsContactOpen(false);
        // Reset
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "$5,000 - $15,000",
          category: "AI Video Ads",
          message: ""
        });
      }, 3500);
    }, 1200);
  };

  // Safe navigation anchor custom smooth scroller
  const navigateTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Map icon strings cleanly to avoid dangerous evaluation
  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "MovieEdit":
        return <Film id="icon-movie" className="w-8 h-8 text-[#004DC9]" />;
      case "Hub":
        return <Layers id="icon-hub" className="w-8 h-8 text-[#004DC9]" />;
      case "Verified":
        return <ShieldCheck id="icon-verified" className="w-8 h-8 text-[#004DC9]" />;
      case "Brain":
        return <Sparkles id="icon-brain" className="w-8 h-8 text-[#004DC9]" />;
      case "TrendingUp":
        return <TrendingUp id="icon-trending" className="w-8 h-8 text-[#004DC9]" />;
      case "BarChart":
        return <BarChart3 id="icon-barchart" className="w-8 h-8 text-[#004DC9]" />;
      default:
        return <Activity id="icon-default" className="w-8 h-8 text-[#004DC9]" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#00BAEB] via-[#004DC9] to-[#000000] text-[#e5e2e1] font-sans selection:bg-[#00BAEB]/30 selection:text-white relative overflow-hidden noise-overlay">
      
      {/* Scroll Progress Bar indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[200] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#00BAEB] via-[#004DC9] to-[#9feefc] shadow-[0_0_8px_#00BAEB] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Background Ambient Atmospheric Blobs with high-intensity fluid flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-90">
        {/* Blob 1: Top Left - Intense #00BAEB Glow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[100px] w-[1400px] h-[1400px] -top-[20%] -left-[20%]"
          style={{ background: "radial-gradient(circle, rgba(0, 186, 235, 0.6) 0%, rgba(0, 186, 235, 0.25) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, 150, -120, 0],
            y: [0, 120, -100, 0],
            rotate: [0, 90, 180, 360],
            scale: [1, 1.25, 0.9, 1],
            opacity: [0.85, 1, 0.8, 0.85]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Blob 2: Top Right - Dynamic #004DC9 Glow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[110px] w-[1300px] h-[1300px] top-[5%] -right-[20%]"
          style={{ background: "radial-gradient(circle, rgba(0, 77, 201, 0.5) 0%, rgba(0, 77, 201, 0.2) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, -160, 100, 0],
            y: [0, 130, -110, 0],
            rotate: [360, 180, 90, 0],
            scale: [1, 0.9, 1.3, 1],
            opacity: [0.8, 1, 0.75, 0.8]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Blob 3: Middle Left - Smooth #00BAEB Flow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[100px] w-[1500px] h-[1500px] top-[30%] -left-[25%]"
          style={{ background: "radial-gradient(circle, rgba(0, 186, 235, 0.55) 0%, rgba(0, 186, 235, 0.18) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, 180, -120, 0],
            y: [0, -140, 100, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.3, 0.85, 1],
            opacity: [0.75, 1, 0.8, 0.75]
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Blob 4: Middle Right - Vibrant #004DC9 Glow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[120px] w-[1400px] h-[1400px] top-[45%] -right-[25%]"
          style={{ background: "radial-gradient(circle, rgba(0, 77, 201, 0.5) 0%, rgba(0, 77, 201, 0.15) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, -140, 120, 0],
            y: [0, 150, -110, 0],
            rotate: [360, 240, 120, 0],
            scale: [1, 0.85, 1.25, 1],
            opacity: [0.8, 1, 0.75, 0.8]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Blob 5: Bottom Left - Flowing #00BAEB Glow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[110px] w-[1400px] h-[1400px] top-[65%] -left-[15%]"
          style={{ background: "radial-gradient(circle, rgba(0, 186, 235, 0.5) 0%, rgba(0, 186, 235, 0.2) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, 130, -140, 0],
            y: [0, -120, 130, 0],
            rotate: [0, 180, 270, 360],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.85, 0.95, 0.75, 0.85]
          }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Blob 6: Bottom Right - Electric #004DC9 Glow */}
        <motion.div 
          className="absolute rounded-full pointer-events-none filter blur-[100px] w-[1500px] h-[1500px] -bottom-[20%] -right-[20%]"
          style={{ background: "radial-gradient(circle, rgba(0, 77, 201, 0.6) 0%, rgba(0, 77, 201, 0.25) 45%, rgba(0,0,0,0) 75%)" }}
          animate={{
            x: [0, -150, 130, 0],
            y: [0, -100, 140, 0],
            rotate: [360, 270, 90, 0],
            scale: [1, 0.9, 1.3, 1],
            opacity: [0.8, 1, 0.7, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* HEADER NAVIGATION */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-7xl rounded-full border border-white/10 backdrop-blur-xl bg-black/40 shadow-2xl flex justify-between items-center px-6 md:px-10 py-3.5 z-50 transition-all">
        <button
          onClick={() => navigateTo("home")}
          className="text-xl md:text-2xl font-bold font-display tracking-tighter text-white hover:opacity-90 flex items-center gap-2 cursor-pointer transition-all"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Exal Visuals
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-9">
          {[
            { id: "home", label: "Home" },
            { id: "portfolio", label: "Workflow" }, // original HTML map
            { id: "capabilities", label: "Why Us" },
            { id: "faqs", label: "FAQs" }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 cursor-pointer ${
                activeSection === link.id
                  ? "text-[#004DC9] font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004DC9] rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=riseaka29@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-gradient-to-r from-[#4b8eff] to-[#005bc1] text-white shadow-[0_0_25px_rgba(75,142,255,0.45),_0_0_10px_rgba(14,165,233,0.3)] border border-white/20 hover:border-blue-300/40 hover:shadow-[0_0_40px_rgba(75,142,255,0.8),_0_0_20px_rgba(14,165,233,0.65)] px-6 py-2.5 rounded-full font-semibold tracking-wide text-xs uppercase hover:scale-[1.04] transition-all duration-300 cursor-pointer items-center justify-center"
          >
            Let's Connect
          </a>

          {/* Mobile hamburger toggle icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE INTERACTIVE ACCORDION MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-6 right-6 p-6 rounded-3xl glass-card z-40 border border-white/10 shadow-3xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                { id: "home", label: "Home" },
                { id: "portfolio", label: "Workflow (Portfolio)" },
                { id: "capabilities", label: "Why Us (Capabilities)" },
                { id: "workflow", label: "Strategic Process" },
                { id: "testimonials", label: "What Clients Say" },
                { id: "faqs", label: "FAQs" }
              ].map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${
                    activeSection === link.id ? "text-[#004DC9] font-bold pl-2" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riseaka29@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-[#004DC9] to-[#00505d] text-white py-3 rounded-full text-center font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-[#004DC9]/20 active:scale-95 block"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 
       {/* MAIN CONTAINER */}
       <main className="pt-32 relative z-10">
         
         {/* HERO SECTION */}
         <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24 md:pt-24 md:pb-32">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
             
             {/* Left Narrative Column */}
             <div className="flex flex-col gap-8 lg:col-span-6 z-10 text-left">
               <motion.div
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 self-start text-xs font-semibold tracking-wider text-slate-300 uppercase"
               >
                 <span className="w-1.5 h-1.5 rounded-full bg-[#004DC9] animate-pulse" />
                 Next-Gen Cinematic Motion Agency
               </motion.div>
 
               <motion.h1
                 initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                 transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                 className="text-5xl sm:text-6xl lg:text-7.5xl font-extrabold tracking-tight leading-[1.08] font-display"
               >
                 <span className="text-white block">Design that</span>
                 <span className="bg-gradient-to-r from-[#adc6ff] via-[#89b0fe] to-sky-400 bg-clip-text text-transparent pr-2">
                   Converts
                 </span>
               </motion.h1>
 
               <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7, delay: 0.3 }}
                 className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl"
               >
                 Crafting AI-powered video content and creative strategy that captures core attention,
                 communicates real value, and delivers tangible conversion outcomes for avant-garde brands that intend to stand tall.
               </motion.p>
 
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7, delay: 0.45 }}
                 className="flex flex-wrap gap-4 pt-2"
               >
                 <a
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=riseaka29@gmail.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex bg-gradient-to-r from-[#4b8eff] to-[#005bc1] shadow-[0_0_30px_rgba(75,142,255,0.45),_0_0_12px_rgba(14,165,233,0.3)] border border-white/20 hover:border-blue-300/40 hover:shadow-[0_0_50px_rgba(75,142,255,0.8),_0_0_25px_rgba(14,165,233,0.6)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm items-center gap-3.5 group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                 >
                   Let's Work Together
                   <ArrowRight className="w-4.5 h-4.5 transition-transform duration-350 group-hover:translate-x-1.5" />
                 </a>
                <button
                  onClick={() => navigateTo("portfolio")}
                  className="inline-flex bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-slate-400 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm items-center gap-3 transition-all cursor-pointer"
                >
                  View Case Studies
                </button>
              </motion.div>
            </div>

            {/* Right Graphic Master Column */}
            <div className="lg:col-span-6 relative z-10 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1.2, rotateY: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 60 }}
                className="relative w-full max-w-xl md:max-w-none aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden glass-card group border border-blue-500/10 shadow-[0_0_60px_rgba(75,142,255,0.22)]"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 52%, rgba(0,0,0,0) 95%)",
                  maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 52%, rgba(0,0,0,0) 95%)"
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-[1.02]"
                  poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrPE9ALbhabq7cRWsZcqss-ecaIfHxT3Ca9u6Pl_JtXBLbGqfHmGfnMqFAukrdKM4bbqMQHe2llhfVItpvvK61_gxsCKF2_HQG3KbcS2Z0G7cC4zsaDa6V-z5jJSXk9JDgd_L4FaaOruyNkn9nZ9Sb_UoyHw7_GA22AYKpe7Vl7hiXylZl8fAeFLwrThVMesoG42SLxuSdNm2zG64tvhvvOV49Rj9L-UIwrEVBov_UgN2OL-qWpfnH3Q2qrb1nJaxHrmrUpDRkwZL"
                >
                  <source src="/hero-loop.mp4" type="video/mp4" />
                </video>
                
                {/* Radial Mask overlay imitating perfect photo integrations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" />
                

              </motion.div>
            </div>

          </div>

          {/* LOOPS / TRUSTED LOGOS BAR */}
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
            <p className="text-xs uppercase font-semibold letter tracking-[0.25em] text-slate-500">
              Trusted by Top Brands & Studios
            </p>
            
            <div className="w-full overflow-hidden relative py-4">
              <div className="flex w-max">
                <motion.div
                  className="flex items-center gap-x-16 md:gap-x-24 pr-16 md:pr-24 shrink-0"
                  animate={{ x: [0, "-100%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity
                  }}
                >
                  {[
                    { name: "Lovart.AI", color: "hover:text-[#adc6ff]" },
                    { name: "TopView.AI", color: "hover:text-blue-400" },
                    { name: "Filmora", color: "hover:text-[#ffb595]" },
                    { name: "Invideo.AI", color: "hover:text-sky-400" },
                    { name: "Vidu.AI", color: "hover:text-amber-300" },
                    { name: "Wondershare", color: "hover:text-rose-400" }
                  ].map((logo, idx) => (
                    <span
                      key={`run1-${idx}`}
                      className={`text-xl md:text-2xl font-bold font-display tracking-tight text-slate-400 transition-all duration-300 hover:scale-[1.05] filter hover:brightness-125 cursor-default shrink-0 ${logo.color}`}
                    >
                      {logo.name}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex items-center gap-x-16 md:gap-x-24 pr-16 md:pr-24 shrink-0"
                  animate={{ x: [0, "-100%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity
                  }}
                >
                  {[
                    { name: "Lovart.AI", color: "hover:text-[#adc6ff]" },
                    { name: "TopView.AI", color: "hover:text-blue-400" },
                    { name: "Filmora", color: "hover:text-[#ffb595]" },
                    { name: "Invideo.AI", color: "hover:text-sky-400" },
                    { name: "Vidu.AI", color: "hover:text-amber-300" },
                    { name: "Wondershare", color: "hover:text-rose-400" }
                  ].map((logo, idx) => (
                    <span
                      key={`run2-${idx}`}
                      className={`text-xl md:text-2xl font-bold font-display tracking-tight text-slate-400 transition-all duration-300 hover:scale-[1.05] filter hover:brightness-125 cursor-default shrink-0 ${logo.color}`}
                    >
                      {logo.name}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES PORTFOLIO (SEC 1 in original UI) */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#004DC9] uppercase tracking-[0.25em] mb-3 block">
              01 / Portfolio Case Studies
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent"
            >
              Recent Work
            </motion.h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
              Explore custom-made campaigns and generative designs developed to target user conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-11">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(item)}
                className="group rounded-2xl overflow-hidden glass-card hover:border-[#004DC9]/30 cursor-pointer transition-all duration-500 flex flex-col p-3 hover:shadow-[0_20px_40px_rgba(0,77,201,0.06)]"
              >
                {/* Image layout container */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Glass layout dark vignette overlay */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-400" />
                  
                  {/* Subtle play button simulation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#004DC9]/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg shadow-[#004DC9]/30">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Hot tag corner */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    <span className="text-[9px] font-bold tracking-widest text-slate-300 uppercase">
                      CASE {index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col items-start text-left flex-grow">
                  <span className="text-[10px] font-extrabold text-[#004DC9] tracking-wider bg-[#004DC9]/10 border border-[#004DC9]/20 px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mt-4 tracking-tight group-hover:text-[#004DC9] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">Client: <strong className="text-slate-200">{item.client}</strong></span>
                    <span className="text-[#004DC9] font-bold group-hover:underline inline-flex items-center gap-1.5">
                      Explore Spec <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORKFLOW PROCESS DETAILS (Nav link maps here) */}
        <section id="workflow" className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-gradient-to-b from-transparent via-[#004DC9]/5 to-transparent">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#004DC9] uppercase tracking-[0.25em] mb-3 block">
              Strategic Roadmap
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent"
            >
              Our 4-Step Pipeline
            </motion.h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
              How we formulate ideas, engineer generative scenarios, and output high-converting cinematic assets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch lg:min-h-[460px]">
            
            {/* Steps index column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {WORKFLOW_STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowPhase(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 group relative cursor-pointer ${
                    activeWorkflowPhase === idx
                      ? "glass-card border-[#004DC9]/30 bg-[#0c0c0c]"
                      : "bg-transparent border-transparent hover:bg-white/5"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-all ${
                    activeWorkflowPhase === idx
                      ? "bg-[#004DC9] text-white"
                      : "bg-white/5 text-slate-400"
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="text-left flex-grow">
                    <p className={`text-[10px] font-mono tracking-widest uppercase ${
                      activeWorkflowPhase === idx ? "text-[#004DC9]" : "text-slate-500"
                    }`}>
                      {step.phase}
                    </p>
                    <p className={`text-base font-bold tracking-tight ${
                      activeWorkflowPhase === idx ? "text-white" : "text-slate-300"
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  <ArrowRight className={`w-4.5 h-4.5 transition-transform ${
                    activeWorkflowPhase === idx ? "text-[#004DC9] translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                  }`} />
                </button>
              ))}
            </div>

            {/* Step details content displays */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflowPhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full glass-card border border-white/10 rounded-3xl p-8 flex flex-col justify-between text-left"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-full border border-white/15 self-start">
                      <span className="font-mono text-xs font-bold text-[#004DC9] px-3 uppercase">
                        {WORKFLOW_STEPS[activeWorkflowPhase].phase} ACTIVE PIPELINE
                      </span>
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-white font-display">
                      {WORKFLOW_STEPS[activeWorkflowPhase].title}
                    </h3>
                    
                    <p className="text-slate-300 text-base leading-relaxed">
                      {WORKFLOW_STEPS[activeWorkflowPhase].description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs font-bold tracking-widest text-[#004DC9] uppercase mb-4">
                      DELIVERABLES & TARGETS:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {WORKFLOW_STEPS[activeWorkflowPhase].details.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* CAPABILITIES (SEC 2 block) */}
        <section id="capabilities" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#004DC9] uppercase tracking-[0.25em] mb-3 block">
              02 / Capabilities
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent"
            >
              Why Work With Us
            </motion.h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
              We compile visual fidelity, rapid AI processing setups, and cinematic direction values to keep you ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAPABILITIES.map((capability) => (
              <div
                key={capability.id}
                className="glass-card hover:border-[#004DC9]/25 p-7 md:p-9 rounded-2xl flex flex-col items-start text-left gap-5 group transition-all duration-400 hover:shadow-[0_15px_30px_rgba(0,77,201,0.05)] border-t border-t-white/15"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#004DC9]/10 border border-[#004DC9]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  {getCapabilityIcon(capability.iconName)}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#004DC9] transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEEDBACK TESTIMONIALS (SEC 3 block) */}
        <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#004DC9] uppercase tracking-[0.25em] mb-3 block">
              03 / Testimonials
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent"
            >
              What Clients Say
            </motion.h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
              Verbatim feedback from global content houses, agencies and creators who scale campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-9">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-card p-8 rounded-2xl flex flex-col justify-between gap-6 hover:border-[#004DC9]/20 hover:scale-[1.01] transition-all duration-300 text-left border-l-2 border-l-[#004DC9]/50"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4.5">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#004DC9]/10 border border-[#004DC9]/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-extrabold text-[#004DC9] font-mono">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 tracking-wide uppercase font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACCORDION FAQ SECTION */}
        <section id="faqs" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#004DC9] uppercase tracking-[0.25em] mb-3 block">
              Knowledge Base
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-slate-400 text-sm mt-4">
              Everything you need to know about AI video production and strategic deployment.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = faqExpanded === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? "rgba(0,77,201,0.03)" : "rgba(255,255,255,0.01)"
                  }}
                >
                  <button
                    onClick={() => setFaqExpanded(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base md:text-lg font-bold text-white hover:text-[#004DC9] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#004DC9]/10 text-[#004DC9]" : "text-slate-400"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed text-left border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CONNECT HEADER HERO */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[440px] relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[450px] h-[450px] bg-[#004DC9]/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-display text-white"
            >
              Let's create something <span className="italic font-light text-blue-300">impactful</span> together
            </motion.h2>
            
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riseaka29@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-[#4b8eff] to-[#005bc1] hover:shadow-[0_0_30px_rgba(75,142,255,0.4)] text-white px-9 py-4 rounded-full font-bold uppercase tracking-wider text-sm items-center gap-3 cursor-pointer"
              >
                <Mail className="w-4.5 h-4.5" />
                Contact via Email
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black/50 border-t border-white/5 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold font-display text-white">Exal Visuals</h4>
            <p className="text-xs text-slate-500 mt-1">Cinematic AI Strategy for high-impact brands.</p>
          </div>
          <div className="flex gap-8 text-xs text-slate-400">
            <button onClick={() => navigateTo("home")} className="hover:text-white cursor-pointer uppercase tracking-wider">Home</button>
            <button onClick={() => navigateTo("portfolio")} className="hover:text-white cursor-pointer uppercase tracking-wider">Portfolio</button>
            <button onClick={() => navigateTo("capabilities")} className="hover:text-white cursor-pointer uppercase tracking-wider">Capabilities</button>
            <button onClick={() => navigateTo("faqs")} className="hover:text-white cursor-pointer uppercase tracking-wider">FAQs</button>
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Exal Visuals. All rights reserved.
          </p>
        </div>
      </footer>

      {/* PORTFOLIO CARD PROJECT CASE REVEAL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-100 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0b0b0b] border border-white/10 rounded-3xl w-full max-w-4xl p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative text-left"
            >
              {/* Abs Close button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setIsVideoPlaying(false);
                }}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-300 hover:text-white cursor-pointer transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4">
                
                {/* Media Playback View Grid Column */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                    {isVideoPlaying && selectedProject.youtubeId ? (
                      <iframe
                        className="w-full h-full border-0 absolute inset-0"
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0`}
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : isVideoPlaying ? (
                      <div className="w-full h-full bg-black flex flex-col justify-center items-center p-4 relative">
                        <div className="w-12 h-12 rounded-full border-4 border-t-[#004DC9] border-white/10 animate-spin" />
                        <p className="text-xs font-mono text-slate-500 mt-4 tracking-widest uppercase">
                          STREAMING WORKPIECE SIM...
                        </p>
                        
                        {/* Audio equalizer simulator layout */}
                        <div className="absolute bottom-4 left-6 right-6 flex items-end justify-center gap-1.5 h-16">
                          {audioLevel.map((lvl, index) => (
                            <motion.div
                              key={index}
                              animate={{ height: `${lvl}%` }}
                              className="w-1.5 bg-gradient-to-t from-[#004DC9] to-[#00505d] rounded-full"
                              style={{ height: "12%" }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <button
                            onClick={() => setIsVideoPlaying(true)}
                            className="w-16 h-16 rounded-full bg-[#004DC9] text-white flex items-center justify-center shadow-lg shadow-[#004DC9]/40 hover:scale-105 active:scale-95 cursor-pointer transition-all"
                          >
                            <Play className="w-7 h-7 fill-white ml-1" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-between items-center px-2 py-1 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-slate-400 animate-pulse" /> Audio: Master Cinematic Mix
                    </span>
                    <span>1080p AI Upscale Master</span>
                  </div>
                </div>

                {/* Details Meta Information Column */}
                <div className="md:col-span-5 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#004DC9] tracking-wider bg-[#004DC9]/10 border border-[#004DC9]/20 px-3 py-1 rounded-full uppercase">
                      {selectedProject.category}
                    </span>
                    
                    <h3 className="text-3xl font-extrabold text-white tracking-tight mt-4">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mt-4">
                      Defines professional generative scene synthesis. Highly customized layout structure, trained with specialized parameters for maximal client conversions.
                    </p>

                    <table className="w-full text-xs mt-6 border-t border-white/10">
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-slate-500 font-medium">Client Partner</td>
                          <td className="py-2.5 text-slate-200 text-right font-bold">{selectedProject.client}</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-slate-500 font-medium">Generative Tool</td>
                          <td className="py-2.5 text-slate-200 text-right">{selectedProject.tools.join(", ")}</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-slate-500 font-medium">Target Outcomes</td>
                          <td className="py-2.5 text-emerald-400 text-right font-bold">Max retention metrics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 pt-4 flex gap-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=riseaka29@gmail.com&su=${encodeURIComponent(`Inquiry regarding campaign: ${selectedProject.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setSelectedProject(null);
                      }}
                      className="w-full py-3 bg-gradient-to-r from-[#004DC9] to-[#00505d] hover:shadow-[0_0_20px_rgba(0,77,201,0.3)] text-white text-xs font-bold tracking-wide uppercase rounded-xl transition-all hover:scale-[1.01] text-center block"
                    >
                      Book Similar Creative ad
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONNECT CONTACT / DRAWER MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -15 }}
              className="bg-[#0c0c0c] border border-white/10 rounded-3xl w-full max-w-xl p-6 md:p-8 relative shadow-2xl overflow-hidden"
            >
              {/* Blur accent in modal background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#004DC9]/10 rounded-full blur-[40px] pointer-events-none" />
              
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 text-slate-400 hover:text-white cursor-pointer transition-all"
                aria-label="Close contact form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-left mb-6">
                <span className="text-[10px] font-bold text-[#004DC9] uppercase tracking-[0.25em] block mb-2">
                  Launch Your Video Initiative
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Brief Your Concept
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Submit your scope and details. Our direct producers respond with structural storyboards within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Application Received!</h4>
                    <p className="text-xs text-slate-300 max-w-xs mx-auto mt-2 leading-relaxed">
                      Thank you <strong className="text-[#004DC9]">{formData.name}</strong>. Our director is reviewing your visual goals for <strong className="text-slate-100">{formData.company || "your brand"}</strong>.
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono mt-4 uppercase animate-pulse">
                      SAVED PERSISTENTLY / DISPATCHING STORYBOARD...
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 col-span-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#004DC9] focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 col-span-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#004DC9] focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Brand / Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Studio"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#004DC9] focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 col-span-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Project Budget Tier
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-[#004DC9] transition-all select:bg-black"
                      >
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                        <option value="$50,000+">Enterprise ($50k+)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5 col-span-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Campaign Direction Unit
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-[#004DC9] transition-all select:bg-black"
                      >
                        <option value="AI Video Ads">AI Video Ads</option>
                        <option value="SaaS Motion Strategy">SaaS Motion Strategy</option>
                        <option value="Cinematic Brand Films">Cinematic Brand Films</option>
                        <option value="Full Scale Custom Production">Full Scale Studio</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Message & Visual Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Give a short overview of your visual ideas, story objectives, or questions."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#004DC9] focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-4 bg-gradient-to-r from-[#004DC9] to-[#00505d] hover:shadow-[0_0_20px_rgba(0,77,201,0.3)] text-white py-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2.5 disabled:opacity-40"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                        Analyzing Requirements...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Send Video Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
