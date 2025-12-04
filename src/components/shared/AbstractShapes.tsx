import { motion } from "framer-motion";

interface AbstractShapesProps {
  variant?: "hero" | "section" | "minimal";
}

export function AbstractShapes({ variant = "hero" }: AbstractShapesProps) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent blur-3xl animate-pulse-glow"
        />
        
        {/* Secondary orb */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-glow-teal/15 via-primary/10 to-transparent blur-3xl animate-float-slow"
        />

        {/* Geometric shapes */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 0.6, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-[15%] w-20 h-20 border border-primary/30 rounded-xl rotate-12 animate-float"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-1/2 right-[10%] w-32 h-32 border border-secondary/20 rounded-full animate-float-delayed"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-lg rotate-45 animate-float-slow"
        />

        {/* DNA-like helix dots */}
        <div className="absolute right-[25%] top-1/4 flex flex-col gap-3">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 0.5, x: i % 2 === 0 ? 10 : -10 }}
              transition={{ 
                duration: 2, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-2 h-2 rounded-full bg-primary/50"
              style={{ marginLeft: i % 2 === 0 ? 0 : 20 }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
    </div>
  );
}
