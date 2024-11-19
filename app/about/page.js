import Image from "next/image";
import { Inter } from "next/font/google";
import img from "@/public/My Profile.jpg";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const skills = [
  { category: "Frontend", items: ["JavaScript", "React.js", "Next.js", "TypeScript"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS3", "Bootstrap", "SCSS"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code", "Adobe XD"] },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-2 py-7 md:py-12  relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white/70 text-sm">Available for new opportunities</span>
          </div>
          <h1 className="text-gray-400 text-5xl md:text-7xl font-bold mb-6">
            About
            <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> Me</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            السلام عليكم ورحمة الله وبركاته
            <br />
            Thank you for exploring my portfolio. Let&apos;s create something amazing together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative">
              <Image
                className="rounded-3xl w-full object-cover aspect-[4/5] group-hover:grayscale transition duration-500"
                src={img}
                alt="Md. Jihad Hossain"
                placeholder="blur"
                priority
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
                Hi, I&apos;m Md. Jihad Hossain
              </h2>
              <div className={`${inter.className} space-y-4 text-white/70 leading-relaxed`}>
                <p>
                  I&apos;m a Front-End Web Developer specializing in creating exceptional digital experiences. With a strong foundation in JavaScript and React, I bring designs to life with pixel-perfect precision and responsive functionality.
                </p>
                <p>
                  My journey is unique – coming from a Business Studies background, I&apos;ve merged my analytical mindset with my passion for technology. This combination allows me to understand both the technical and business aspects of web development, creating solutions that not only look great but also drive results.
                </p>
                <p>
                  I believe in continuous learning and staying ahead of technology trends, ensuring that I can provide cutting-edge solutions for modern web challenges.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Technical Expertise</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-medium text-white/40 mb-3">{skillGroup.category}</h4>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm
                            hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex gap-4">
              <a
                href="/contact"
                className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-red-400 
                  text-white font-medium text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Get in Touch</span>
              </a>
              <a
                href="/projects"
                className="flex-1 py-4 rounded-2xl bg-white/5 text-white font-medium text-center 
                  border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
