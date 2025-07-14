


/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Replace these with your actual image and resume link
const resumeDetails = {
  image: "https://github.com/Priyanshu-Bej/Priyanshu-Pritam-Bej-Resume/blob/main/Priyanshu_Pritam_Bej_Resume_Thumbnail.png?raw=true", // Replace with your resume image path
  resume_link: "https://drive.google.com/file/d/1Th8vxK2BKSmp8kA2V2Fj6rJ8BQVpBB6L/view?usp=sharing", //New Updaeted Resume
  title: "Inspect Resume",
  description:
    "Click to view my resume.",
};

const ResumeCard = ({ image, resume_link, title, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="relative group"
    >
      <a href={resume_link} target="_blank" rel="noopener noreferrer">
        <div
          className="bg-[rgba(40,40,70,0.55)] backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-0 sm:w-[380px] w-full cursor-pointer relative overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-3xl"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none z-0 border-2 border-transparent bg-gradient-to-tr from-[#7f5cff]/60 via-transparent to-[#00cea8]/60 animate-pulse" style={{filter:'blur(2px)'}} />

          <div className="relative w-full h-[230px] z-10">
            <img
              src={image}
              alt="resume_image"
              className="w-full h-full object-cover rounded-2xl border-4 border-white/10 shadow-lg"
            />
          </div>

          <div className="mt-5 px-6 pb-6 pt-2 z-10 relative flex flex-col items-center">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-gradient-to-r from-[#7f5cff] to-[#00cea8] text-white text-xs font-bold tracking-widest shadow-md uppercase w-fit">
              {title.split(" ")[0]}
            </span>
            <h3 className="text-white font-extrabold text-[24px] mb-1 text-center drop-shadow-lg">{title}</h3>
            <p className="text-[#b3b3ff] text-[15px] font-medium mb-4 text-center">{description}</p>
            <a
              href={resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-[#7f5cff] to-[#00cea8] text-white font-bold shadow-lg hover:from-[#00cea8] hover:to-[#7f5cff] transition-all duration-200 text-lg mt-2"
            >
              View Resume
            </a>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Professional Snapshot</p>
        <h2 className={`${styles.sectionHeadText}`}>Resume.init()</h2>
      </motion.div>

      <div className="w-full flex mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Ready to explore my professional journey? Click the card below to view
          my resume and dive into my skills, experience, and more!
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center">
        <ResumeCard {...resumeDetails} />
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "");
