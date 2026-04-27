import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { value: "50+", label: "Bioinformatics Analyses" },
  { value: "10+", label: "Research Collaborations" },
  { value: "100M+", label: "Datapoints Analyzed" },
];

const TYPE_LINES = ["Turning Data Into", "1% Better Healthcare"];

function useTypewriter(lines: string[], speed = 55, pause = 1600) {
  const [displayed, setDisplayed] = useState<string[]>(() => lines.map(() => ""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      if (lineIdx < lines.length - 1) {
        timeout = setTimeout(() => {
          setLineIdx((i) => i + 1);
          setCharIdx(0);
        }, 250);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting) {
      // delete all lines from the last one back
      const activeLine = lineIdx;
      const activeText = displayed[activeLine];
      if (activeText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const next = [...prev];
            next[activeLine] = activeText.slice(0, -1);
            return next;
          });
        }, speed / 2);
      } else if (activeLine > 0) {
        timeout = setTimeout(() => setLineIdx((i) => i - 1), 80);
      } else {
        setDeleting(false);
        setCharIdx(0);
        setLineIdx(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, lineIdx, deleting, displayed, lines, speed, pause]);

  return { displayed, activeLine: lineIdx, deleting };
}

export function HeroSection() {
  const { displayed, activeLine } = useTypewriter(TYPE_LINES);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="hero-glow" />
      <div className="hero-glow-left" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary tracking-wide uppercase mb-6"
          >
            Precision Health Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight"
          >
            <span className="text-primary">Algomics</span>
            <br />
            <span className="block min-h-[1.2em]">
              {displayed[0]}
              {activeLine === 0 && (
                <span className="inline-block w-[2px] h-[0.9em] align-middle bg-primary ml-1 animate-pulse" />
              )}
            </span>
            <span className="block min-h-[1.2em]">
              {displayed[1]}
              {activeLine === 1 && (
                <span className="inline-block w-[2px] h-[0.9em] align-middle bg-primary ml-1 animate-pulse" />
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We decode biology using advanced bioinformatics, data science, and
            AI-driven precision health solutions to unlock hidden patterns in biological data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-20"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-semibold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
