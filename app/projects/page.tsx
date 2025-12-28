"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ProjectCard } from "@/components/ProjectShowcase";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    const { projects } = resumeData;
    const allProjects = [...projects.personal];

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#4ade80] selection:text-black py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
                >
                    <div className="text-center md:text-left">
                        <Link href="/">
                            <Button variant="ghost" className="group text-gray-400 hover:text-white mb-4 pl-0 hover:bg-transparent">
                                <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Button>
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-2">
                            All Projects
                        </h1>
                        <p className="text-gray-400 max-w-2xl">
                            A complete collection of my work, side projects, and experiments.
                        </p>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} className="h-full min-h-[450px]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
