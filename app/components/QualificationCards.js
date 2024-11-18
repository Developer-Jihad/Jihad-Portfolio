import Image from "next/image";
import work from "@/public/icons/work.png";
import study from "@/public/icons/school.png";

const SkillsCard = ({ img, text }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-5 p-3 sm:px-5 bg-black/30 border border-gray-700 rounded-xl ">
      <Image
        className="w-[35px] sm:w-[50px]"
        src={img}
        alt={text}
        width={50}
        height={50}
      />
      <h3 className="text-xl font-light text-gray-300 hidden sm:block">{text}</h3>
    </div>
  );
};

const ExperienceCard = ({ jobTitle, institute, jobDuration }) => {
  return (
    <div className=" p-5  bg-black/30 border border-gray-700 rounded-xl ">
          <div className="flex items-center gap-3 sm:gap-5">
            <Image
              className="w-[25px] sm:w-[70px]"
              src={work}
              alt="Experience"
              width={100}
              height={70}
            />
            <div className="">
              <h3 className="text-xl font-semibold text-gray-300">{jobTitle}</h3>
              <div className="hidden sm:block mt-2 space-y-2">
                <p className="text-gray-500">
                  <span className="text-gray-300">Institute:</span>{" "}
                  {institute}
                </p>
                <p className="text-gray-500">
                  <span className="text-gray-300">Year:</span>{" "}
                  {jobDuration}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden mt-2 space-y-2">
            <p className="text-gray-500">
              <span className="text-gray-300">Institute:</span>{" "}
              {institute}
            </p>
            <p className="text-gray-500">
              <span className="text-gray-300">Year:</span> {jobDuration}
            </p>
          </div>
        </div>
  );
};

const EducationCard = ({ certificate, institute, passingYear }) => {
  return (
    <div className=" p-5 mb-5 bg-black/30 border border-gray-700 rounded-xl ">
          <div className="flex items-center gap-3 sm:gap-5">
            <Image
              className="w-[25px] sm:w-[70px]"
              src={study}
              alt="Experience"
              width={100}
              height={70}
            />
            <div className="">
              <h3 className="text-xl font-semibold text-gray-300">{certificate}</h3>
              <div className="hidden sm:block mt-2 space-y-2">
                <p className="text-gray-500">
                  <span className="text-gray-300">
                    Institute:{" "}
                  </span>
                  {institute}
                </p>
                <p className="text-gray-500">
                  <span className="text-gray-300">
                    Passing Year:
                  </span>{" "}
                  {passingYear}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden mt-2 space-y-2">
            <p className="text-gray-500">
              <span className="text-gray-300">Institute:</span>
              {institute}
            </p>
            <p className="text-gray-500">
              <span className="text-gray-300">Passing Year:</span>{" "}
              {passingYear}
            </p>
          </div>
        </div>
  );
};

export { SkillsCard, ExperienceCard, EducationCard };
