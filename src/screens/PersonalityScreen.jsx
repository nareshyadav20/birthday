import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';

const personalityCards = [
  { id: 1, title: '💃 THE DANCER', text: "She is an amazing dancer!\n\nWhen the music starts, she dances with full energy." },
  { id: 2, title: '🎤 THE SINGER', text: "She loves to sing so much!\n\nGive her any song, and she will sing it beautifully. 🎶" },
  { id: 3, title: '💄 THE ARTIST', text: "A true makeup artist.\n\nShe doesn't just apply makeup; she creates pure magic. ✨" },
  { id: 4, title: '🤍 PURE HONESTY', text: "What you see is what you get.\n\nHer beautiful honesty is her superpower, and it's what makes her so incredibly rare." },
  { id: 5, title: '🥹 ABSOLUTE CUTIE', text: "No explanation needed.\n\nJust look at her.", stamp: '100% CERTIFIED' }
];

const PersonalityScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < personalityCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isLast = currentIndex === personalityCards.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={3} total={10} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <h2 className="heading-large" style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>
          Who is Keerthana?
        </h2>

        <div style={{ position: 'relative', width: '100%', maxWidth: '300px', height: '250px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="glass-panel"
              style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <h3 style={{ color: 'var(--accent-pink)', marginBottom: '15px', fontSize: '1.5rem', letterSpacing: '1px' }}>
                {personalityCards[currentIndex].title}
              </h3>
              <p className="body-text" style={{ whiteSpace: 'pre-line' }}>
                {personalityCards[currentIndex].text}
              </p>

              {personalityCards[currentIndex].stamp && (
                <motion.div
                  initial={{ scale: 3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    border: '3px solid var(--accent-gold)',
                    color: 'var(--accent-gold)',
                    padding: '10px',
                    borderRadius: '50%',
                    transform: 'rotate(-15deg)',
                    fontWeight: 'bold',
                    background: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 10
                  }}
                >
                  {personalityCards[currentIndex].stamp}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ marginTop: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {!isLast ? (
            <motion.button
              className="btn-primary"
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOW MORE
            </motion.button>
          ) : (
            <NextButton to="/talents" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalityScreen;
