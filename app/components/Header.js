"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaBehance,
  FaXTwitter
} from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import mobileLogo from "@/public/jihad-mobile-logo.png";

const SocialLink = ({ href, icon: Icon, name }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center group"
  >
    <div className="flex items-center 
                    group-hover:border group-hover:border-salmon 
                    rounded-full transition-all duration-300 
                    bg-red-400/20">
      <div className="p-1.5 sm:p-2 mx-2 sm:mx-3">
        <Icon className="text-gray-300 text-[16px] sm:text-[18px] md:text-[20px]" />
      </div>
      <div className="w-0 overflow-hidden 
                    group-hover:w-[60px] sm:group-hover:w-[70px] md:group-hover:w-[80px] 
                    transition-all duration-300">
        <span className="text-gray-300 text-xs sm:text-sm whitespace-nowrap pr-2 sm:pr-3">
          {name}
        </span>
      </div>
    </div>
  </Link>
);

const Header = () => {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/gallery';

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/developer-jihad/",
      icon: FaLinkedinIn,
      name: "LinkedIn"
    },
    {
      href: "https://github.com/Developer-Jihad",
      icon: FaGithub,
      name: "Github"
    },
    {
      href: "https://www.behance.net/jihadhossen",
      icon: FaBehance,
      name: "Behance"
    },
    {
      href: "https://www.facebook.com/Jihad.lxp",
      icon: FaFacebookF,
      name: "Facebook"
    },
    {
      href: "https://twitter.com/Jihad_lxp",
      icon: FaXTwitter,
      name: "Twitter"
    }
  ];

  return (
    <header className="py-1 fixed top-0 left-0 right-0 z-50
                     backdrop-blur-md bg-black/30 
                     border-b border-gray-700">
      <div className="container mx-auto px-3 sm:px-4 md:px-5">
        <div className="h-[50px] sm:h-[55px] md:h-[60px] 
                      flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
          >
            <Image
              className="w-[80px] sm:w-[85px] md:w-[90px]"
              src={mobileLogo}
              alt="Logo"
              width={300}
              height={300}
              priority
            />
          </Link>

          {/* Social Links - Tablet & Desktop */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
          </div>

          {/* Gallery Icon */}
          <Link href="/gallery" className="px-4 py-2 rounded-full border border-red-400/50 hover:bg-red-400/20">
            <IoImages 
              className={`text-2xl transition-colors duration-200
                         ${isGalleryPage ? 'text-red-400' : 'text-gray-300'}`}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
