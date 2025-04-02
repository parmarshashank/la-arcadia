'use client';

import { motion } from 'framer-motion';

interface PixelatedButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: 'red' | 'green' | 'blue';
}

export default function PixelatedButton({ children, className = '', color = 'red' }: PixelatedButtonProps) {
  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-700 border-red-400',
    green: 'bg-green-600 hover:bg-green-700 border-green-400',
    blue: 'bg-blue-600 hover:bg-blue-700 border-blue-400'
  };

  return (
    <motion.button 
      className={`
        relative px-8 py-4 text-white
        before:absolute before:inset-0 before:border-2 before:border-white/50 before:translate-x-1 before:translate-y-1
        after:absolute after:inset-0 after:border-2 after:border-black/50 after:-translate-x-1 after:-translate-y-1
        ${colorClasses[color]}
        transition-transform pixelated ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
} 