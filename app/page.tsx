"use client";

import React, { memo, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, Linkedin, Facebook, Mail, Menu, Globe, X, Send, Loader2, Calendar } from "lucide-react";
import Typewriter from "typewriter-effect";
import ProjectShowcase from "@/components/ProjectShowcase";
import Achievements from "@/components/Achievements";
import { techIcons } from "@/data/techIcons";
import { sendEmail } from "./actions";
import dynamic from "next/dynamic";

const PixelStars = dynamic(() => import("@/components/PixelStars"), { ssr: false });

// Optimized Tech Badge Component (Vertical / Original Design)
const TechBadge = memo(({ skill, index }: { skill: string, index: number }) => {
    // Try to find an icon, fallback to a generic code block look if not found
    const iconKey = Object.keys(techIcons).find(k => 
        skill.toLowerCase() === k.toLowerCase() || 
        (k.length > 2 && skill.toLowerCase().includes(k.toLowerCase())) // Avoid short matches like "C" matching in other words unless exact
    );
    const Icon = techIcons[skill] || (iconKey ? techIcons[iconKey] : null);
    
    if (!Icon) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            title={skill}
        >
            <div className="p-4 rounded-2xl bg-[#1a1a1a] border border-white/10 group-hover:border-[#4ade80] group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 ease-out">
                <Icon size={40} className="text-gray-400 group-hover:text-[#4ade80] transition-colors duration-300" />
            </div>
            <span className="md:text-xs text-[10px] md:font-mono font-semibold text-gray-500 group-hover:text-white transition-colors duration-300">{skill}</span>
        </motion.div>
    );
});
TechBadge.displayName = "TechBadge";

