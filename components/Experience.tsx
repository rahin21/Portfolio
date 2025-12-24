"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export function Experience() {
  const { experience } = resumeData;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-[#4ade80] border-b border-[#4ade80]/30 pb-2 mb-6">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
            {job.company && (
              <p className="text-gray-300 italic font-medium mb-1">{job.company}</p>
            )}
            <p className="text-sm text-[#4ade80] font-semibold mb-2">Duration: {job.duration}</p>
            
            {job.description && (
              <p className="text-gray-400 leading-relaxed mb-2">{job.description}</p>
            )}

            {job.points && (
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400">
                {job.points.map((point, idx) => (
                  <li key={idx} className="leading-snug">
                    {/* Bold key terms if needed, simplistic regex or just raw text */}
                    <span dangerouslySetInnerHTML={{ 
                      __html: point.replace(
                        /(React\.js|Next\.js|TypeScript|Electron\.js|Firebase|Node\.js|Express\.js)/g, 
                        '<strong class="text-[#4ade80]">$1</strong>'
                      ) 
                    }} />
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
