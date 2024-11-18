import { SkillsCard, EducationCard, ExperienceCard } from "../components/QualificationCards";
import nextJs from "@/public/icons/skill-icons/nextjs.png";
import react from "@/public/icons/skill-icons/react.png";
import vitejs from "@/public/icons/skill-icons/vite.png";
import javaScript from "@/public/icons/skill-icons/javaScript.png";
import typescript from "@/public/icons/skill-icons/typescript.png";
import tailwind from "@/public/icons/skill-icons/tailwind.png";
import bootstrap from "@/public/icons/skill-icons/bootstrap.png";
import css from "@/public/icons/skill-icons/css.png";
import html from "@/public/icons/skill-icons/html.png";
import nodejs from "@/public/icons/skill-icons/nodejs.png";
import express from "@/public/icons/skill-icons/express.png";
import mongodb from "@/public/icons/skill-icons/mongodb-logo.png";
import firebase from "@/public/icons/skill-icons/firebase.png";
import figma from "@/public/icons/skill-icons/figma-logo.png";
import vsCode from "@/public/icons/skill-icons/vsCode.png";
import vercel from "@/public/icons/skill-icons/vercel.png";
import netlify from "@/public/icons/skill-icons/netlify.png";
import illustrator from "@/public/icons/skill-icons/illustrator.png";
import photoshop from "@/public/icons/skill-icons/photoshop.png";
import canva from "@/public/icons/skill-icons/canva-logo.png";
import word from "@/public/icons/skill-icons/word.png";
import excel from "@/public/icons/skill-icons/excel.png";
import powerpoint from "@/public/icons/skill-icons/powerpoint.png";
import notion from "@/public/icons/skill-icons/notion.png";
import redux from "@/public/icons/skill-icons/redux.png";
import github from "@/public/icons/skill-icons/github.png";
import git from "@/public/icons/skill-icons/git.png";
import postman from "@/public/icons/skill-icons/postman.png";
import framer from "@/public/icons/skill-icons/framer-motion.png";
import antDesign from "@/public/icons/skill-icons/ant-design.png";
import mui from "@/public/icons/skill-icons/mui.png";
import axios from "@/public/icons/skill-icons/axios.png";
import docs from "@/public/icons/skill-icons/google-docs.png";
import sheets from "@/public/icons/skill-icons/google-sheets.png";
import slides from "@/public/icons/skill-icons/google-slides.png";
import work from "@/public/icons/work.png";
import study from "@/public/icons/school.png";
import Image from "next/image";

