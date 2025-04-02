'use client';

import { motion } from 'framer-motion';

const sponsors = [
  'TECH CORP',
  'DIGITAL LABS',
  'CYBER SYSTEMS',
  'QUANTUM INC'
];

export default function Sponsors() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {sponsors.map((sponsor, i) => (
        <motion.div
          key={sponsor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 border border-white/20 text-center"
        >
          <span className="text-cyan-500 text-sm tracking-wider">[{sponsor}]</span>
        </motion.div>
      ))}
    </div>
  );
} 