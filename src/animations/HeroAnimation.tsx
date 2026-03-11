import { motion, useInView } from "framer-motion";
import * as React from "react";

export const HeroAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.h1
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0, y: 120 }}
      animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="text-8xl font-inter font-semibold leading-28 "
    >
      {children}
    </motion.h1>
  );
};
