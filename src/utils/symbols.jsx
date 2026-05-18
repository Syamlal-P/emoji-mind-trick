import { 
  Eye, Moon, Sun, Star, Flame, Zap, Compass, Hexagon, 
  Sparkles, Wand2, Infinity, Triangle, Crosshair, Diamond, 
  Droplet, Wind, Cloud, Aperture, Anchor, Cpu, Feather, Target, Radar, Radio
} from 'lucide-react';

export const symbolComponents = [
  Eye, Moon, Sun, Star, Flame, Zap, Compass, Hexagon, 
  Sparkles, Wand2, Infinity, Triangle, Crosshair, Diamond, 
  Droplet, Wind, Cloud, Aperture, Anchor, Cpu, Feather, Target, Radar, Radio
];

export function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbolComponents.length);
  return symbolComponents[randomIndex];
}

export function generateGrid(magicSymbol) {
  const grid = [];
  for (let num = 1; num < 100; num++) {
    if (num % 9 === 0) {
      grid.push({ num, symbol: magicSymbol });
    } else {
      let randomSymbol = getRandomSymbol();
      // Optionally prevent the random symbol from being the magic symbol
      while (randomSymbol === magicSymbol) {
        randomSymbol = getRandomSymbol();
      }
      grid.push({ num, symbol: randomSymbol });
    }
  }
  return grid;
}
