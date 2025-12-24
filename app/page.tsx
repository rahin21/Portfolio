"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowUpRight, Github, Linkedin, Facebook, Mail, Menu, Globe } from "lucide-react";
import Typewriter from "typewriter-effect";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, 
  SiElectron, SiPython, SiCplusplus, SiHtml5, SiCss3, SiMysql, SiSupabase, SiGithub 
} from "react-icons/si";

// Mapping tech names to icons
const techIcons: { [key: string]: any } = {
  "ReactJS": SiReact,
  "NextJS": SiNextdotjs,
  "TailwindCSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  "Javascript": SiJavascript,
  "Node.js": SiNodedotjs,
  "ExpressJS": SiExpress,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Electron.JS": SiElectron,
  "Python": SiPython,
  "C++": SiCplusplus,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "MySQL": SiMysql,
  "Supabase": SiSupabase,
  "Github": SiGithub,
  "C": SiCplusplus, // Fallback for C
};

// Optimized Tech Badge Component
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
        >
            <div className="p-4 rounded-2xl bg-[#1a1a1a] border border-white/10 group-hover:border-[#4ade80] group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 ease-out">
                <Icon size={40} className="text-gray-400 group-hover:text-[#4ade80] transition-colors duration-300" />
            </div>
            <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors duration-300">{skill}</span>
        </motion.div>
    );
});
TechBadge.displayName = "TechBadge";

export default function Home() {
  const { personalInfo, projects } = resumeData;

  // Combine projects for the showcase
  const allProjects = [...projects.contribution, ...projects.personal].slice(0, 4); // Show top 4

  // Flatten skills for the Tech Stack section
  const allSkills = [
    ...personalInfo.skills.languagesAndDatabases, 
    ...personalInfo.skills.frameworksAndLibraries
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#4ade80] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-sm font-bold tracking-widest uppercase">
          {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
        </div>
        <div className="flex items-center gap-4">
            <Link href="/resume">
                <Button className="rounded-full bg-white text-black hover:bg-gray-200 transition-colors hidden sm:flex font-bold">
                    Resume
                </Button>
            </Link>
            <Button size="icon" variant="ghost" className="rounded-full bg-white text-black hover:bg-gray-200">
            <Menu size={20} />
            </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-20 relative overflow-hidden">
        {/* Background Gradient/Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4ade80] opacity-10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-lg md:text-xl mb-4 font-medium flex items-center gap-2 h-8">
                Hey <span className="text-2xl">👋</span>, I'm a 
                <span className="text-[#4ade80] inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "Junior Software Engineer",
                        "Full Stack Developer",
                        "Computer Science Graduate"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </div>
              
              <h1 className="text-[12vw] lg:text-[7rem] leading-[0.85] font-black tracking-normal text-[#4ade80] mb-8 break-words">
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>

              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
                <div className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
                   I build fast, scalable, and user-friendly web applications using modern JavaScript technologies. My main tools of choice are <span className="text-[#4ade80]">React</span> on the frontend and <span className="text-[#4ade80]">Node.js</span> on the backend.
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-12">
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
                {/* Image Container with Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ade80]/20 to-transparent rounded-2xl" />
                <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden border border-white/10 relative group">
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
      <section className="py-20 bg-[#0d0d0d] relative border-t border-white/5">
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

      {/* Projects Showcase Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#0d0d0d] relative">
         <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
            >
                <div>
                    <p className="text-[#4ade80] text-sm font-mono mb-2">&lt;/Explore Work&gt;</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                        A Showcase of My <br/> Latest Projects
                    </h2>
                </div>
                <div className="w-full md:w-auto h-[1px] bg-white/10 flex-grow mx-8 hidden md:block" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {allProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="aspect-[4/3] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 mb-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                            
                            {/* Project Mockup Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#222] group-hover:scale-105 transition-transform duration-700">
                                <span className="text-4xl opacity-20 font-black uppercase">{project.name}</span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href={`https://${project.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#4ade80] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    View Project <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4ade80] transition-colors">{project.name}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                            {project.stack}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.split(',').slice(0, 3).map((tech, i) => (
                                <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded-md text-gray-500">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <Link href="/resume">
                    <Button className="bg-[#4ade80] text-black hover:bg-[#3ec46d] text-lg px-8 py-6 rounded-full font-bold">
                        View Full Resume
                    </Button>
                 </Link>
            </div>
         </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 text-center text-gray-500 text-sm">
         <p>© {new Date().getFullYear()} Rahin Zaman. All rights reserved.</p>
         <p className="mt-2">Designed inspired by Bruno Simon.</p>
      </footer>
    </div>
  );
}
