import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Welcome from './components/Welcome';
import Instructions from './components/Instructions';
import SymbolGrid from './components/SymbolGrid';
import Reveal from './components/Reveal';
import { getRandomSymbol, generateGrid } from './utils/symbols';

function App() {
  const [step, setStep] = useState('welcome'); // welcome, instructions, grid, reveal
  const [magicSymbol, setMagicSymbol] = useState(null);
  const [gridData, setGridData] = useState([]);

  const initGame = () => {
    const symbol = getRandomSymbol();
    setMagicSymbol(() => symbol);
    setGridData(generateGrid(symbol));
    setStep('welcome');
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <main className="relative min-h-screen w-full font-sans text-white selection:bg-purple-900/50">
      <Background />
      
      <AnimatePresence mode="wait">
        {step === 'welcome' && (
          <Welcome key="welcome" onNext={() => setStep('instructions')} />
        )}
        
        {step === 'instructions' && (
          <Instructions key="instructions" onNext={() => setStep('grid')} />
        )}

        {step === 'grid' && (
          <SymbolGrid 
            key="grid" 
            gridData={gridData} 
            onReveal={() => setStep('reveal')} 
          />
        )}

        {step === 'reveal' && magicSymbol && (
          <Reveal 
            key="reveal" 
            magicSymbol={magicSymbol} 
            onReset={initGame} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
