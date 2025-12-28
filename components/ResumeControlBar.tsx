"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToHomeButton } from "@/components/BackToHomeButton";

export function ResumeControlBar() {
  return (
    <>
      <BackToHomeButton />
      
      {/* Download PDF - Right Side */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <a 
          href="/Rahin_Zaman_Resume.pdf" 
          download="Rahin_Zaman_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            className="bg-[#4ade80] text-black hover:bg-[#22c55e] border-none rounded-full gap-2 font-bold shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] transition-all duration-300"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download PDF</span>
          </Button>
        </a>
      </div>
    </>
  );
}