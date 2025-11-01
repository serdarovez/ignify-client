import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function SpotlightText() {
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add smoothing
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 15 });

  // Create reactive CSS string for background
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,200,0.9), transparent 120px)`
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="w-full flex-1  h-full    text-white  ">
      <motion.h1
        className=" w-3/4 font-bold  text-transparent  bg-clip-text  select-none relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          color: "rgba(255,255,255,0.08)",
          backgroundImage: isHovered ? background : "none",
          WebkitBackgroundClip: "text",
          backgroundRepeat: "no-repeat",
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="text-[7vw]">Ignify</div>
        <div className="mt-5 text-[4vw] ">
          The all-in-one platform for booking, payments, and community.
          Launching soon.
        </div>
      </motion.h1>
    </div>
  );
}
