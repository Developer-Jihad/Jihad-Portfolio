import Image from "next/image";
import { Inter } from "next/font/google";

import img from "@/public/My Profile.jpg";
const inter = Inter({ subsets: ["latin"], weight: "400" });

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-1 bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text  drop-shadow-lg">
        About Me
      </h1>
      <p className="text-gray-300 pb-5 text-center border-b font-light">
        {`السلام عليكم ورحمة الله وبركاته . Thank you for Exploring my Web Portfolio. Feel free to connect with me.`}
      </p>
      <div className="md:flex gap-10 my-10 items-center">
        <Image
          className="rounded-3xl order-last w-full md:w-2/5 transition duration-300 ease-in-out hover:filter hover:grayscale"
          src={img}
          alt="My Profile Picture"
          // placeholder="blur"
          width={1000}
          height={1000}
        />
        <div className="px-3 sm:px-0">
          <h1 className="text-2xl py-7 text-red-400">
            Hi, My name is Md. Jihad Hossain!
          </h1>

          <p className={`${inter.className} font-light text-justify text-gray-300`}>
            I am a Front-End Web Developer with a strong foundation in
            JavaScript, React, and proficient in Raw CSS, Tailwind, and
            Bootstrap with a background in Graphic Design Skills.
            <br />
            <br />I can create Pixel-perfect and Responsive user interfaces for
            all kinds of devices. Whether {`it's`} developing dynamic and
            interactive web applications or refining the user experience, I am
            dedicated to staying at the forefront of technology trends and
            continuously expanding my skill sets.
            <br />
            <br />
            Actually, I am very passionate about technology. {`that's`} why I
            have come to this Profession despite of my study in Business
            Studies. But the interesting thing is, now I can connect both my
            study and interest in a frame. Because Every business needs to
            connect technology in this dynamic world. And I might be the right
            person to do this task Confidently, Ing-Sa-Allah.
            <br />
            <br />
            {`Yeah! That's enough for Now. Thank you so much.`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
