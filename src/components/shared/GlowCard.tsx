import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "teal";
  delay?: number;
}

export function GlowCard({ children, className, glowColor = "primary", delay = 0 }: GlowCardProps) {
  const glowClasses = {
    primary: "hover:shadow-primary/20",
    secondary: "hover:shadow-secondary/20",
    teal: "hover:shadow-glow-teal/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "relative p-6 lg:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50",
        "transition-all duration-300",
        "hover:border-primary/30 hover:bg-card/70",
        `hover:shadow-xl ${glowClasses[glowColor]}`,
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
