import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';

const interests = [
  { id: 'dance', icon: '💃', label: 'Dancing', message: "When music starts, Keerthana starts speaking a completely different language." },
  { id: 'sing', icon: '🎤', label: 'Singing', message: "One song becomes five songs very quickly. 😂" },
  { id: 'makeup', icon: '💄', label: 'Makeup', message: "Artist mode: ON." },
  { id: 'photos', icon: '📸', label: 'Photos', message: "Main character energy activated." },
  { id: 'fashion', icon: '✨', label: 'Fashion', message: "Always looking perfect." },
  { id: 'smiles', icon: '❤️', label: 'Smiles', message: "A smile that lights up the room." },
  { id: 'cute', icon: '🌸', label: 'Cute Moments', message: "Just being effortlessly adorable." },
  { id: 'music', icon: '🎶', label: 'Music', message: "Her everyday escape." }
];

const InterestScreen = () => {
  const [activeInterest, setActiveInterest] = useState(null);

  const allViewed = false; // Could add logic if we want to force them to click all

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%', position: 'relative' }}
    >
      <ProgressIndicator current={7} total={10} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', paddingTop: '20px' }}>
        <h2 className="heading-large" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '30px' }}>
          Her Little World
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', padding: '0 10px' }}>
          {interests.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveInterest(item)}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '15px 10px',
                cursor: 'pointer',
                background: activeInterest?.id === item.id ? 'rgba(255, 107, 158, 0.2)' : 'var(--glass-bg)'
              }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <NextButton to="/compliments" />
        </div>
      </div>

      <AnimatePresence>
        {activeInterest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(15, 15, 26, 0.9)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100,
              padding: '20px'
            }}
            onClick={() => setActiveInterest(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="glass-panel"
              style={{ textAlign: 'center', maxWidth: '300px', border: '1px solid var(--accent-pink)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>
                {activeInterest.icon}
              </span>
              <p className="body-text" style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>
                "{activeInterest.message}"
              </p>
              <button
                className="btn-primary"
                style={{ width: '100%', padding: '10px' }}
                onClick={() => setActiveInterest(null)}
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InterestScreen;
