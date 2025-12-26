export const resumeData = {
  personalInfo: {
    name: "Rahin Zaman",
    title: "Junior Software Engineer",
    summary:
      "Junior Software Engineer with hands-on experience in React.js, Next.js, Tailwind CSS, and Firebase. Strong background in UI/UX optimization, reusable component development, and API integration. Passionate about learning new technologies and contributing to high-impact projects in collaborative teams.",
    photoUrl: "/profile-placeholder.jpg", // We'll need a placeholder or just use a colored div if no image
    contact: {
      address: "Nandipara, Dhaka.",
      phone: "+8801682511723",
      email: "mdrahinzaman@gmail.com",
    },
    socials: [
      { name: "Github", url: "github.com/rahin21" },
      { name: "Facebook", url: "facebook.com/rahin.zaman.20" },
      { name: "LinkedIn", url: "linkedin.com/in/rahin-zaman-735296343/" },
    ],
    skills: {
      languagesAndDatabases: [
        "C", "C++", "Python", "HTML", "CSS", "Javascript", "TypeScript",
        "Github", "MySQL", "PostgreSQL", "Firebase", "MongoDB", "Supabase", "Prisma", "Drizzle"
      ],
      frameworksAndLibraries: [
        "ReactJS", "NextJS", "React Native", "TailwindCSS", "ExpressJS", "Electron.JS"
      ]
    },
    extra: [
      "Problem Solving", "Graphic Design", "MS Office & Prompt Engineering"
    ],
    languages: [
      { name: "English", level: "Limited Working", percent: 60 },
      { name: "Bengali", level: "Native or Bilingual", percent: 100 },
      { name: "Hindi", level: "Elementary", percent: 30 },
    ]
  },
  experience: [
    {
      title: "Junior Software Engineer",
      company: "Ascend AI, Remote",
      duration: "Currently Working",
      points: [
        "Post: Junior Software Engineer.",
        "Technologies: React Native, Electron.js, Next.js, Drizzle, PostgreSQL, Firebase, MongoDB, TailwindCSS, Shadcn/ui.",
        "Contributed to production-grade apps (InstaDM, Ambiance) using React.js, Next.js, TypeScript, Electron.js, and Firebase. Built reusable components, implemented SSR/SSG, integrated APIs & authentication, and collaborated with designers and backend engineers."
      ]
    },
    {
      title: "Human Resources Intern",
      company: "Doreen, Dhaka",
      duration: "28.10.24 - 01.01.25",
      description: "Assisted in recruitment by screening candidates, supporting interviews, and onboarding sales employees. Developed communication and coordination skills through collaboration with senior HR staff."
    },
    {
      title: "Frontend Developer",
      company: "Eagles Idea",
      duration: "01.01.23 - 01.07.23",
      points: [
        "Post: Frontend Developer.",
        "Technologies: Node.js, Express.js & ejs.",
        "Duration: 6 months."
      ]
    },
    {
      title: "Home Tutor",
      company: "",
      duration: "01.05.17 - On going",
      points: [
        "Subjects: Physics, Chemistry, Mathematics, English, ICT, Geography & Biology.",
        "Classes: 1 to 10.",
        "Medium: English Version & English Medium.",
        "Duration: 8 Years."
      ]
    }
  ],
  education: [
    {
      degree: "CSE: Computer Science & Engineering",
      institution: "College Of Technology - Narayanganj, Bangladesh",
      duration: "2019- 2025",
      details: ["Average CGPA: 3.57"]
    },
    {
      degree: "HSC",
      institution: "BIAM Model School & College - Dhaka",
      duration: "2017 - 2019",
      details: ["GPA: 4.25"]
    },
    {
      degree: "SSC",
      institution: "Willes Little Flower School & College - Dhaka",
      duration: "2015-2017",
      details: ["GPA: 5.00"]
    }
  ],
  projects: {
    personal: [
			{ 
        name: "Chrono Stride AR", 
        url: "chrono-stride-ar.vercel.app", 
        stack: "React, WebAR.Rocks, Ant Design",
        description: "An immersive Augmented Reality experience built with WebAR.Rocks. Users can interact with 3D models in real-time directly through their browser.",
        images: [
          "/chrono-stride-ar/Screenshot 1.png",
          "/chrono-stride-ar/Screenshot 2.png",
          "/chrono-stride-ar/Screenshot 3.png",
          "/chrono-stride-ar/Screenshot 4.png",
          "/chrono-stride-ar/Screenshot 5.jpeg",
          "/chrono-stride-ar/Screenshot 6.jpeg",
          "/chrono-stride-ar/Screenshot 7.png"
        ],
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      { 
        name: "Portfolio Website", 
        url: "rahinzaman.vercel.app", 
        stack: "Next.JS, TailwindCSS, ShadCN UI, Framer Motion, Lucid React",
        description: "Modern Next.js portfolio with interactive animations, server-side rendering, and a custom responsive design.",
        images: [
          "/portfolio-website/Screenshot 1.png",
          "/portfolio-website/Screenshot 2.png",
          "/portfolio-website/Screenshot 3.png",
          "/portfolio-website/Screenshot 4.png",
        ]
      },
			{ 
        name: "Booking System", 
        url: "booking-system-pearl-beta.vercel.app", 
        stack: "ShadCN UI, Next.JS, Cloudinary, PostgreSQL",
        description: "A comprehensive booking management platform featuring a robust admin panel. Handles scheduling, resource allocation, and user management efficiently.",
        images: [
          "/booking-system/Screenshot 1.png",
          "/booking-system/Screenshot 2.png",
          "/booking-system/Screenshot 3.png",
          "/booking-system/Screenshot 4.png",
          "/booking-system/Screenshot 5.png"
        ]
      },
      { 
        name: "Contact App", 
        url: "contact-app-theta-sooty.vercel.app", 
        stack: "React, TailwindCSS, FireBase",
        description: "A modern contact management application with cloud synchronization. Features instant search, categorization, and secure data storage.",
        images: [
          "/contact-app/Screenshot 1.png",
          "/contact-app/Screenshot 2.png",
          "/contact-app/Screenshot 3.png",
          "/contact-app/Screenshot 4.png"
        ],
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
			{ 
        name: "Issue Tracker", 
        url: "issue-tracker-seven-omega.vercel.app", 
        stack: "Shadcn/ui, NextJs, Prisma, MongoDB",
        description: "A streamlined issue tracking solution for development teams. Features real-time updates, priority management, and collaborative tools.",
        images: [
          "/Issue-tracker/Screenshot 1.png",
          "/Issue-tracker/Screenshot 2.png",
          "/Issue-tracker/Screenshot 3.png",
          "/Issue-tracker/Screenshot 4.png",
          "/Issue-tracker/Screenshot 5.png"
        ]
      },
      { 
        name: "Ambiance", 
        url: "ambiance-sigma.vercel.app", 
        stack: "TailwindCSS, React.js, Next.Js, With Admin Panel",
        description: "A mood-enhancing application with curated soundscapes and visual themes. Includes an admin dashboard for content management.",
        images: [
          "/ambiance/Screenshot 1.png",
          "/ambiance/Screenshot 2.png",
          "/ambiance/Screenshot 3.png",
          "/ambiance/Screenshot 4.png",
          "/ambiance/Screenshot 5.png",
          "/ambiance/Screenshot 6.png",
          "/ambiance/Screenshot 7.png",
          "/ambiance/Screenshot 8.png",
          "/ambiance/Screenshot 9.png",
        ]
      },
      { 
        name: "E-Shoes", 
        url: "eshoes-kohl.vercel.app", 
        stack: "Bootstrap, EJS, Node.js, Express.js",
        description: "An e-commerce platform for footwear with a complete shopping cart system. Built with a server-side rendering approach for optimal performance.",
        images: [
          "/eshoes/Screenshot 1.png",
          "/eshoes/Screenshot 2.png",
          "/eshoes/Screenshot 3.png",
          "/eshoes/Screenshot 4.png",
          "/eshoes/Screenshot 5.png"
        ]
      },
    ],
    contribution: [
      { 
        name: "Ascend-AI", 
        url: "ascendai.site", 
        stack: "Next.js, TypeScript, Shadcn/ui, Framer-motion",
        description: "Contributed to the core UI components and animation systems. Enhanced user engagement through smooth transitions and responsive design."
      },
      { 
        name: "InstaDM", 
        url: "instadm.ai", 
        stack: "Electron.js, Next.js, TypeScript, Firebase",
        description: "Helped build the desktop application architecture. Implemented real-time messaging features and cross-platform compatibility."
      }
    ]
  }
};
