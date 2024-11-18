import Image from "next/image";
import Link from "next/link";
import TypewriterAnimation from "./components/TypeAnimation";
import profilePicture from "@/public/Portfolio-Image.png";
import linkedIn from "@/public/icons/linkedIn.svg";
import facebook from "@/public/icons/facebook.svg";
import github from "@/public/icons/github.svg";
import behance from "@/public/icons/behance.svg";
import twitter from "@/public/icons/twitter.svg";
import send from "@/public/icons/send.png";
import downloads from "@/public/icons/downloads.png";

// Social media links for mobile view
const SocialLink = ({ href, icon, alt, width }) => (
  <Link href={href} target="_blank">
    <Image src={icon} alt={alt} width={width} height={30} />
  </Link>
);

// Action buttons
const ActionButton = ({ href, text, icon, target = "_self" }) => (
  <Link href={href} target={target}>
    <button className="px-5 sm:px-5 lg:px-6
                     py-2.5 sm:py-2.5 lg:py-3
                     text-sm sm:text-sm lg:text-base
                     bg-red-400 rounded-full transition-all duration-200
                     hover:drop-shadow-[0px_0px_10px_rgba(248,113,113,.5)]
                     active:scale-95">
      {text}
      <Image
        className="inline-block ml-2 sm:ml-2 
                  w-[16px] sm:w-[16px] lg:w-[18px]"
        src={icon}
        alt={`${text} icon`}
        width={20}
        height={30}
      />
    </button>
  </Link>
);

const ExperienceCard = ({ number, text }) => (
  <div className="flex flex-col items-center 
                  w-[97%] sm:w-auto
                  px-4 sm:px-5 lg:px-6
                  py-3 sm:py-2.5 lg:py-3
                  bg-gray-900/50 backdrop-blur-sm 
                  rounded-lg border border-gray-800/50">
    <span className="text-2xl sm:text-2xl lg:text-3xl font-bold 
                   bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 
                   text-transparent bg-clip-text">
      {number}+
    </span>
    <span className="text-sm sm:text-sm lg:text-base
                   text-gray-300 whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-[calc(90vh-60px)] h-full">
      <div className="h-full flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center 
                        gap-8 sm:gap-8 lg:gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-5 sm:space-y-5 lg:space-y-6
                          px-4 sm:px-0">
              {/* Heading */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
                             font-bold leading-tight">
                  Hello - I&apos;m
                </h1>
                <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
                             font-bold leading-tight
                             bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 
                             text-transparent bg-clip-text">
                  <TypewriterAnimation />
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-base lg:text-lg 
                          font-light text-gray-300
                          text-center lg:text-left">
                Front-End Web Developer | Graphic Designer
              </p>

              {/* Mobile Social Links */}
              <div className="sm:hidden">
                <div className="flex justify-center gap-6">
                  <SocialLink href="https://www.linkedin.com/in/developer-jihad/" icon={linkedIn} alt="LinkedIn" width={24} />
                  <SocialLink href="https://www.facebook.com/Jihad.lxp" icon={facebook} alt="Facebook" width={26} />
                  <SocialLink href="https://github.com/Developer-Jihad" icon={github} alt="Github" width={24} />
                  <SocialLink href="https://www.behance.net/jihadhossen" icon={behance} alt="Behance" width={24} />
                  <SocialLink href="https://twitter.com/Jihad_lxp" icon={twitter} alt="Twitter" width={20} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <ActionButton 
                  href="/contact" 
                  text="Contact Me" 
                  icon={send} 
                />
                <ActionButton 
                  href="https://drive.google.com/file/d/1HwHV1GCHfXIzXX3yjy2cTUpxc0IMMUtJ/view?usp=sharing" 
                  text="Download CV" 
                  icon={downloads} 
                  target="_blank"
                />
              </div>

              {/* Experience Cards */}
              <div className="flex flex-col sm:grid sm:grid-cols-3 
                            w-full
                            items-center
                            gap-4 sm:gap-3 md:gap-4 
                            pt-4 sm:pt-4 lg:pt-5">
                <ExperienceCard 
                  number="2" 
                  text="Years Experience"
                />
                <ExperienceCard 
                  number="20" 
                  text="Projects Completed"
                />
                <ExperienceCard 
                  number="10" 
                  text="Happy Clients"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end
                          -mx-4 sm:mx-0">
              <div className="w-full sm:w-[300px] md:w-[380px] lg:w-[90%]
                            px-4 sm:px-0">
                <div className="relative">
                  <Image
                    className="relative w-full h-auto
                              transition duration-300 ease-in-out hover:filter hover:grayscale"
                    src={profilePicture}
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
