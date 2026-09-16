import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';

const SurpriseGame = () => {
  const [selected, setSelected] = useState(null);

  const boxes = [
    { id: 'A', icon: '🎁' },
    { id: 'B', icon: '🎀' },
    { id: 'C', icon: '✨' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={6} total={10} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="boxes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
              <h2 className="heading-large" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
                What's inside?
              </h2>
              
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {boxes.map((box) => (
                  <motion.div
                    key={box.id}
                    className="glass-panel"
                    whileHover={{ scale: 1.1, y: -10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(box.id)}
                    style={{
                      width: '100px',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      border: '2px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span style={{ fontSize: '3rem', marginBottom: '10px' }}>{box.icon}</span>
                    <span style={{ fontWeight: 'bold' }}>Option {box.id}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '4rem', marginBottom: '20px' }}
              >
                😜
              </motion.div>
              
              <h2 className="heading-large" style={{ fontSize: '2rem', marginBottom: '10px' }}>
                Nice try 😌
              </h2>
              
              <p className="body-text" style={{ marginBottom: '40px' }}>
                But the real surprise is still waiting...
              </p>

              <NextButton to="/interests" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SurpriseGame;
