"use client";

import Image from "next/image";
import Link from "next/link";
import home from "@/public/icons/home.svg";
import qualification from "@/public/icons/qualification.png";
import projects from "@/public/icons/projects.svg";
import user from "@/public/icons/user.svg";
import mail from "@/public/icons/email.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const NavLink = ({ href, icon, alt, tooltip, className = "" }) => (
    <div className={`relative flex items-center group ${className}`}>
      <Link
        href={href}
        className={`relative p-2.5 rounded-full
                   transition-all duration-300
                   ${
                     pathname === href
                       ? "bg-red-400/10 border border-red-400/50"
                       : "hover:bg-red-400/5 hover:border-red-400/30 border border-transparent"
                   }`}
      >
      {/* Background glow effect for active state */}
        {pathname === href && (
          <div className="absolute inset-0 bg-red-400/20 blur-md rounded-full"></div>
        )}

      {/* Icon */}
        <div className="relative">
          <Image
            className="w-[26px] sm:w-[28px]"
            src={icon}
            alt={alt}
            width={50}
            height={35}
          />
        </div>
      </Link>

      {/* Tooltip */}
      <div className="absolute left-[calc(100%+12px)] hidden sm:block pointer-events-none">
        <div
          className={`relative bg-gray-900/90 backdrop-blur-sm
                      px-3 py-1.5 rounded-full
                      border border-red-400/30
                      shadow-lg shadow-black/10
                      transform
                      opacity-0 -translate-x-2
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-200 ease-out`}
        >
          <span className="text-[13px] text-gray-200 font-medium whitespace-nowrap">
            {tooltip}
          </span>

          {/* Arrow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-[6px]
                        h-2 w-2 bg-gray-900/90 backdrop-blur-sm
                        border-l border-b border-red-400/30
                        rotate-45"
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-full md:w-auto">
      <nav className="flex justify-around md:flex-col items-center gap-3 md:gap-6
                     bg-black/30 backdrop-blur-md
                     px-2 py-2 md:py-20
                     md:rounded-full
                     border-t border-gray-700 md:border md:border-red-400/30">
        <NavLink 
          href="/about" 
          icon={user} 
          alt="About" 
          tooltip="About Me" 
          className="flex-1 md:flex-auto order-1 md:order-last"
        />
        <NavLink
          href="/qualification"
          icon={qualification}
          alt="Qualification"
          tooltip="Qualification"
          className="flex-1 md:flex-auto order-2"
        />
        <NavLink 
          href="/" 
          icon={home} 
          alt="Home" 
          tooltip="Home" 
          className="flex-1 md:flex-auto order-3 md:order-first"
        />
        <NavLink
          href="/projects"
          icon={projects}
          alt="Projects"
          tooltip="Projects"
          className="flex-1 md:flex-auto order-4"
        />
        <NavLink 
          href="/contact" 
          icon={mail} 
          alt="Contact" 
          tooltip="Contact" 
          className="flex-1 md:flex-auto order-5"
        />
      </nav>
    </div>
  );
};

export default Navbar;
