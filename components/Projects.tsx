"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";

export function Projects() {
  const { projects } = resumeData;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-[#4ade80] border-b border-[#4ade80]/30 pb-2 mb-6">
        Projects
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-200 underline decoration-gray-600 underline-offset-4 mb-4">
          Personal Projects
        </h3>
        <ul className="space-y-3">
          {projects.personal.map((project, index) => (
             <motion.li
             key={index}
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.3, delay: index * 0.05 }}
             className="text-gray-400"
           >
             <span className="font-bold text-gray-200">• {project.name}: </span>
             <a 
               href={`https://${project.url}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#4ade80] hover:underline font-medium"
             >
               {project.url}
             </a>
             <span className="text-gray-500"> ({project.stack})</span>
           </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-200 underline decoration-gray-600 underline-offset-4 mb-4">
          Contribution
        </h3>
        <ul className="space-y-3">
          {projects.contribution.map((project, index) => (
             <motion.li
             key={index}
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.3, delay: index * 0.05 }}
             className="text-gray-400"
           >
             <span className="font-bold text-gray-200">• {project.name}: </span>
             <a 
               href={`https://${project.url}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#4ade80] hover:underline font-medium"
             >
               {project.url}
             </a>
             <span className="text-gray-500"> ({project.stack})</span>
           </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
