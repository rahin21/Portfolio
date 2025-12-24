"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export function Education() {
  const { education } = resumeData;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-[#4ade80] border-b border-[#4ade80]/30 pb-2 mb-6">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-gray-300 italic font-medium mb-1">{edu.institution}</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400">
               <li className="font-semibold text-sm">Duration: {edu.duration}</li>
               {edu.details.map((detail, idx) => (
                 <li key={idx} className="font-semibold text-sm">{detail}</li>
               ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
