import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { text: "Think of any two-digit number.", sub: "For example, 42." },
  { text: "Add both digits together.", sub: "If you chose 42, then 4 + 2 = 6." },
  { text: "Subtract the total from your original number.", sub: "42 - 6 = 36." },
  { text: "Remember your final number.", sub: "Burn it into your mind." },
];

export default function Instructions({ onNext }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative z-10"
    >
      <div className="max-w-2xl w-full glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden">
        {/* Glow effect behind the box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-purple-900/10 blur-[50px] rounded-full pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[200px] flex flex-col justify-center items-center relative z-10"
          >
            <span className="text-purple-400 font-mono text-sm tracking-widest mb-6 block">
              STEP 0{currentStep + 1}
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 glow-text">
              {steps[currentStep].text}
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-base">
              {steps[currentStep].sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-center gap-6 relative z-10">
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-8 bg-purple-400' : 'w-2 bg-gray-700'}`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="font-sans text-sm tracking-[0.15em] uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3 rounded-full transition-colors"
          >
            {currentStep === steps.length - 1 ? 'I Have My Number' : 'Continue'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
