"use client"

import { useState } from 'react';
import Image from 'next/image';

// Organize skills by category
const skills = {
  webDevelopment: {
    core: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Vite", icon: "vite" },
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Material UI", icon: "mui" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "CSS", icon: "css" },
      { name: "HTML", icon: "html" },
    ],
    tools: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "Figma", icon: "figma" },
      { name: "GitHub", icon: "github" },
      { name: "Git", icon: "git" },
    ],
  },
  design: [
    { name: "Illustrator", icon: "ai" },
    { name: "Photoshop", icon: "ps" },
    { name: "Figma", icon: "figma" },
  ],
};

// Add education and experience data objects
const education = [
  {
    certificate: "BBA in Accounting",
    institute: "Lakshmipur Gov't College", 
    passingYear: "2023",
    icon: "https://img.icons8.com/fluency/96/graduation-cap.png"
  },
  {
    certificate: "HSC - Business Studies",
    institute: "Lakshmipur Paura Ideal College",
    passingYear: "2017", 
    icon: "https://img.icons8.com/fluency/96/graduation-cap.png"
  },
  {
    certificate: "SSC - Business Studies",
    institute: "Lakshmipur Paura Shahid Smrity Academy",
    passingYear: "2015",
    icon: "https://img.icons8.com/fluency/96/graduation-cap.png"
  }
];

const experience = [
  {
    jobTitle: "Assistant Web-Development Trainer",
    institute: "As-Sunnah Skill Development Institute",
    jobDuration: "January, 2023 - Present",
    icon: "https://img.icons8.com/fluency/96/working-with-a-laptop.png",
    responsibilities: [
      "Conducting web development training sessions for students",
      "Teaching modern frontend technologies including React, Next.js, and Tailwind CSS",
      "Mentoring students in building real-world projects",
      "Creating practical exercises and assignments",
      "Providing code reviews and technical guidance",
      "Helping students develop problem-solving skills",
      "Organizing workshops on latest web technologies"
    ],
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'MUI', 'Tailwind CSS', 'HTML/CSS',]
  }
];

const SkillPage = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const getSkillIcon = (iconName) =>
    `https://skillicons.dev/icons?i=${iconName}`;

  return (
    <div className="container mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-gray-400 text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text">Qualifications</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-4xl mx-auto">
          I am happy to share my skills and knowledge to make positive change by
          connecting with others.
          </p>
        </div>

      {/* Tab Buttons */}
      
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="inline-flex items-center p-1 rounded-full bg-black/40 border border-gray-800">
          {[
            { id: 'skills', label: 'Skills', icon: '🖥️' },
            { id: 'experience', label: 'Experience', icon: '💼' },
            { id: 'education', label: 'Education', icon: '🎓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 lg:px-10 py-2 rounded-full text-xs lg:text-sm font-medium  
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-red-400 to-purple-500 text-white shadow-lg shadow-red-400/20' 
                  : 'text-gray-400 hover:bg-black/60'
                }`}
            >
              <span className="text-base lg:text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      

      {/* Content Sections */}
      <div className="relative">
        {/* Skills Section */}
        <div className={`  duration-300 ${activeTab === 'skills' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
          {/* Your existing skills content */}
          {/* Web Development Skills */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Web Development
              </h2>

              {/* Core Elements */}
              <div className="space-y-6">
                <h3 className="text-lg text-gray-400 font-medium">Core Elements</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.webDevelopment.core.map((skill) => (
                    <div key={skill.name} className="bg-white/5 backdrop-blur-xl border border-white/10 group relative flex items-center gap-4 p-4 rounded-xl  hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-red-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur "></div>
                        <img 
                          src={getSkillIcon(skill.icon)} 
                          alt={skill.name}
                          className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-6 mt-12">
                <h3 className="text-lg text-gray-400 font-medium">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.webDevelopment.tools.map((skill) => (
                    <div key={skill.name} className="bg-white/5 backdrop-blur-xl border border-white/10 group relative flex items-center gap-4 p-4 rounded-xl  hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-red-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur "></div>
                        <img 
                          src={getSkillIcon(skill.icon)} 
                          alt={skill.name}
                          className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Graphic Design Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Graphic Design
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.design.map((skill) => (
                  <div key={skill.name} className="bg-white/5 backdrop-blur-xl border border-white/10 group relative flex items-center gap-4 p-4 rounded-xl  hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                    <div className="relative"> 
                      <div className="absolute -inset-1 bg-gradient-to-br from-red-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur "></div>
                      <img 
                        src={getSkillIcon(skill.icon)} 
                        alt={skill.name}
                        className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* ======================== Experience Section =======================*/}
        <div className={`  duration-300 ${activeTab === 'experience' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
          <div className="grid gap-4">
            {experience.map((exp) => (
              <div key={exp.jobTitle} className="group relative flex flex-col sm:flex-row items-start gap-5 p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-gray-700 rounded-2xl  hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
              {/* Hover indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-red-400/0 via-red-400/10 to-red-400/0 rounded-full  opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-red-400/20 to-purple-400/20 rounded-lg blur-sm group-hover:blur"></div>
                <Image 
                  src={exp.icon} 
                  alt={exp.jobTitle}
                  width={56}
                  height={56}
                  className="relative w-14 h-14 p-2 bg-black/50 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                    {exp.jobTitle}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-700 hidden sm:block"></div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      Active
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  {exp.institute}
                </p>
                <p className="text-sm text-gray-400">
                    <span className="text-gray-500">Duration:</span> {exp.jobDuration}
                  </p>
                
                {/* Responsibilities Section */}
                <div className="pt-3 border-t border-gray-800">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-3 space-y-2">
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1.5">Technologies:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-gray-800/50 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* ======================== Education Section ========================= */}
        <div className={`  duration-300 ${activeTab === 'education' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div key={edu.certificate} className="group relative flex flex-col sm:flex-row items-start gap-5 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
              {/* Hover indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-red-400/0 via-red-400/10 to-red-400/0 rounded-full  opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-red-400/20 to-purple-400/20 rounded-lg blur-sm group-hover:blur"></div>
                <Image 
                  src={edu.icon} 
                  alt={edu.certificate}
                  width={56}
                  height={56}
                  className="relative w-14 h-14 p-2 bg-black/50 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-2 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                    {edu.certificate}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-700 hidden sm:block"></div>
                    <span className="text-sm text-gray-400 font-medium">{edu.passingYear}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  {edu.institute}
                </p>
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 rounded-full border border-gray-800 transition-colors duration-300 hover:border-gray-700">
                    Business Studies
                  </span>
                  <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 rounded-full border border-gray-800 transition-colors duration-300 hover:border-gray-700">
                    Education
                  </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SkillPage;