import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';
import { messages } from '../data/messages';

const ComplimentWall = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextCompliment = () => {
    if (activeIndex < messages.compliments.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const isLast = activeIndex === messages.compliments.length - 1;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={8} total={10} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '20px 0' }}>
        
        <div style={{ position: 'relative', width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-panel"
              style={{
                position: 'absolute',
                maxWidth: '300px',
                width: '90%',
                padding: '40px 20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(255, 107, 158, 0.2)',
                border: '1px solid rgba(255, 107, 158, 0.3)',
                background: 'rgba(255, 107, 158, 0.05)'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
                {['🌸', '✨', '💃', '🎤', '💄', '❤️'][activeIndex % 6]}
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontFamily: 'var(--font-heading)', whiteSpace: 'pre-line' }}>
                "{messages.compliments[activeIndex]}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          {!isLast ? (
            <motion.button 
              className="btn-primary"
              onClick={handleNextCompliment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'transparent', border: '1px solid var(--accent-pink)', color: 'var(--accent-pink)', boxShadow: 'none' }}
            >
              TAP FOR MORE ✨
            </motion.button>
          ) : (
            <NextButton to="/puzzle" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ComplimentWall;
