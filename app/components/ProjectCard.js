import Image from "next/image";
import Link from "next/link";
import code from "@/public/icons/code.png";
import view from "@/public/icons/view.png";

const ProjectCard = ({ img, codeLink, liveLink, name, technology }) => {
  return (
    <div className="bg-black bg-opacity-50 border border-red-200 rounded-xl 
                    relative overflow-hidden w-full h-full">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="max-width: 500px"
          priority
        />
        <div className="absolute inset-0 bg-black flex items-center justify-center gap-7 
                      opacity-0 hover:opacity-70 transition-all">
          <Link
            className="bg-white bg-opacity-30 p-5 rounded-full shadow-lg 
                     hover:bg-opacity-50 transition-all"
            href={`${codeLink}`}
            target="_blank"
          >
            <Image 
              src={code} 
              alt="Github Logo" 
              width={28} 
              height={35}
              className="w-7 h-auto" 
            />
          </Link>
          <Link
            className="bg-white bg-opacity-30 p-5 rounded-full shadow-lg 
                     hover:bg-opacity-50 transition-all"
            href={`${liveLink}`}
            target="_blank"
          >
            <Image 
              src={view} 
              alt="Live View" 
              width={28} 
              height={35}
              className="w-7 h-auto" 
            />
          </Link>
        </div>
      </div>
      <h3 className="text-xl my-3 mx-3 text-gray-300">{name}</h3>
      <p className="bg-red-400 text-white px-4 py-1 rounded-full absolute top-2 left-2 
                  drop-shadow-lg text-sm">
        {technology}
      </p>
    </div>
  );
};

export default ProjectCard;
