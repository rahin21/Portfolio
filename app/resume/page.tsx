import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#000000] flex justify-center py-8">
      {/* Container for the resume */}
      <div className="w-full max-w-[1200px] bg-[#0d0d0d] shadow-[0_0_50px_rgba(74,222,128,0.1)] flex flex-col md:flex-row min-h-screen border border-white/10">
        {/* Main Content (Left) */}
        <MainContent />

        {/* Sidebar (Right) */}
        <Sidebar />
      </div>
    </div>
  );
}