const SkillPage = () => {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-3 bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text  drop-shadow-lg">
        Qualifications
      </h1>
      <p className="text-gray-300 text-center font-light">
        I am happy to share my skills and Knowledge to make Positive change by
        Connecting with Others.
      </p>
      <br />
      <div className="">
        <div className="flex justify-center my-3">
          <h1 className="text-[18px] px-10 py-1  rounded-full sm:text-[24px] text-center bg-red-400 text-white z-10 font-medium">
            MY SKILLS
          </h1>
        </div>
        <hr className="relative bottom-7 sm:bottom-9"></hr>
        <br />
        <h1 className="text-2xl sm:text-3xl md:text-3xl text-red-400 mb-3">
          Web Development
        </h1>
        <div>
          <h2 className="text-gray-300">Core Elements: </h2>
          <div className="my-3 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            <SkillsCard img={nextJs} text="Next Js"></SkillsCard>
            <SkillsCard img={vitejs} text="Vite"></SkillsCard>
            <SkillsCard img={react} text="React Js"></SkillsCard>
            <SkillsCard img={redux} text="Redux"></SkillsCard>
            <SkillsCard img={javaScript} text="JavaScript"></SkillsCard>
            <SkillsCard img={typescript} text="TypeScript"></SkillsCard>
            <SkillsCard img={mui} text="Material UI"></SkillsCard>
            <SkillsCard img={tailwind} text="Tailwind"></SkillsCard>
            <SkillsCard img={bootstrap} text="Bootstrap"></SkillsCard>
            <SkillsCard img={css} text="CSS"></SkillsCard>
            <SkillsCard img={html} text="HTML"></SkillsCard>
          </div>
        </div>
        <div>
          <h2 className="text-gray-300">Tools: </h2>
          <div className="my-3 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {/* <SkillsCard img={redux} text="Redux"></SkillsCard> */}
            <SkillsCard img={nodejs} text="Node Js"></SkillsCard>
            <SkillsCard img={express} text="Express Js"></SkillsCard>
            <SkillsCard img={mongodb} text="Mongo DB"></SkillsCard>
            <SkillsCard img={firebase} text="Firebase"></SkillsCard>
            <SkillsCard img={figma} text="Figma"></SkillsCard>
            {/* <SkillsCard img={vsCode} text="Vs Code"></SkillsCard> */}
            <SkillsCard img={github} text="Github"></SkillsCard>
            <SkillsCard img={git} text="Git"></SkillsCard>
            {/* <SkillsCard img={postman} text="Postman"></SkillsCard> */}
            {/* <SkillsCard img={antDesign} text="Ant Design Logo"></SkillsCard> */}
            {/* <SkillsCard img={mui} text="Material Ui"></SkillsCard> */}
            {/* <SkillsCard img={framer} text="Framer Motion"></SkillsCard> */}
            {/* <SkillsCard img={axios} text="Axios"></SkillsCard> */}
            {/* <SkillsCard img={vercel} text="Vercel"></SkillsCard>
            <SkillsCard img={netlify} text="Netlify"></SkillsCard> */}
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl mt-14 md:text-3xl text-red-400 pb-3">
            Graphic Design
          </h1>
          <div className="my-3   grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            <SkillsCard img={illustrator} text="Illustrator"></SkillsCard>
            <SkillsCard img={photoshop} text="Photoshop"></SkillsCard>
            <SkillsCard img={canva} text="Canva"></SkillsCard>
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl mt-14 md:text-3xl text-red-400 pb-3">
            Office & Productivity
          </h1>
          <div className="my-3 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            <SkillsCard img={word} text="Microsoft Word"></SkillsCard>
            <SkillsCard img={excel} text="Microsoft Excel"></SkillsCard>
            <SkillsCard
              img={powerpoint}
              text="Microsoft Powerpoint"
            ></SkillsCard>
            <SkillsCard img={docs} text="Google Docs"></SkillsCard>
            <SkillsCard img={sheets} text="Google Sheets"></SkillsCard>
            {/* <SkillsCard img={slides} text="Google Slides"></SkillsCard> */}
            <SkillsCard img={notion} text="Notion"></SkillsCard>
          </div>
        </div>
        {/* ===================== Experience Starts From Here ======================== */}
        <div className="flex justify-center mt-14 mb-5">
          <h1 className="text-[18px] px-10 py-1  rounded-full sm:text-[24px] text-center bg-red-400 text-white z-10 font-medium">
            EXPERIENCE
          </h1>
        </div>
        <hr className="relative bottom-9 sm:bottom-11"></hr>
        <br />
        
        <ExperienceCard img={work} jobTitle="Assistant Web-Development Trainer" institute="As-Sunnah Skill Development Istitute" jobDuration="January, 2023 to Present"></ExperienceCard>

        {/* ===================== Education Starts From Here ======================== */}
        <div className="flex justify-center mt-14 mb-5">
          <h1 className="text-[18px] px-10 py-1  rounded-full sm:text-[24px] text-center bg-red-400 text-white z-10 font-medium">
            EDUCATION
          </h1>
        </div>
        <hr className="relative bottom-9 sm:bottom-11"></hr>
        <br />
        
        <EducationCard img={study} certificate="SSC - Business Studies" institute="Lakshmipur Paura Shahid Smrity Academy" passingYear="2015"></EducationCard>
        <EducationCard img={study} certificate="HSC - Business Studies" institute="Lakshmipur Paura Ideal College" passingYear="2017"></EducationCard>
        <EducationCard img={study} certificate="BBA in Accounting" institute="Lakshmipur Gov't College" passingYear="2023"></EducationCard>   
        <br />
      </div>
    </div>
  );
};
export default SkillPage;
