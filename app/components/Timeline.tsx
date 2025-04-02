'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  { time: '0800', event: 'System Boot' },
  { time: '1000', event: 'Initialize Main Program' },
  { time: '1400', event: 'Execute Hack Protocol' },
  { time: '2200', event: 'Night Mode Activated' }
];

export default function Timeline() {
  return (
    <section className="min-h-screen py-32 relative border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl mb-16 text-center tracking-widest">/TIMELINE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelineEvents.map((event, i) => (
            <TimelineEvent key={i} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({ time, event, index }: { time: string, event: string, index: number }) {
  return (
    <motion.div
      className="border border-white p-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="text-sm font-mono text-white/60">{time}</div>
      <div className="text-lg mt-2">{event}</div>
    </motion.div>
  );
} 