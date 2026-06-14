import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const PageContainer = ({ children, className }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    className={`relative w-full ${className ?? ""}`}
  >
    {children}
  </motion.div>
);

export default PageContainer;
