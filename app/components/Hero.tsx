'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden border-b border-white/20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl mb-8 glitch-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            LA ARCADIA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl tracking-wider"
          >
            &gt; RETRO_COMPUTING.HACK_1994
          </motion.div>
          <motion.button 
            className="mt-12 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            INITIALIZE_SYSTEM
          </motion.button>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <div className="w-6 h-10 border-2 border-white rounded-full">
        <motion.div 
          className="w-1 h-2 bg-white mx-auto mt-2"
          animate={{ 
            y: [0, 12, 0],
            opacity: [1, 0.2, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
} 