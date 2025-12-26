import React, { memo } from "react";
import { motion } from "framer-motion";
import { techIcons } from "@/data/techIcons";

const ProjectTechBadge = memo(({ skill, index = 0 }: { skill: string, index?: number }) => {
    // Try to find an icon, fallback to a generic code block look if not found
    const iconKey = Object.keys(techIcons).find(k => 
        skill.toLowerCase() === k.toLowerCase() || 
        (k.length > 2 && skill.toLowerCase().includes(k.toLowerCase())) // Avoid short matches like "C" matching in other words unless exact
    );
    const Icon = techIcons[skill] || (iconKey ? techIcons[iconKey] : null);
    
    if (!Icon) {
        // Fallback for no icon
        return (
             <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded-md text-gray-500">
                {skill.trim()}
            </span>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-[#4ade80] hover:bg-[#1a1a1a]/80 transition-all duration-300 group cursor-default"
        >
            <Icon size={14} className="text-gray-400 group-hover:text-[#4ade80] transition-colors duration-300" />
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        </motion.div>
    );
});

ProjectTechBadge.displayName = "ProjectTechBadge";

export default ProjectTechBadge;
