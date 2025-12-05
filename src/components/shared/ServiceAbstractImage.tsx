import { motion } from "framer-motion";

interface ServiceAbstractImageProps {
  type: string;
  className?: string;
}

export function ServiceAbstractImage({ type, className = "" }: ServiceAbstractImageProps) {
  const getImageContent = () => {
    switch (type) {
      case "rna":
        return (
          <>
            {/* RNA helix structure */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-32 h-32 border-4 border-dashed border-glow-gold/40 rounded-full" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-glow-gold/30 to-primary/20 rounded-full blur-xl" />
            </div>
            <svg className="w-24 h-24 relative z-10" viewBox="0 0 100 100">
              <motion.path
                d="M20,50 Q35,20 50,50 T80,50"
                stroke="hsl(var(--glow-gold))"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M20,50 Q35,80 50,50 T80,50"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </svg>
          </>
        );
      
      case "dna":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-glow-gold/20 rounded-full blur-2xl" />
            </div>
            <svg className="w-28 h-28 relative z-10" viewBox="0 0 100 100">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.g key={i}>
                  <motion.circle
                    cx={30 + i * 10}
                    cy={20 + i * 15}
                    r="4"
                    fill="hsl(var(--glow-gold))"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <motion.circle
                    cx={70 - i * 10}
                    cy={20 + i * 15}
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.1 }}
                  />
                  <motion.line
                    x1={30 + i * 10}
                    y1={20 + i * 15}
                    x2={70 - i * 10}
                    y2={20 + i * 15}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                </motion.g>
              ))}
            </svg>
          </>
        );
      
      case "singlecell":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-br from-glow-gold/20 to-secondary/20 rounded-full blur-2xl" />
            </div>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  background: i % 3 === 0 ? 'hsl(var(--glow-gold))' : i % 3 === 1 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                  left: `${20 + Math.cos(i * 30 * Math.PI / 180) * 35}%`,
                  top: `${20 + Math.sin(i * 30 * Math.PI / 180) * 35}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </>
        );
      
      case "network":
      case "multiomics":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-glow-gold/20 rounded-full blur-2xl" />
            </div>
            <svg className="w-32 h-32 relative z-10" viewBox="0 0 100 100">
              {/* Network nodes */}
              <motion.circle cx="50" cy="50" r="8" fill="hsl(var(--glow-gold))" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="25" cy="30" r="5" fill="hsl(var(--primary))" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.circle cx="75" cy="30" r="5" fill="hsl(var(--secondary))" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
              <motion.circle cx="25" cy="70" r="5" fill="hsl(var(--primary))" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
              <motion.circle cx="75" cy="70" r="5" fill="hsl(var(--secondary))" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
              {/* Connections */}
              <line x1="50" y1="50" x2="25" y2="30" stroke="hsl(var(--glow-gold) / 0.5)" strokeWidth="1" />
              <line x1="50" y1="50" x2="75" y2="30" stroke="hsl(var(--glow-gold) / 0.5)" strokeWidth="1" />
              <line x1="50" y1="50" x2="25" y2="70" stroke="hsl(var(--glow-gold) / 0.5)" strokeWidth="1" />
              <line x1="50" y1="50" x2="75" y2="70" stroke="hsl(var(--glow-gold) / 0.5)" strokeWidth="1" />
            </svg>
          </>
        );
      
      case "brain":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-28 h-28 rounded-full border-2 border-dashed border-secondary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/30 to-glow-gold/20 rounded-full blur-xl" />
            </div>
            <svg className="w-20 h-20 relative z-10" viewBox="0 0 100 100">
              <motion.path
                d="M50,20 C70,20 80,40 80,50 C80,70 60,80 50,80 C40,80 20,70 20,50 C20,40 30,20 50,20"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M35,40 Q50,30 65,40 M35,60 Q50,70 65,60"
                stroke="hsl(var(--glow-gold))"
                strokeWidth="2"
                fill="none"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </>
        );
      
      case "molecule":
      case "protein":
        return (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-24 h-24 border-2 border-primary/30 rounded-full" />
            </motion.div>
            <svg className="w-24 h-24 relative z-10" viewBox="0 0 100 100">
              <motion.circle cx="50" cy="50" r="12" fill="hsl(var(--glow-gold))" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="30" cy="35" r="8" fill="hsl(var(--primary))" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.circle cx="70" cy="35" r="8" fill="hsl(var(--secondary))" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
              <motion.circle cx="35" cy="70" r="6" fill="hsl(var(--primary))" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
              <motion.circle cx="65" cy="70" r="6" fill="hsl(var(--secondary))" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
              <line x1="50" y1="50" x2="30" y2="35" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="50" y1="50" x2="70" y2="35" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="50" y1="50" x2="35" y2="70" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="50" y1="50" x2="65" y2="70" stroke="hsl(var(--border))" strokeWidth="2" />
            </svg>
          </>
        );
      
      case "ml":
      case "visualization":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-glow-gold/20 to-primary/20 rounded-lg blur-xl" />
            </div>
            <svg className="w-28 h-28 relative z-10" viewBox="0 0 100 100">
              {/* Neural network layers */}
              {[20, 40, 60, 80].map((x, i) => (
                <g key={i}>
                  {[30, 50, 70].map((y, j) => (
                    <motion.circle
                      key={j}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={i === 0 || i === 3 ? 'hsl(var(--glow-gold))' : 'hsl(var(--primary))'}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: (i + j) * 0.1 }}
                    />
                  ))}
                </g>
              ))}
            </svg>
          </>
        );
      
      case "microbiome":
      case "bacteria":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-glow-gold/10 rounded-full blur-2xl" />
            </div>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 8 + (i % 3) * 4,
                  height: 8 + (i % 3) * 4,
                  background: i % 2 === 0 ? 'hsl(var(--glow-gold))' : 'hsl(var(--primary))',
                  left: `${25 + (i % 4) * 15}%`,
                  top: `${25 + Math.floor(i / 4) * 25}%`,
                }}
                animate={{
                  x: [0, 5, -5, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
              />
            ))}
          </>
        );
      
      default:
        return (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-32 h-32 border-2 border-dashed border-glow-gold/30 rounded-full" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-gold/30 to-primary/20 rounded-full blur-xl" />
            </div>
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-glow-gold to-primary rounded-lg relative z-10"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </>
        );
    }
  };

  return (
    <div className={`relative w-full h-48 flex items-center justify-center ${className}`}>
      {getImageContent()}
    </div>
  );
}