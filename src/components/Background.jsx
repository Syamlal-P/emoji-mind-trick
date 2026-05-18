import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Ambient static gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,10,60,0.5)_0%,rgba(0,0,0,1)_100%)]" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[100px]"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-blue-900/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.05)_0%,transparent_50%)]"
      />
    </div>
  );
}
