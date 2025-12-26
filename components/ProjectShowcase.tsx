"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Youtube, ChevronLeft, ChevronRight, X, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectTechBadge from "./ProjectTechBadge";

// Type definition for Project
export type Project = {
    name: string;
    url: string;
    stack: string;
    description?: string;
    images?: string[]; // Updated to support multiple images
    image?: string; // Fallback for backward compatibility
    youtube?: string;
};

interface ProjectShowcaseProps {
    projects: Project[];
}

const ProjectCard = ({ project, className = "" }: { project: Project; className?: string }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const images = project.images || (project.image ? [project.image] : []);
    const hasMultipleImages = images.length > 1;

    // Auto-slide effect
    useEffect(() => {
        if (!hasMultipleImages || isHovered) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [hasMultipleImages, isHovered, images.length]);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div 
            className={`bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-full ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-[#222] group/image">
                {images.length > 0 ? (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={currentImageIndex === 0}
                            />
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#222] to-[#111]">
                        <span className="text-3xl font-black text-white/10 uppercase tracking-widest">{project.name.substring(0, 2)}</span>
                    </div>
                )}
                
                {/* Image Navigation Controls */}
                {hasMultipleImages && (
                    <>
                        <button 
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-20"
                            aria-label="Next Image"
                        >
                            <ChevronRight size={20} />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity">
                            {images.map((_, idx) => (
                                <div 
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Overlay with Quick Actions */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center gap-3 z-10 ${hasMultipleImages ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'}`}>
                   {/* Note: When multiple images exist, we don't show the full overlay on hover to allow image navigation. 
                       Instead, users can click the "View Details" link below or we can position these buttons differently.
                       For now, let's keep them hidden if multiple images to avoid conflict, or show them only if not interacting with arrows.
                       Actually, let's make them always accessible via the bottom link, but maybe show them in top right corner?
                   */}
                   {!hasMultipleImages && (
                        <>
                            <a
                                href={`https://${project.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#4ade80] text-black rounded-full hover:scale-110 transition-transform"
                                title="View Project"
                            >
                                <ArrowUpRight size={20} />
                            </a>
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"
                                    title="Watch Demo"
                                >
                                    <Youtube size={20} />
                                </a>
                            )}
                        </>
                   )}
                </div>
                
                {/* Floating Action Buttons for Multi-image cards (Top Right) */}
                {hasMultipleImages && (
                    <div className="absolute top-2 right-2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <a
                            href={`https://${project.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#4ade80]/90 text-black rounded-full hover:scale-110 transition-transform backdrop-blur-sm"
                            title="View Project"
                        >
                            <ArrowUpRight size={16} />
                        </a>
                        {project.youtube && (
                            <a
                                href={project.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-red-600/90 text-white rounded-full hover:scale-110 transition-transform backdrop-blur-sm"
                                title="Watch Demo"
                            >
                                <Youtube size={16} />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ade80] transition-colors line-clamp-1">
                    {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description || "A remarkable project built with modern technologies."}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.split(',').slice(0, 3).map((tech, i) => (
                            <ProjectTechBadge key={i} skill={tech.trim()} index={i} />
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <a 
                            href={`https://${project.url}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-[#4ade80] hover:underline"
                        >
                            View Details <ArrowUpRight size={14} className="ml-1" />
                        </a>

                        {project.youtube && (
                            <a 
                                href={project.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-400 hover:scale-110 transition-all"
                                title="Watch Demo"
                            >
                                <Youtube size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    // Default carousel shows featured projects (first 5)
    const featuredProjects = projects.slice(0, 5);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    // Responsive items per page for carousel
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(3);
            else if (window.innerWidth >= 640) setItemsPerPage(2);
            else setItemsPerPage(1);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => 
            prev + 1 >= featuredProjects.length - (itemsPerPage - 1) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev - 1 < 0 ? featuredProjects.length - itemsPerPage : prev - 1
        );
    };

    return (
        <div className="w-full">
            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-[#4ade80] rounded-full inline-block"></span>
                        Featured Projects
                    </h3>
                    <div className="flex gap-2 relative z-20">
                        <button 
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white text-black border border-white hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                            aria-label="Previous Projects"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white text-black border border-white hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                            aria-label="Next Projects"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Carousel Window */}
                <div className="overflow-hidden py-4 -mx-4 px-4">
                    <motion.div 
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {featuredProjects.map((project, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                            >
                                <ProjectCard project={project} className="h-[380px]" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(featuredProjects.length - (itemsPerPage - 1)) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? "w-8 bg-[#4ade80]" : "w-2 bg-gray-600 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Button 
                        onClick={() => setIsDrawerOpen(true)}
                        className="bg-transparent border border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-black px-8 py-6 rounded-full font-bold text-lg group transition-all"
                    >
                        <Grid size={20} className="mr-2" />
                        View All Projects
                    </Button>
                </div>
            </div>

            {/* Full Screen Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full h-[90vh] sm:h-[95vh] bg-[#0d0d0d] border-t border-white/10 rounded-t-3xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0d0d0d] z-10">
                                <div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight text-white">All Projects</h2>
                                    <p className="text-gray-400 text-sm">Explore my complete portfolio</p>
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="ghost" 
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="rounded-full hover:bg-white/10 text-white"
                                >
                                    <X size={24} />
                                </Button>
                            </div>

                            {/* Scrollable Grid */}
                            <div className="flex-grow overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1920px] mx-auto">
                                    {projects.map((project, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <ProjectCard project={project} className="h-full min-h-[400px]" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}