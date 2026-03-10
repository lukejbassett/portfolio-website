import { motion } from "framer-motion";

export const NextSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToNext}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      whileHover={{ rotate: 360 }}
      transition={{
        opacity: { duration: 1, delay: 1 },
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: { duration: 0.6 },
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.button>
  );
};
