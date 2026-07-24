import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1400; // Fast & minimal 1.4s load duration
    const intervalTime = 14;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return Math.floor(next);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] text-white select-none pointer-events-auto"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Simple Clean Percentage Counter */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight text-white">
          {count}<span className="text-amber-400 font-light">%</span>
        </h1>

        {/* Minimal Subtle Progress Bar */}
        <div className="w-36 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
