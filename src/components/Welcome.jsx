import { motion } from 'framer-motion';

export default function Welcome({ onNext }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative z-10"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest glow-text uppercase mb-6">
          I Can Read Your Mind
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-sans tracking-wide max-w-2xl mx-auto mb-16 leading-relaxed">
          Mathematics and psychology combine to reveal what you’re thinking. <br />
          Prepare for an illusion that defies logic.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="relative overflow-hidden group bg-transparent border border-purple-500/30 px-10 py-4 rounded-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative font-sans text-sm tracking-[0.2em] uppercase text-purple-200 group-hover:text-white transition-colors duration-300">
            Start Experience
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
