/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { educational, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Career Commits.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`career-${index}`}
              contentStyle={{
                background: "rgba(40, 40, 70, 0.55)",
                color: "#fff",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                borderRadius: "24px",
                padding: "32px 28px 28px 28px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #7f5cff" }}
              date={<span className="font-semibold text-[#b3b3ff] text-[16px]">{experience.date}</span>}
              iconStyle={{ background: "linear-gradient(135deg, #7f5cff 60%, #00cea8 100%)", boxShadow: "0 4px 16px #7f5cff55" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[70%] h-[70%] object-contain rounded-full border-4 border-white/30 shadow-lg"
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-1">
                <span className="inline-block px-3 py-1 mb-2 rounded-full bg-gradient-to-r from-[#7f5cff] to-[#00cea8] text-white text-xs font-bold tracking-widest shadow-md uppercase w-fit">
                  {experience.title.split(" ")[0]}
                </span>
                <h3 className="text-white text-[22px] font-extrabold leading-tight mb-1">{experience.title}</h3>
                <p className="text-[#b3b3ff] text-[15px] font-semibold mb-2">{experience.company_name}</p>
                <ul className="mt-3 list-disc ml-5 space-y-2">
                  {experience.points.map((point, idx) => (
                    <li
                      key={`career-point-${index}-${idx}`}
                      className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
<br />
<br />
<br />
<br />


   <p className={`${styles.sectionSubText} text-center`}>
          What I have studied so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic Commits.
        </h2>

      {/* Modernized Academic Card */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educational.map((experience, index) => (
            <VerticalTimelineElement
              key={`academic-${index}`}
              contentStyle={{
                background: "rgba(40, 40, 70, 0.55)",
                color: "#fff",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                borderRadius: "24px",
                padding: "32px 28px 28px 28px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #7f5cff" }}
              date={<span className="font-semibold text-[#b3b3ff] text-[16px]">{experience.date}</span>}
              iconStyle={{ background: "linear-gradient(135deg, #7f5cff 60%, #00cea8 100%)", boxShadow: "0 4px 16px #7f5cff55" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[70%] h-[70%] object-contain rounded-full border-4 border-white/30 shadow-lg"
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-1">
                <span className="inline-block px-3 py-1 mb-2 rounded-full bg-gradient-to-r from-[#7f5cff] to-[#00cea8] text-white text-xs font-bold tracking-widest shadow-md uppercase w-fit">
                  {experience.title.split(" ")[0]}
                </span>
                <h3 className="text-white text-[22px] font-extrabold leading-tight mb-1">{experience.title}</h3>
                <p className="text-[#b3b3ff] text-[15px] font-semibold mb-2">{experience.company_name}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
