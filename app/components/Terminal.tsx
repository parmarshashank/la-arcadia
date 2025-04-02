'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Tracks from './Tracks';
import Timeline from './Timeline';
import Sponsors from './Sponsors';

type Command = {
  id: string;
  command: string;
  placeholder: string;
  component: React.ReactNode;
};

export default function Terminal() {
  const [executedCommands, setExecutedCommands] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: 'help',
      command: 'help',
      placeholder: 'Show available commands',
      component: (
        <div className="py-2 text-white/70">
          Available commands:
          <ul className="ml-4 mt-2 space-y-1">
            <li>help - Show this help message</li>
            <li>./about.sh - Learn about LA ARCADIA</li>
            <li>./list_tracks - View available tracks</li>
            <li>./view_timeline - See event schedule</li>
            <li>./view_sponsors - View our sponsors</li>
            <li>clear - Clear terminal</li>
          </ul>
        </div>
      )
    },
    {
      id: 'about',
      command: './about.sh',
      placeholder: 'Learn about LA ARCADIA',
      component: <About />
    },
    {
      id: 'tracks',
      command: './list_tracks',
      placeholder: 'View available tracks',
      component: <Tracks />
    },
    {
      id: 'timeline',
      command: './view_timeline',
      placeholder: 'See event schedule',
      component: <Timeline />
    },
    {
      id: 'sponsors',
      command: './view_sponsors',
      placeholder: 'View our sponsors',
      component: <Sponsors />
    }
  ];

  const executeCommand = (input: string) => {
    if (input === 'clear') {
      setCommandHistory([]);
      setExecutedCommands([]);
      setCurrentInput('');
      return;
    }

    const command = commands.find(cmd => cmd.command === input);
    if (command) {
      setTyping(true);
      setCommandHistory([...commandHistory, input]);
      setTimeout(() => {
        setExecutedCommands([...executedCommands, command.id]);
        setTyping(false);
      }, 500);
    } else {
      setCommandHistory([...commandHistory, input]);
      setExecutedCommands([...executedCommands, 'error']);
    }
    setCurrentInput('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    }
  };

  return (
    <div className="min-h-screen p-4 pb-32 font-mono" onClick={() => inputRef.current?.focus()}>
      <div className="text-green-400 mb-8">
        Welcome to LA ARCADIA Terminal v1.0
        <br />
        Type 'help' to see available commands:
      </div>

      {/* Command history and output */}
      {commandHistory.map((cmd, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center text-white/80 mb-2">
            <span className="text-green-400 mr-2">~</span>
            <span className="text-green-400 mr-2">user@laarcadia</span>
            <span className="text-white/50 mr-2">:~$</span>
            <span>{cmd}</span>
          </div>
          {executedCommands[index] === 'error' ? (
            <div className="text-red-500">
              Command not found. Type 'help' to see available commands.
            </div>
          ) : (
            executedCommands.includes(commands.find(c => c.command === cmd)?.id || '') && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {commands.find(c => c.command === cmd)?.component}
              </motion.div>
            )
          )}
        </div>
      ))}

      {/* Input container */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black border-t-2 border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border-2 border-white/40 rounded-sm">
            <div className="p-4 bg-black">
              <div className="flex items-center">
                <span className="text-green-400">~</span>
                <span className="text-green-400 ml-2">user@laarcadia</span>
                <span className="text-white/50 mr-2">:~$</span>
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full bg-transparent border-none outline-none text-white caret-transparent"
                    autoFocus
                    spellCheck="false"
                    aria-label="Terminal input"
                  />
                  {/* Updated cursor positioning */}
                  <motion.span
                    className="absolute top-0 left-0 text-green-400 text-lg"
                    style={{ 
                      transform: `translateX(${currentInput.length}ch)` 
                    }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    ▋
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 