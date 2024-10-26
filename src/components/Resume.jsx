


/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Replace these with your actual image and resume link
const resumeDetails = {
  image: "https://github.com/Priyanshu-Bej/Priyanshu-Pritam-Bej-Resume/blob/main/Priyanshu_Pritam_Bej_Resume_Thumbnail.png?raw=true", // Replace with your resume image path
  resume_link: "https://drive.google.com/file/d/1kDkVnTFTp0X3BzCZM9t-GH2AM1sPaIxl/view?usp=sharing", //New Updaeted Resume
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
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer relative"
        >
          {/* Left Arrow */}
          <div className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-[80px] h-[12px] bg-white rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

          {/* Right Arrow */}
          <div className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 w-[80px] h-[12px] bg-white -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="resume_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                <img
                  src="https://via.placeholder.com/20" // Replace with an icon or image relevant to your resume
                  alt="open resume"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div> */}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Tilt>
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
