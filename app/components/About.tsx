'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      className="border border-white/20 p-6 bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2 text-white/80">
        <p>[ System Information ]</p>
        <p> Event: LA ARCADIA Hackathon</p>
        <p> Duration: 24 hours</p>
        <p> Location: Digital Mainframe</p>
        <p> Status: Initializing...</p>
        <div className="mt-4 space-y-2">
          <p>[ Mission Parameters ]</p>
          <p> Create. Innovate. Disrupt.</p>
          <p> Collaborate with fellow hackers</p>
          <p> Build the future</p>
        </div>
      </div>
    </motion.div>
  );
} 