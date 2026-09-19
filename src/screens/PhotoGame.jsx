import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';
import { keerthanaPhotos } from '../data/photos';

const PhotoGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const photosToUse = keerthanaPhotos;

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex < photosToUse.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    }
  };

  const isLast = currentIndex === photosToUse.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={5} total={10} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
        <h2 className="heading-large" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '5px' }}>
          Okay... enough talking.
        </h2>
        <h3 style={{ color: 'var(--accent-pink)', marginBottom: '30px', fontWeight: '500' }}>
          Let's look at the evidence. 😌
        </h3>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', marginBottom: '30px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="glass-panel"
              style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {!revealed ? (
                <motion.div
                  onClick={handleReveal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: '2px dashed var(--accent-pink)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-pink)' }}>
                    TAP TO REVEAL
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <img
                    src={photosToUse[currentIndex].image}
                    alt="Memory"
                    style={{ width: '100%', height: 'calc(100% - 60px)', objectFit: 'cover', borderRadius: '8px' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/300x400/222222/FFFFFF/png?text=Photo+${currentIndex + 1}`;
                    }}
                  />
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px' }}>
                    <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                      "{photosToUse[currentIndex].caption}"
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {revealed && (
            !isLast ? (
              <NextButton onClick={handleNext} text="NEXT PHOTO" showArrow={false} />
            ) : (
              <NextButton to="/surprise-game" />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoGame;