export default function Home() {
  const { personalInfo, projects, experience } = resumeData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error' | null, text: string}>({ type: null, text: '' });

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: null, text: '' });

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    setIsSending(false);
    if (result.success) {
        setStatusMessage({ type: 'success', text: result.message });
        if (formRef.current) formRef.current.reset();
    } else {
        setStatusMessage({ type: 'error', text: result.message });
    }
  };

  // Combine projects for the showcase
  const allProjects = [/*...projects.contribution,*/ ...projects.personal];

  // Flatten skills for the Tech Stack section
  const allSkills = [
    ...personalInfo.skills.languagesAndDatabases, 
    ...personalInfo.skills.frameworksAndLibraries
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#4ade80] selection:text-black">
      <PixelStars />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <div className="md:w-40 w-10 ">
            <Link href="/">
                <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={50} 
                    height={50} 
                    className="object-contain rounded-lg drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" 
                />
            </Link>
        </div>
        
        {/* Right Side: Resume (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-6">
            <Link 
                href="/resume" 
                className="hidden sm:block"
            >
                <Button className="rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-bold">
                    Resume
                </Button>
            </Link>

            {/* Hamburger Menu (Visible on all screens) */}
            <Button 
                size="icon" 
                variant="ghost" 
                className="rounded-full bg-white text-black hover:bg-gray-200"
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <Menu size={20} />
            </Button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#111] border-l border-white/10 z-[70] p-8 flex flex-col"
                >
                    <div className="flex justify-end mb-12">
                        <Button 
                            size="icon" 
                            variant="ghost" 
                            className="rounded-full text-white hover:bg-white/10"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-8 text-lg font-medium">
                        <Link href="#tech-stack" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-[#4ade80] transition-colors">Tech Stack</Link>
                        <Link href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-[#4ade80] transition-colors">Experience</Link>
                        <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-[#4ade80] transition-colors">Projects</Link>
                        <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-[#4ade80] transition-colors">Contact</Link>
                        <Link href="/resume" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-[#4ade80] transition-colors">Resume</Link>
                        <a 
                            href="https://calendly.com/mdrahinzaman21/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="text-[#4ade80] hover:text-white transition-colors"
                        >
                            Book a Free Call
                        </a>
                    </div>

                    <div className="mt-auto">
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Connect</p>
                        <div className="flex gap-4">
                            {personalInfo.socials.map((social) => {
                                let Icon = Globe;
                                if (social.name.toLowerCase().includes("github")) Icon = Github;
                                if (social.name.toLowerCase().includes("linkedin")) Icon = Linkedin;
                                if (social.name.toLowerCase().includes("facebook")) Icon = Facebook;
                                return (
                                    <a key={social.name} href={`https://${social.url}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                                        <Icon size={24} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-20 pb-24 relative overflow-hidden">
        {/* Background Gradient/Glow */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4ade80] opacity-10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl lg:text-xl xl:text-3xl mb-6 font-medium flex flex-col md:flex-row items-center lg:items-start gap-2 min-h-[auto] md:h-8 justify-center lg:justify-start">
                <span className="flex items-center gap-2">Hey <span className="text-2xl">👋</span>, {`I'm`} a </span>
                <span className="text-[#4ade80] inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "JR Software Engineer",
                        "Full Stack Engineer",
                        "CSE Graduate"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </div>
              
              <h1 className="text-[5rem] lg:text-[7rem] leading-[1.3] lg:leading-[0.85] font-black tracking-normal text-[#4ade80] mb-8 break-words flex flex-col items-center lg:items-start text-center lg:text-left">
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>

              <div className="flex flex-col md:flex-row gap-8 items-center lg:items-center justify-center lg:justify-start mt-12">
                <div className="max-w-md text-gray-400 xl:text-lg text-base leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
                   🚀 Junior Software Engineer @ <span className="text-[#4ade80]">Ascend AI</span>. I craft high-performance web and mobile apps using <span className="text-[#4ade80]">Next.js</span>, <span className="text-[#4ade80]">TypeScript</span>, and <span className="text-[#4ade80]">React Native</span>. Dedicated to UI/UX optimization and building scalable, reusable components. 💻✨
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-12 justify-center lg:justify-start">
                 {personalInfo.socials.map((social) => {
                    let Icon = Globe; // Default icon
                    if (social.name.toLowerCase().includes("github")) Icon = Github;
                    if (social.name.toLowerCase().includes("linkedin")) Icon = Linkedin;
                    if (social.name.toLowerCase().includes("facebook")) Icon = Facebook;
                    
                    return (
                        <a 
                            key={social.name}
                            href={`https://${social.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#4ade80] transition-all hover:scale-110 duration-300"
                            title={social.name}
                        >
                            <Icon size={32} />
                        </a>
                    );
                 })}
                 <a 
                    href={`mailto:${personalInfo.contact.email}`} 
                    className="text-gray-400 hover:text-[#4ade80] transition-all hover:scale-110 duration-300"
                    title="Email"
                 >
                    <Mail size={32} />
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px]"
             >
                {/* Back Glow Effect */}
                <div className="absolute -inset-4 bg-[#4ade80] opacity-30 blur-[40px] rounded-full z-[-1]" />
                
                {/* Image Container with Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ade80]/20 to-transparent rounded-2xl" />
                <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden border-2 border-[#4ade80] relative group shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                    <Image 
                        src="/heroSectionProfilePic.jpg" 
                        alt={personalInfo.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-[#0d0d0d] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                 <p className="text-[#4ade80] text-sm font-mono mb-2">&lt;Tools & Technologies /&gt;</p>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">My Tech Stack</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {allSkills.map((skill, index) => (
                    <TechBadge key={skill} skill={skill} index={index} />
                ))}
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#0d0d0d] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                 <p className="text-[#4ade80] text-sm font-mono mb-2">&lt;Career Path /&gt;</p>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Experience</h2>
            </motion.div>

            <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10 hidden md:block"></div>

                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-0 md:pl-16 group"
                    >
                        {/* Dot on Line */}
                        <div className="absolute left-[14px] top-2 w-3 h-3 bg-[#4ade80] rounded-full z-10 hidden md:block shadow-[0_0_5px_#4ade80] group-hover:scale-125 transition-transform duration-300"></div>

                        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 group-hover:border-[#4ade80]/50 transition-colors duration-300 relative overflow-hidden">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4ade80]/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                    {job.company && <p className="text-[#4ade80] font-mono text-sm">{job.company}</p>}
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/30">
                                    {job.duration}
                                </span>
                            </div>
                            
                            {/* {job.description && (
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.description}</p>
                            )} */}

                            {job.points && (
                                <ul className="space-y-2">
                                    {job.points.map((point, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-[#4ade80] mt-1">▹</span>
                                            <span dangerouslySetInnerHTML={{ 
                                                __html: point.replace(
                                                    /(React\.js|Next\.js|TypeScript|Electron\.js|Firebase|Node\.js|Express\.js|PostgreSQL|MongoDB|TailwindCSS|ejs)/g, 
                                                    '<span class="text-white font-semibold">$1</span>'
                                                ) 
                                            }} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 bg-[#0d0d0d] relative z-10 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                 <p className="text-[#4ade80] text-sm font-mono mb-2">&lt;/Explore Work&gt;</p>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Projects Showcase</h2>
            </motion.div>

            <ProjectShowcase projects={allProjects} />
         </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0d0d0d] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                 <p className="text-[#4ade80] text-sm font-mono mb-2">&lt;Get In Touch /&gt;</p>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Contact Me</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden"
            >
                 {/* Background Glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                 <form ref={formRef} onSubmit={handleSendEmail} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="user_name"
                                required
                                className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="user_email"
                                required
                                className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="contact" className="text-sm font-mono text-gray-400">Contact Info (Optional)</label>
                        <input 
                            type="text" 
                            id="contact"
                            name="user_contact"
                            className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all"
                            placeholder="Phone number or other contact method"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all resize-none"
                            placeholder="Your message here..."
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <Button 
                            type="submit" 
                            disabled={isSending}
                            className="w-full sm:flex-1 h-14 bg-[#4ade80] text-black hover:bg-[#3ec46d] font-bold text-lg rounded-xl transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center"
                        >
                            {isSending ? (
                                <>Sending... <Loader2 size={20} className="ml-2 animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={20} className="ml-2" /></>
                            )}
                        </Button>

                        <div className="flex items-center gap-4 w-full sm:w-auto sm:hidden">
                            <div className="h-px bg-white/10 w-full" />
                            <span className="text-gray-500 text-sm font-mono whitespace-nowrap">OR</span>
                            <div className="h-px bg-white/10 w-full" />
                        </div>
                        <span className="hidden sm:block text-gray-500 font-mono text-sm">OR</span>

                        <a 
                            href="https://calendly.com/mdrahinzaman21/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full sm:flex-1 h-14 bg-[#1a1a1a] border border-[#4ade80] text-white hover:bg-[#222] hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] font-bold text-lg rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
                        >
                            <Calendar size={20} className="text-[#4ade80] group-hover:scale-110 transition-transform" />
                            Book a Free Call
                        </a>
                    </div>

                    {statusMessage.text && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-center p-3 rounded-lg text-sm font-bold ${
                                statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}
                        >
                            {statusMessage.text}
                        </motion.div>
                    )}
                 </form>
            </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 text-center text-gray-500 text-sm bg-[#0d0d0d] relative z-10">
         <p>© {new Date().getFullYear()} <Link href="/" className="font-semibold">Rahin Zaman.</Link> All rights reserved.</p>
      </footer>
    </div>
  );
}
