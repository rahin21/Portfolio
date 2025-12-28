import { resumeData } from "@/data/resume";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Projects } from "./Projects";

export function MainContent() {
  const { personalInfo } = resumeData;

  return (
    <div className="flex-grow p-12 bg-[#0d0d0d] text-gray-200">
      {/* Header / Intro */}
      <header className="mb-10 border-b border-gray-800 pb-6">
        <p className="text-gray-400 leading-relaxed text-lg">
          {personalInfo.summary}
        </p>
      </header>

      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
