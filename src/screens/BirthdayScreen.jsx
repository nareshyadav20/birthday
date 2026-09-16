import React from 'react';
import { motion } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';

const BirthdayScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '100%', padding: '20px 0', textAlign: 'center' }}
    >
      <div style={{ width: '100%' }}>
        <ProgressIndicator current={2} total={10} />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '30px', padding: '0 20px' }}>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,105,180,0.1) 0%, rgba(255,215,0,0.1) 100%)',
            padding: '40px 20px',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '400px',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.h1 
            className="heading-large" 
            style={{ 
              fontSize: '3.2rem', 
              color: 'var(--accent-gold)', 
              marginBottom: '25px',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
              letterSpacing: '2px'
            }}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
          >
            16 • 09 • 2004
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="body-text" style={{ marginBottom: '20px', fontSize: '1.3rem', fontWeight: '600', lineHeight: '1.5' }}>
              The day a very special person <br/> came into this world.
            </p>

            <p className="body-text" style={{ color: 'var(--accent-pink)', fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.9 }}>
              And honestly... the world got a little more interesting after that. 😌
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Hearts & Stars */}
        <div style={{ position: 'absolute', pointerEvents: 'none', inset: 0, overflow: 'hidden', zIndex: -1 }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: '100vh', 
                opacity: 0, 
                x: `${Math.random() * 100}vw`,
                scale: Math.random() * 0.6 + 0.4
              }}
              animate={{ 
                y: '-20vh', 
                opacity: [0, 1, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5 + Math.random() * 5, 
                delay: Math.random() * 4,
                ease: 'linear'
              }}
              style={{ position: 'absolute', fontSize: '1.5rem' }}
            >
              {['❤️', '✨', '💖', '⭐'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>

      </div>
      
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1 }}
         style={{ width: '100%', padding: '20px 0 10px 0', display: 'flex', justifyContent: 'center' }}
      >
        <NextButton to="/personality" />
      </motion.div>
    </motion.div>
  );
};

export default BirthdayScreen;
