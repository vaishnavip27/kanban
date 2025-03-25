import { motion } from "framer-motion";

const LightRays = () => {
  return (
    <div className="absolute w-full h-screen  overflow-hidden flex items-center justify-center">
      {[...Array(5)].map((_, i) => {
        const delay = i * 0.7;
        const angle = (i - 2) * 15; 

        return (
          <motion.div
            key={i}
            className="absolute top-0 left-96 w-[50vw] h-full bg-gradient-to-b from-purple-700/15 to-transparent opacity-20"
            initial={{ opacity: 0, scaleY: 0.5 }}
            animate={{
              opacity: [0.1, 0.3, 0.09],
              scaleY: [0.5, 1.2, 0.5],
              rotate: [angle - 2, angle, angle + 2], 
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay,
            }}
            style={{
              transform: `translateX(-50%) rotate(${angle}deg)`,
              transformOrigin: "top center",
            }}
          />
        );
      })}
    </div>
  );
};

export default LightRays;
