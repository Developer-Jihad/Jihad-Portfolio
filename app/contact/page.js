import { Lora } from "next/font/google";
import Image from "next/image";
import gmail from "@/public/icons/contact-icons/Gmail.png";
import discord from "@/public/icons/contact-icons/Discord.png";
import linkedIn from "@/public/icons/contact-icons/Linked-In.png";
import telegram from "@/public/icons/contact-icons/Telegram.png";
import twitter from "@/public/icons/contact-icons/Twitter.png";
import whatsapp from "@/public/icons/contact-icons/Whatsapp.png";
import messenger from "@/public/icons/contact-icons/Messenger.png";
import Link from "next/link";
const lora = Lora({ subsets: ["latin"], weight: "400" });

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-1 bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text  drop-shadow-lg">
        Contact Me
      </h1>
      <p className="text-gray-300 pb-5 border-b font-light text-center mb-10">
        Feel free to reach out for discussions on web development, design, or
        anything related to the ever-evolving world of technology.
      </p>

      <div className="min-h-[calc(50vh)] flex items-center">
        <div className="flex flex-col md:flex-row justify-evenly w-full items-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex gap-14 my-6">
              <Link href="https://wa.me/8801303417316" target="_blank">
                <Image
                  class=" hover:drop-shadow-[0px_0px_15px_rgba(38,212,106,1)] hover:scale-110 transition-all duration-200"
                  src={whatsapp}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/developer-jihad/"
                target="_blank"
              >
                <Image
                  class=" hover:drop-shadow-[0px_0px_15px_rgba(1,103,203,1)] hover:scale-110 transition-all duration-200"
                  src={linkedIn}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex gap-14 my-6">
              <Link href="https://twitter.com/Jihad_lxp" target="_blank">
                <Image
                  class=" hover:drop-shadow-[0px_0px_20px_rgba(28,155,240,1)] hover:scale-110 transition-all duration-200"
                  src={twitter}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="mailto:jihadhossen1999@gmail.com" target="_blank">
                <Image
                  class=" hover:drop-shadow-[0px_0px_20px_rgba(235,68,54,1)] hover:scale-110 transition-all duration-200"
                  src={gmail}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="https://t.me/Jihad_lxp" target="_blank">
                <Image
                  class=" hover:drop-shadow-[0px_0px_20px_rgba(41,171,237,1)] hover:scale-110 transition-all duration-200"
                  src={telegram}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex gap-14 my-6">
              <Link
                href="https://discordapp.com/users/jihad4364"
                target="_blank"
              >
                <Image
                  class=" hover:drop-shadow-[0px_0px_20px_rgba(89,104,243,1)] hover:scale-110 transition-all duration-200"
                  src={discord}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                  // jihad4364
                />
              </Link>
              <Link href="https://www.facebook.com/Jihad.lxp" target="_blank">
                <Image
                  class=" hover:drop-shadow-[0px_0px_20px_rgba(181,59,233,1)] hover:scale-110 transition-all duration-200"
                  src={messenger}
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="p-7 bg-black/30 border border-gray-700 rounded-xl my-10">
            <div
              className={` font-light space-y-3 border-l-red-400 border-l-4 pl-5 py-3 `}
            >
              <p className="text-gray-300">
                <span className="text-red-400 font-bold">Phone:</span> 01303-417
                316
              </p>
              <p className="text-gray-300">
                <span className="text-red-400 font-bold">Email:</span>{" "}
                jihadhossen1999@gmail.com
              </p>

              <p className="text-gray-300">
                <span className="text-red-400 font-bold">Facebook:</span>{" "}
                www.facebook.com/jihad.lxp
              </p>
              <p className="text-gray-300">
                <span className="text-red-400 font-bold">LinkedIn:</span>{" "}
                www.linkedin.com/in/developer-jihad/
              </p>
              <p className="text-gray-300">
                  <span className="text-red-400 font-bold">Location:</span>{" "}
                Lakshmipur in Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
