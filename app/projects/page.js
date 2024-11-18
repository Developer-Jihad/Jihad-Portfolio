import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";
import code from "@/public/icons/code.png";
import view from "@/public/icons/view.png";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-1 bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text  drop-shadow-lg">
        My Projects
      </h1>
      <p className="text-gray-300 mb-5 text-center font-light">
        My Created Best Projects are shown here that makes my skills stronger.
      </p>
      <hr />
      <div className=" my-7 grid sm:grid-cols-2 md:grid-cols-3 gap-7 ">
        <div className=" bg-black bg-opacity-50 border border-red-200 rounded-xl relative overflow-hidden">
          <div className="relative flex items-center justify-center ">
            <iframe
              width="560"
              height="250"
              src="https://www.youtube.com/embed/wfeE7OZdrfQ?si=itNhhlHYtVbNe6qG"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center justify-between text-xl my-2 mx-3">
            <h3 className="text-gray-300">Hadith App</h3>
            <div className="flex gap-3">
              <Link
                className="p-1 px-2 hover:bg-red-400 rounded-full"
                href="https://ird-hadis-nextjs-app.vercel.app/"
                target="_blank"
              >
                <Image src={view} alt="Github Logo" width={28} height={35} />
              </Link>
              <Link
                className="p-1 px-2 hover:bg-red-400 rounded-full"
                href="https://github.com/Developer-Jihad/ird-hadis-nextjs-app"
                target="_blank"
              >
                <Image src={code} alt="Github Logo" width={28} height={35} />
              </Link>
            </div>
          </div>
          <p className=" bg-red-400 text-white px-4 py-1 rounded-full absolute top-2 left-2 drop-shadow-lg">
            Next Js | Tailwind
          </p>
        </div>

        <ProjectCard
          img="https://i.ibb.co/CQgwDLR/halal-jibika.jpg"
          codeLink="https://github.com/Developer-Jihad/Halal-Jibika-MERN-Stack"
          liveLink="https://halal-jibika-mern-stack.vercel.app/"
          name="Halal Jibika - Find Your Job"
          technology="MERN Stack | Firebase Auth"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/sm88m9R/portfolio.jpg"
          codeLink="https://github.com/Developer-Jihad/Jihad-Portfolio"
          liveLink="https://jihad-portfolio-zeta.vercel.app/"
          name="Protfolio Website"
          technology="Next Js | Tailwind"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/SwrJm6d/todo-app.jpg"
          codeLink="https://github.com/Developer-Jihad/todo-app-with-useReducer-contextApi"
          liveLink="https://todo-app-with-use-reducer-context-api.vercel.app/"
          name="Task Management App"
          technology="React Js | Raw CSS"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/VmW5dBC/islamic-education.jpg"
          codeLink="https://github.com/Developer-Jihad/Islamic-Education"
          liveLink="https://islamic-education.vercel.app/"
          name="Islamic Education"
          technology="React Js | Bootstrap"
        ></ProjectCard>

        <ProjectCard
          img="https://i.ibb.co/JzFRZ9p/bank-website.jpg"
          codeLink="https://github.com/Developer-Jihad/JavaScript-Banksite"
          liveLink="https://java-script-banksite.vercel.app/"
          name="Bank Website"
          technology="JavaScript | Raw CSS"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/1ZhcrV3/find-books.jpg"
          codeLink="https://github.com/Developer-Jihad/bookArchive"
          liveLink="https://book-archive-beryl.vercel.app/"
          name="Find Books"
          technology="JavaScript | Raw CSS"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/d0H5qC7/nike-fashion.jpg"
          codeLink="https://github.com/Developer-Jihad/Nike-Shoes"
          liveLink="https://nike-shoes-lilac.vercel.app/"
          name="Nike Fashion"
          technology="HTML | Bootstrap"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/209XLcb/panda-commerce.jpg"
          codeLink="https://github.com/Developer-Jihad/Panda-Commerce"
          liveLink="https://panda-commerce-liard.vercel.app/"
          name="Panda Commerce"
          technology="HTML | Bootstrap"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/gvpmWrC/penguin-fashion.jpg"
          codeLink="https://github.com/Developer-Jihad/Penguin-Fashion"
          liveLink="https://penguin-fashion-five.vercel.app/"
          name="Penguin Fashion"
          technology="HTML | Bootstrap"
        ></ProjectCard>

        <ProjectCard
          img="https://i.ibb.co/g6qCzt9/honda-cbr.jpg"
          codeLink="https://github.com/Developer-Jihad/Honda-CBR"
          liveLink="https://honda-cbr-nine.vercel.app/"
          name="Honda CBR"
          technology="HTML | Bootsrap "
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/m07yrmt/leader-board.jpg"
          codeLink="https://github.com/Developer-Jihad/Leader-Board"
          liveLink="https://leader-board-gold.vercel.app/"
          name="Leader Board"
          technology="HTML | CSS"
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/KVHrnDt/cosmetics-website.jpg"
          codeLink="https://github.com/Developer-Jihad/cosmetics-ecommerce"
          liveLink="https://cosmetics-ecommerce-gilt.vercel.app/"
          name="Cosmetics Website"
          technology="HTML | CSS "
        ></ProjectCard>
        <ProjectCard
          img="https://i.ibb.co/YL1BHpW/sport-news.jpg"
          codeLink="https://github.com/Developer-Jihad/Sports-News"
          liveLink="https://sports-news-navy.vercel.app/"
          name="Sports News"
          technology="HTML | CSS "
        ></ProjectCard>
        {/* <ProjectCard
          img="https://i.ibb.co/ccKYZ7z/fifa-world-cup.jpg"
          codeLink="https://github.com/Developer-Jihad/FIFA-World-Cup"
          liveLink="https://fifa-world-cup-nu.vercel.app/"
          name="Fifa World Cup"
          technology="HTML | CSS "
        ></ProjectCard> */}
      </div>
    </div>
  );
};
export default ProjectsPage;
