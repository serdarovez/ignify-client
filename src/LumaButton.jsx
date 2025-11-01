import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LumaButton({ label = "Get Started" }) {
  const [particles, setParticles] = useState([]);

  // generate subtle particles
  useEffect(() => {
    const arr = Array.from({ length: 12 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    }));
    setParticles(arr);
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-8 py-3 rounded-full cursor-pointer overflow-hidden text-white font-medium flex border-0 items-center gap-2 select-none"
      style={{
        padding: "12px 24px",
        backgroundColor: "rgba(15,15,15,1)",
        boxShadow: "0 0 8px rgba(0,255,200,0.1)",
      }}
    >
      {/* rotating glow border */}
      <motion.span
        className="absolute inset-[-2px] text-2hite rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0,255,200,0.3), rgba(255,255,255,0.1), rgba(0,255,200,0.3))",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      {/* inner dark layer */}
      <span className="absolute inset-[2px] rounded-full bg-[#0d0d0d]" />



      {/* button content */}
      <span className="relative z-30 flex  text-[30px] items-center gap-2" style={{color:"white"}}>
        {/* Framer acorn icon */}
        {label}
      </span>
    </motion.button>
  );
}
