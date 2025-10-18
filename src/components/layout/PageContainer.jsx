import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(6px)" },
};

const PageContainer = ({ children, className }) => (
  <motion.main
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className={`relative mx-auto flex w-full max-w-[90rem] flex-col gap-20 px-4 pb-24 pt-28 sm:px-6 lg:px-10 ${
      className ?? ""
    }`}
  >
    {children}
  </motion.main>
);

export default PageContainer;
