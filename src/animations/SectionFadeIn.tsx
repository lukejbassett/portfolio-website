import { motion, useInView } from "framer-motion";
import React from "react";

type FadeInProps = {
  children: React.ReactNode;
};

export const SectionFadeIn = ({ children }: FadeInProps) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
