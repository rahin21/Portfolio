import { resumeData } from "@/data/resume";
import Image from "next/image";

export function Sidebar() {
  const { personalInfo } = resumeData;

  return (
    <div className="bg-[#1a1a1a] text-white w-[360px] flex-shrink-0 flex flex-col min-h-screen border-l border-white/10">
      {/* Profile Image Area */}
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="w-48 h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden border-4 border-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.3)] relative">
          <Image 
            src="/RahinProfessional.png" 
            alt={personalInfo.name} 
            fill
            className="object-cover w-full h-full"
          /> 
        </div>
        <h1 className="text-2xl font-bold text-center mt-2 text-white">{personalInfo.name}</h1>
        <p className="text-lg text-center text-[#4ade80] font-light">{personalInfo.title}</p>
      </div>

      <div className="p-6 space-y-8 flex-grow">
        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-bold border-b border-[#4ade80]/30 text-[#4ade80] pb-2 mb-4">Contact</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-1 text-gray-300">
                 Address
              </h3>
              <p className="text-gray-400">{personalInfo.contact.address}</p>
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-1 text-gray-300">
                 Phone
              </h3>
              <p className="text-gray-400">{personalInfo.contact.phone}</p>
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-1 text-gray-300">
                 E-mail
              </h3>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-400 hover:text-[#4ade80] hover:underline break-all transition-colors">
                {personalInfo.contact.email}
              </a>
            </div>
          </div>
        </section>

        {/* Websites/Socials */}
        <section>
          <h2 className="text-xl font-bold border-b border-[#4ade80]/30 text-[#4ade80] pb-2 mb-4">Websites, Portfolios, Profiles</h2>
          <ul className="space-y-2 text-sm">
            {personalInfo.socials.map((social) => (
              <li key={social.name} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-[#4ade80] rounded-full flex-shrink-0" />
                <a 
                  href={`https://${social.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#4ade80] text-gray-400 hover:underline break-all transition-colors"
                >
                  {social.url}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills & Hobbies */}
        <section>
          <h2 className="text-xl font-bold border-b border-[#4ade80]/30 text-[#4ade80] pb-2 mb-4">Skills & Hobbies</h2>
          
          <div className="mb-4">
            <h3 className="font-bold text-gray-300 mb-2">Languages & Databases:</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {personalInfo.skills.languagesAndDatabases.join(", ")}.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-300 mb-2">Frameworks & Libraries:</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {personalInfo.skills.frameworksAndLibraries.join(", ")}.
            </p>
          </div>
        </section>

        {/* Extra */}
        <section>
          <h2 className="text-xl font-bold border-b border-[#4ade80]/30 text-[#4ade80] pb-2 mb-4">Extra:</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            {personalInfo.extra.join(", ")}.
          </p>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-bold border-b border-[#4ade80]/30 text-[#4ade80] pb-2 mb-4">Languages</h2>
          <div className="space-y-4">
            {personalInfo.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-semibold text-gray-300">{lang.name}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#4ade80] h-full" 
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
                <div className="text-right text-xs mt-1 text-gray-500">{lang.level}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
