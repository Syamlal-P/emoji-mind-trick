import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SymbolGrid({ gridData, onReveal }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center min-h-screen text-center p-6 py-12 relative z-10"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-white glow-text mb-4">
          Find Your Number
        </h2>
        <p className="text-gray-400 font-sans text-sm md:text-base max-w-lg mx-auto">
          Locate your calculated number below. Focus deeply on the symbol next to it. 
          Burn it into your mind. Do not click it.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="w-full max-w-4xl mx-auto glass-panel p-6 md:p-10 rounded-3xl mb-12 relative"
      >
        <div className="absolute inset-0 bg-blue-900/5 blur-[80px] pointer-events-none rounded-3xl" />
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 max-h-[50vh] overflow-y-auto no-scrollbar pr-2 pb-2">
          {gridData.map((item, index) => {
            const IconComponent = item.symbol;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.01 + 1.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-colors group cursor-crosshair relative"
              >
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 rounded-xl" />
                <span className="text-gray-500 font-mono text-xs mb-2 relative z-10">{item.num}</span>
                <div className="text-purple-300 group-hover:text-purple-100 group-hover:glow-text relative z-10">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onReveal}
        className="relative overflow-hidden group bg-transparent border border-blue-500/30 px-12 py-5 rounded-full z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative font-sans text-sm tracking-[0.2em] uppercase text-blue-200 group-hover:text-white transition-colors duration-300">
          Read My Mind
        </span>
      </motion.button>
    </motion.div>
  );
}
