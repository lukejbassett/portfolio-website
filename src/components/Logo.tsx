import { motion } from "framer-motion";

type LogoProps = {
  name: string;
};

export function Logo({ name }: LogoProps) {
  return (
    <span className="flex gap-2 text-4xl font-semibold">
      {name.split("").map((letter, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -2, 0] }}
          whileHover={{
            y: -10,
            rotate: [-8, 8, -6, 6, 0],
            scale: 1.15,
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            },
            rotate: { duration: 0.4 },
            scale: { duration: 0.2 },
          }}
          className="inline-block cursor-default hover:text-accent hover:transition-colors"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
