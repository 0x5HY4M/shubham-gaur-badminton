"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, Trophy, Target, Zap, Brain, Play, Instagram, Youtube, Facebook, Twitter, Award, Menu, X, ArrowRight, ExternalLink, Shield, Activity, Flame } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Training", href: "#training" },
    { label: "Results", href: "#results" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            className="relative rounded-2xl px-6 py-3 flex items-center justify-between overflow-hidden"
            style={{
              background: scrolled
                ? "rgba(10, 14, 28, 0.95)"
                : "rgba(10, 14, 28, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 212, 255, 0.15)",
              boxShadow: scrolled
                ? "0 20px 60px rgba(0, 0, 0, 0.5)"
                : "none",
            }}
          >
            <motion.a
              href="#"
              className="relative z-10 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[#0a0e1c]" />
              </div>
              <span className="font-display text-xl md:text-2xl tracking-tight font-black uppercase text-white">
                Coach Shubham
              </span>
            </motion.a>

            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="relative px-4 py-2 font-sport text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00d4ff] group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex relative px-8 py-3 rounded-full font-sport font-black uppercase text-xs tracking-widest text-[#0a0e1c] bg-[#39ff14]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Now
              </motion.button>

              <motion.button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden"
          >
            <div className="rounded-2xl p-6 bg-[#0a0e1c]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-2">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="block px-4 py-3 font-sport font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full flex items-center justify-center bg-[#39ff14] text-[#0a0e1c] group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-[#39ff14]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </motion.a>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0e1c]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,#00d4ff_0%,transparent_50%)]" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity, y }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <span className="px-5 py-2 rounded-full text-[10px] font-sport font-black tracking-[0.4em] uppercase text-[#00d4ff] border border-[#00d4ff]/30 bg-[#00d4ff]/5">
                Elite Badminton Academy
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-8"
            >
              Building <br />
              <span className="text-[#00d4ff]">
                CHAMPIONS.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-sport text-xl md:text-2xl text-gray-400 max-w-xl mb-12 leading-[1.8] font-medium"
            >
              Transform your game with international-standard coaching by Coach Shubham at JMD World School, Kanpur.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button 
                className="px-10 py-5 rounded-2xl bg-[#39ff14] text-[#0a0e1c] font-sport font-black uppercase tracking-widest text-lg hover:brightness-110 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Training
              </button>
              <button 
                className="px-10 py-5 rounded-2xl border-2 border-[#00d4ff]/30 text-[#00d4ff] font-sport font-black uppercase tracking-widest text-lg hover:bg-[#00d4ff]/5 transition-all"
                onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Results
              </button>
            </motion.div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-[#0a0e1c] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Athlete" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-display text-3xl text-[#39ff14] font-black leading-none">500+</p>
                <p className="font-sport text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Champions Trained</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e9eea86-51fa-49da-80b3-42a0ddea9984/WhatsApp-Image-2026-01-01-at-2.58.10-AM-1-1767269238533.jpeg" 
                className="w-full h-full object-cover object-top" 
                alt="Coach Shubham" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1c] via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-display text-4xl text-white font-black uppercase tracking-tight">Shubham Gaur</p>
                <p className="font-sport text-sm text-[#00d4ff] font-bold uppercase tracking-[0.3em]">Head Coach • Professional</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00d4ff] rounded-full blur-[150px] opacity-15" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-[#080c18] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#00d4ff]/10"
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e9eea86-51fa-49da-80b3-42a0ddea9984/WhatsApp-Image-2026-01-01-at-2.58.10-AM-1-1767269238533.jpeg" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Coach Shubham"
            />
          </motion.div>

          <div className="space-y-10">
            <div>
              <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">The Mentor</span>
              <h2 className="font-display text-5xl md:text-7xl text-white font-black uppercase tracking-tighter mb-8">
                About Coach Shubham
              </h2>
              <p className="font-sport text-xl md:text-2xl text-gray-400 leading-[1.8] font-medium">
                With years of professional experience, Coach Shubham has dedicated his life to mastering badminton and mentoring future athletes. Based at JMD World School, his mission is to build a culture of excellence and sportsmanship in Kanpur.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-4xl text-[#00d4ff] font-black mb-2">10+</p>
                <p className="font-sport text-xs text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#00d4ff] font-black mb-2">100%</p>
                <p className="font-sport text-xs text-gray-500 uppercase tracking-widest font-bold">Dedication</p>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              {[Activity, Shield, Flame].map((Icon, i) => (
                <div key={i} className="w-16 h-16 rounded-2xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const points = [
    { icon: Target, title: "Discipline", desc: "The foundation of every victory." },
    { icon: Zap, title: "Speed", desc: "Explosive movement across the court." },
    { icon: Brain, title: "Strategy", desc: "Outplaying opponents with tactical precision." },
    { icon: Award, title: "Focus", desc: "Unwavering mental strength in high pressure." }
  ];

  return (
    <section id="philosophy" className="relative py-24 md:py-40 bg-[#0a0e1c] overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,#00d4ff_0%,transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">The Methodology</span>
          <h2 className="font-display text-5xl md:text-8xl text-white font-black uppercase tracking-tighter">
            Coaching Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-[#00d4ff]/10 bg-[#00d4ff]/[0.02] hover:bg-[#00d4ff]/[0.05] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                <p.icon className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="font-display text-2xl text-white font-black uppercase mb-4">{p.title}</h3>
              <p className="font-sport text-gray-500 font-medium leading-[1.8]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingSystemSection() {
  const items = [
    { title: "Footwork", icon: Zap },
    { title: "Speed", icon: Activity },
    { title: "Strategy", icon: Target },
    { title: "Mental Strength", icon: Brain }
  ];

  return (
    <section className="relative py-24 bg-[#080c18] border-y border-[#00d4ff]/10">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-30" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">Core Modules</span>
          <h2 className="font-display text-4xl md:text-6xl text-white font-black uppercase tracking-tighter">
            The Training System
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#0a0e1c] border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all group"
            >
              <item.icon className="w-10 h-10 text-[#00d4ff] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-white font-black uppercase">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ v }: { v: { title: string; desc: string; url: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-[2.5rem] overflow-hidden bg-[#0a0e1c] border border-white/5 cursor-pointer"
      onClick={togglePlay}
    >
      <div className="aspect-[9/16] relative">
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        >
          <source src={v.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1c] via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 right-10">
          <h3 className="font-display text-3xl text-white font-black uppercase mb-2">{v.title}</h3>
          <p className="font-sport text-sm text-gray-400 font-medium uppercase tracking-wider">{v.desc}</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300">
          {!isPlaying && (
            <div className="w-20 h-20 rounded-full bg-[#00d4ff]/20 backdrop-blur-md border border-[#00d4ff]/30 flex items-center justify-center">
              <Play className="w-8 h-8 text-[#00d4ff] fill-[#00d4ff] translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function TrainingSection() {
  const videos = [
    { title: "Footwork Drills", desc: "Mastering court coverage and agility.", url: "https://assets.mixkit.co/videos/preview/mixkit-man-playing-badminton-in-a-court-41006-large.mp4" },
    { title: "Power Smash", desc: "Explosive overhead technique training.", url: "https://assets.mixkit.co/videos/preview/mixkit-shuttlecock-hitting-a-badminton-racket-41008-large.mp4" },
    { title: "Net Control", desc: "Precision drops and tactical net play.", url: "https://assets.mixkit.co/videos/preview/mixkit-badminton-player-hitting-the-shuttlecock-41010-large.mp4" }
  ];

  return (
    <section id="training" className="relative py-24 md:py-40 bg-[#0a0e1c] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">Training Program</span>
            <h2 className="font-display text-5xl md:text-8xl text-white font-black uppercase tracking-tighter">
              Inside The Drills
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 font-sport font-bold uppercase text-xs tracking-[0.3em] text-[#00d4ff] border-b-2 border-[#00d4ff]/20 pb-2"
          >
            See All Training <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {videos.map((v, i) => (
            <VideoCard key={i} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const results = [
    {
      title: "Champions Cup 2024",
      desc: "Total dominance at the district level with 5 podium finishes.",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e9eea86-51fa-49da-80b3-42a0ddea9984/WhatsApp-Image-2026-01-01-at-2.58.09-AM-1767269238685.jpeg"
    },
    {
      title: "State Qualifiers",
      desc: "Our top students secured their spots for the National championships.",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e9eea86-51fa-49da-80b3-42a0ddea9984/WhatsApp-Image-2026-01-01-at-2.58.10-AM-1767269238558.jpeg"
    }
  ];

  return (
    <section id="results" className="relative py-24 md:py-40 bg-[#080c18] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">Proven Success</span>
          <h2 className="font-display text-5xl md:text-8xl text-white font-black uppercase tracking-tighter mb-4">
            Results That Speak
          </h2>
          <p className="font-sport text-xl text-gray-500 font-medium uppercase tracking-widest">Real Wins. Real Progress.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {results.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 mb-8">
                <img src={res.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={res.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] via-transparent to-transparent opacity-80" />
                <Trophy className="absolute bottom-8 right-8 w-12 h-12 text-[#39ff14]" />
              </div>
              <h3 className="font-display text-4xl text-white font-black uppercase mb-4">{res.title}</h3>
              <p className="font-sport text-xl text-gray-400 font-medium leading-[1.8]">{res.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const openMaps = () => {
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://www.google.com/maps/search/?api=1&query=JMD+World+School+Kanpur" } }, "*");
  };

  return (
    <section id="location" className="relative py-24 md:py-40 bg-[#0a0e1c] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-[#00d4ff]/10 relative group cursor-pointer"
            onClick={openMaps}
          >
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipNUubUnnH8gWecBM-ej570dLTliJf2ijAHJ1D7z=s680-w680-h510-rw" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="JMD World School"
            />
            <div className="absolute inset-0 bg-[#00d4ff]/5 group-hover:bg-transparent transition-all" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-[#00d4ff] flex items-center justify-center animate-bounce">
                <MapPin className="w-10 h-10 text-[#0a0e1c]" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-10 text-center lg:text-left">
            <div>
              <span className="font-tech text-xs tracking-[0.5em] text-[#00d4ff] uppercase mb-4 block">The Campus</span>
              <h2 className="font-display text-5xl md:text-8xl text-white font-black uppercase tracking-tighter mb-8">
                JMD World School
              </h2>
              <p className="font-sport text-xl md:text-2xl text-gray-500 font-medium leading-[1.8]">
                World-class indoor courts and elite infrastructure in the heart of Kanpur. Experience professional training environment.
              </p>
            </div>
            <button 
              onClick={openMaps}
              className="px-12 py-5 rounded-2xl bg-[#00d4ff] text-[#0a0e1c] font-sport font-black uppercase tracking-widest text-lg inline-flex items-center gap-4 hover:brightness-110 transition-all"
            >
              Get Directions <ExternalLink className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#080c18] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-[#0a0e1c]"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-7xl text-white font-black uppercase tracking-tighter mb-6">
              Start Your Journey
            </h2>
            <p className="font-sport text-lg md:text-xl text-gray-500 font-medium uppercase tracking-widest">Build your legacy today.</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <a href="tel:+919876543210" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all group w-full">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#00d4ff]" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-sport text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                <p className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight">+91 98765 43210</p>
              </div>
              <ArrowRight className="hidden sm:block ml-auto w-8 h-8 text-gray-700 group-hover:text-[#00d4ff] transition-colors" />
            </a>

            <a href="https://wa.me/919876543210" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#39ff14]/5 border border-[#39ff14]/20 hover:border-[#39ff14]/50 transition-all group w-full">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#39ff14]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[#39ff14]" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-sport text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                <p className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight">Chat with Coach</p>
              </div>
              <ArrowRight className="hidden sm:block ml-auto w-8 h-8 text-gray-700 group-hover:text-[#39ff14] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-20 bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          <div className="max-w-md">
            <h3 className="font-display text-4xl text-white font-black uppercase tracking-tighter mb-8">Coach Shubham</h3>
            <p className="font-sport text-gray-500 font-medium leading-[1.8] mb-10">
              Professional badminton coaching in Kanpur. Dedicated to technical mastery, mental strength, and championship character.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-[#00d4ff] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-6">
              <p className="font-sport text-[10px] text-white uppercase tracking-[0.4em] font-bold">Menu</p>
              <ul className="space-y-4">
                {["Home", "About", "Training", "Results"].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="font-sport text-gray-500 hover:text-[#00d4ff] font-medium uppercase tracking-widest text-xs transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <p className="font-sport text-[10px] text-white uppercase tracking-[0.4em] font-bold">Connect</p>
              <ul className="space-y-4 font-sport font-medium uppercase tracking-widest text-xs text-gray-500">
                <li>+91 98765 43210</li>
                <li>Kanpur, UP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 font-sport font-medium uppercase tracking-widest text-[10px]">
          <p>© 2024 Coach Shubham Gaur • All Rights Reserved</p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
            Building Champions Every Day
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="bg-[#0a0e1c] min-h-screen selection:bg-[#00d4ff] selection:text-[#0a0e1c]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <TrainingSystemSection />
      <TrainingSection />
      <ResultsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
