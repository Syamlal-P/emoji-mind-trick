import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Reveal({ magicSymbol: MagicIcon, onReset }) {
  const [phase, setPhase] = useState('scanning'); // scanning, synchronizing, revealing, done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('synchronizing'), 3000);
    const t2 = setTimeout(() => setPhase('revealing'), 6000);
    const t3 = setTimeout(() => setPhase('done'), 9000);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative z-10"
    >
      <AnimatePresence mode="wait">
        {phase === 'scanning' && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 mb-8 rounded-full border border-purple-500/30 relative flex items-center justify-center overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(147,51,234,0.8)_360deg)] opacity-50"
              />
              <div className="w-31 h-31 bg-black rounded-full absolute" />
              <div className="w-16 h-1 bg-purple-500/50 absolute glow-text shadow-[0_0_15px_rgba(147,51,234,0.8)]" />
            </div>
            <h3 className="text-xl font-mono text-purple-300 tracking-widest animate-pulse">
              ANALYZING THOUGHT PATTERNS...
            </h3>
          </motion.div>
        )}

        {phase === 'synchronizing' && (
          <motion.div
            key="synchronizing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-40 h-40 bg-blue-600/20 rounded-full blur-3xl absolute"
            />
            <h3 className="text-2xl font-serif text-blue-300 tracking-[0.2em] relative z-10 glow-text">
              Synchronizing Mind Interface
            </h3>
            <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative z-10">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
            </div>
          </motion.div>
        )}

        {(phase === 'revealing' || phase === 'done') && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] border border-white/5 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-25%] border border-gold/20 rounded-full"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0.4 }}
                className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-full glass-panel relative z-10 before:absolute before:inset-0 before:rounded-full before:bg-gold/10 before:blur-xl"
              >
                <div className="text-gold glow-gold transform scale-[2] md:scale-[3]">
                  <MagicIcon strokeWidth={1} />
                </div>
              </motion.div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="text-4xl md:text-6xl font-serif text-white mb-6 glow-text"
            >
              This is your symbol
            </motion.h2>

            {phase === 'done' && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onClick={onReset}
                className="mt-8 font-sans text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                Perform Again
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
