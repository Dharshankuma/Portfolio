import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // start slightly down
      whileInView={{ opacity: 1, y: 0 }} // move up into place
      exit={{ opacity: 0, y: -60 }} // when leaving (bottom → top)
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: false, // IMPORTANT: allows animation on scroll up & down
        amount: 0.2, // triggers when 20% visible
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
