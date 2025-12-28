'use client';

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, GraduationCap, Code, X, Trophy, Star, Target, MapPin, Calendar, Globe, TrendingUp, Puzzle, Lightbulb, ChevronRight, ChevronLeft } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
};

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const graduationImages = [
    "/graduation/Graduation-1.jpg",
    "/graduation/Graduation-2.jpg",
    "/graduation/Graduation-3.jpg",
  ];

  const icpcImages = [
    "/icpc/ICPC-1.jpg",
    "/icpc/ICPC-2.jpg",
    "/icpc/ICPC-3.jpg",
  ];

  const openLightbox = (image: string, gallery: string[]) => {
      setSelectedImage(image);
      setCurrentGallery(gallery);
  };

  const handleNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!selectedImage || currentGallery.length === 0) return;
      const currentIndex = currentGallery.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % currentGallery.length;
      setSelectedImage(currentGallery[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!selectedImage || currentGallery.length === 0) return;
      const currentIndex = currentGallery.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      setSelectedImage(currentGallery[prevIndex]);
  };

  return (
    <section id="achievements" className="py-32 bg-[#0d0d0d] relative z-10 overflow-hidden">
        {/* Decorative Background - Terminal Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4ade800a_1px,transparent_1px),linear-gradient(to_bottom,#4ade800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#4ade80]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
            >
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs font-mono tracking-wider mb-4">
                    <Star size={12} className="fill-[#4ade80]" />
                    <span>JOURNEY & MILESTONES</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">ACHIEVEMENTS</span>
                 </h2>
                 <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    A timeline of competitive programming excellence and academic milestones.
                 </p>
            </motion.div>

            {/* Timeline Structure */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4ade80] via-[#4ade80]/20 to-transparent md:-translate-x-px" />

                {/* ITEM 1: ICPC HERO CARD (Left) */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {/* Content (Left on Desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:text-right md:pr-12 relative"
                    >
                         {/* Timeline Dot */}
                         <div className="absolute right-[-55px] top-8 w-4 h-4 rounded-full bg-[#0d0d0d] border-2 border-[#4ade80] z-20 hidden md:block shadow-[0_0_10px_#4ade80]" />
                         <div className="absolute right-[-49px] top-[40px] w-12 h-[2px] bg-[#4ade80] hidden md:block" />

                         <div className="inline-flex items-center gap-2 text-[#4ade80] font-mono text-sm mb-2">
                            <Trophy size={16} /> 2023
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-4">ICPC Asia Dhaka Regional</h3>
                         <p className="text-gray-400 leading-relaxed mb-6">
                            Competed in the prestigious International Collegiate Programming Contest. Solved complex algorithmic problems under extreme time pressure, demonstrating teamwork and advanced problem-solving skills.
                         </p>
                         
                         {/* Stats/Badges */}
                         <div className="flex flex-wrap justify-end gap-3">
                             <span className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-gray-300 font-mono">Teamwork</span>
                             <span className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-gray-300 font-mono">C++</span>
                             <span className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-gray-300 font-mono">Algorithms</span>
                         </div>
                    </motion.div>

                    {/* Visual (Right on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-12"
                    >
                        <div className="grid grid-cols-3 gap-3">
                            {icpcImages.map((src, i) => (
                                <div 
                                    key={i} 
                                    className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 cursor-pointer group hover:border-[#4ade80]/50 transition-all"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <Image 
                                        src={src} 
                                        alt={`ICPC Regional ${i + 1}`} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ITEM 2: BEECROWD DASHBOARD (Right) */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                     {/* Visual (Left on Desktop) */}
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:text-right md:pr-12 order-2 md:order-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl group hover:border-[#4ade80]/30 transition-colors">
                            {/* Browser Header */}
                            <div className="px-4 py-3 bg-[#0a0a0a] border-b border-white/5 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="flex-1 text-center text-[10px] font-mono text-gray-600">judge.beecrowd.com</div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6 md:p-8 bg-[#0d0d0d]">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                                            <Code size={32} className="text-[#4ade80]" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-bold text-white">RahinZaman</h4>
                                            <p className="text-[#4ade80] font-mono text-sm">@416607</p>
                                        </div>
                                    </div>
                                    <a 
                                        href="https://judge.beecrowd.com/en/profile/416607" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 hover:bg-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all"
                                    >
                                        <span className="text-[10px] font-bold text-[#4ade80] tracking-wider uppercase">Profile</span>
                                        <ExternalLink size={12} className="text-[#4ade80] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-[#1a1a1a]/50 border border-white/5">
                                        <div className="text-gray-500 text-xs font-bold uppercase mb-1">Ranking</div>
                                        <div className="text-xl font-bold text-white flex items-center gap-2">
                                            Top 1% <span className="text-yellow-500 text-xs">▼</span>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#1a1a1a]/50 border border-white/5">
                                        <div className="text-gray-500 text-xs font-bold uppercase mb-1">Points</div>
                                        <div className="text-xl font-bold text-white flex items-center gap-2">
                                            <AnimatedCounter value={879} /> <span className="text-[#4ade80] text-xs">↗</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Submissions</span>
                                        <span className="text-white font-mono"><AnimatedCounter value={784} /></span>
                                    </div>
                                    <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#4ade80] w-[80%]" />
                                    </div>
                                    
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Solved</span>
                                        <span className="text-white font-mono"><AnimatedCounter value={113} /></span>
                                    </div>
                                    <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[60%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content (Right on Desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-12 relative order-1 md:order-2"
                    >
                         {/* Timeline Dot */}
                         <div className="absolute left-[-55px] top-8 w-4 h-4 rounded-full bg-[#0d0d0d] border-2 border-[#4ade80] z-20 hidden md:block shadow-[0_0_10px_#4ade80]" />
                         <div className="absolute left-[-49px] top-[40px] w-12 h-[2px] bg-[#4ade80] hidden md:block" />

                         <div className="inline-flex items-center gap-2 text-[#4ade80] font-mono text-sm mb-2">
                            <Code size={16} /> ONGOING
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-4">Competitive Programming</h3>
                         <p className="text-gray-400 leading-relaxed mb-6">
                            Consistent problem solving on Beecrowd (formerly URI). Focusing on data structures, algorithms, and mathematical problem solving. Maintained a top 1% global ranking through dedication and continuous learning.
                         </p>
                         
                         <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Target size={14} className="text-[#4ade80]" /> Hardest Solved: 1047
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <MapPin size={14} className="text-[#4ade80]" /> Dhaka, Bangladesh
                            </div>
                         </div>
                    </motion.div>
                </div>

                {/* ITEM 3: GRADUATION (Left) */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Content (Left on Desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:text-right md:pr-12 relative"
                    >
                         {/* Timeline Dot */}
                         <div className="absolute right-[-55px] top-8 w-4 h-4 rounded-full bg-[#0d0d0d] border-2 border-[#4ade80] z-20 hidden md:block shadow-[0_0_10px_#4ade80]" />
                         <div className="absolute right-[-49px] top-[40px] w-12 h-[2px] bg-[#4ade80] hidden md:block" />

                         <div className="inline-flex items-center gap-2 text-[#4ade80] font-mono text-sm mb-2">
                            <GraduationCap size={16} /> 2024
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-4">CSE Graduation</h3>
                         <p className="text-gray-400 leading-relaxed mb-6">
                            Successfully graduated with a degree in Computer Science and Engineering. Built a strong foundation in software development, system design, and computer theory.
                         </p>
                         
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                            <Award size={14} className="text-[#4ade80]" />
                            <span>B.Sc. in Computer Science & Engineering</span>
                         </div>
                    </motion.div>

                    {/* Visual (Right on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pl-0 md:pl-12"
                    >
                         <div className="grid grid-cols-2 gap-4">
                             {graduationImages.slice(0, 2).map((src, i) => (
                                 <div 
                                    key={i} 
                                    className={`relative rounded-xl overflow-hidden border border-white/10 aspect-[3/4] cursor-pointer group ${i === 1 ? 'mt-8' : ''}`}
                                    onClick={() => setSelectedImage(src)}
                                 >
                                    <Image 
                                        src={src} 
                                        alt="Graduation" 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                 </div>
                             ))}
                         </div>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Lightbox Modal */}
        {createPortal(
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 z-[10000] p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-md border border-white/10"
                        >
                            <X size={28} />
                        </button>
                        
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 sm:left-8 z-[10000] p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-md border border-white/10"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 sm:right-8 z-[10000] p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-md border border-white/10"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image 
                                src={selectedImage} 
                                alt="Gallery Preview" 
                                fill 
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )}
    </section>
  );
}
