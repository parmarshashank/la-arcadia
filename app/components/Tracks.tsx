'use client';

import { motion } from 'framer-motion';

const tracks = [
  { 
    name: 'WEB3', 
    desc: 'Decentralized Future', 
    color: 'cyan-500',
    icon: '⬡'
  },
  { 
    name: 'AI/ML', 
    desc: 'Machine Intelligence', 
    color: 'green-500',
    icon: '◈'
  },
  { 
    name: 'IOT', 
    desc: 'Connected Systems', 
    color: 'purple-500',
    icon: '◎'
  },
  { 
    name: 'OPEN', 
    desc: 'Infinite Possibilities', 
    color: 'yellow-500',
    icon: '◇'
  }
];

export default function Tracks() {
  return (
    <div className="space-y-4">
      {tracks.map((track, i) => (
        <motion.div
          key={track.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`p-4 border-l-2 border-${track.color} bg-black/20`}
        >
          <div className="flex items-center">
            <span className={`text-${track.color} text-2xl mr-4`}>{track.icon}</span>
            <div>
              <h3 className="text-lg">{track.name}</h3>
              <p className="text-white/60 text-sm">{track.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 