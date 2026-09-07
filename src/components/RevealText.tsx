import { motion } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className, delay = 0 }: RevealTextProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ amount: 0.1, once: false }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};