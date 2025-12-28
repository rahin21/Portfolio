"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToHomeButton() {
  return (
    <div className="fixed top-6 left-6 z-50 print:hidden">
      <Link href="/">
        <Button 
          variant="outline" 
          className="bg-black/50 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:text-[#4ade80] hover:border-[#4ade80] transition-all duration-300 rounded-full gap-2"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Back to Home</span>
        </Button>
      </Link>
    </div>
  );
}
