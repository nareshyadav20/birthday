import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';
import { hemanthiPhotos } from '../data/photos';

const PuzzleScreen = () => {
  const [pieces, setPieces] = useState([0, 1, 2, 3]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);

  // We'll just simulate a very simple puzzle logic.
  // Real 2x2 sliding puzzle or tap-to-swap: Let's do tap-to-swap.

  useEffect(() => {
    // Shuffle pieces on mount
    const shuffled = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    // Ensure it's not already solved
    if (shuffled.join(',') === '0,1,2,3') {
      shuffled[0] = 1; shuffled[1] = 0;
    }
    setPieces(shuffled);
  }, []);

  const handlePieceClick = (index) => {
    if (isCompleted) return;

    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      // Swap
      const newPieces = [...pieces];
      const temp = newPieces[selectedPiece];
      newPieces[selectedPiece] = newPieces[index];
      newPieces[index] = temp;

      setPieces(newPieces);
      setSelectedPiece(null);

      // Check if solved
      if (newPieces.join(',') === '0,1,2,3') {
        setIsCompleted(true);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={9} total={10} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '350px' }}>

        {!isCompleted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="body-text" style={{ textAlign: 'center', marginBottom: '10px' }}>
              One last little game...
            </p>
            <h2 className="heading-large" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '30px', color: 'var(--accent-pink)' }}>
              Can you put this smile back together? 😌
            </h2>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="heading-large" style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--accent-gold)' }}>
              YOU DID IT! 🎉
            </h2>
            <p className="body-text" style={{ textAlign: 'center', marginBottom: '20px' }}>
              And now you're ready for the real surprise.
            </p>
          </motion.div>
        )}

        <motion.div
          animate={{
            gap: isCompleted ? '0px' : '6px',
            border: isCompleted ? '4px solid var(--accent-gold)' : '1px solid rgba(255, 107, 158, 0.3)',
            boxShadow: isCompleted ? '0 0 40px rgba(255, 215, 0, 0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
            scale: isCompleted ? 1.05 : 1,
            padding: isCompleted ? '0px' : '8px',
            backgroundColor: isCompleted ? 'transparent' : 'rgba(255, 255, 255, 0.05)'
          }}
          transition={{ duration: 0.6, type: 'spring' }}
          style={{
            width: '280px',
            height: '280px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            borderRadius: '16px',
            marginBottom: '40px',
            backdropFilter: 'blur(10px)'
          }}
        >
          {pieces.map((piece, index) => {
            const originalX = (piece % 2) * 100;
            const originalY = Math.floor(piece / 2) * 100;

            return (
              <motion.div
                key={piece}
                layout
                onClick={() => handlePieceClick(index)}
                style={{
                  width: '100%',
                  height: '100%',
                  cursor: isCompleted ? 'default' : 'pointer',
                  borderRadius: isCompleted ? '0px' : '8px',
                  backgroundImage: `url(${hemanthiPhotos[0].image})`,
                  backgroundSize: '200% 200%',
                  backgroundPosition: `${originalX}% ${originalY}%`,
                  boxShadow: selectedPiece === index ? 'inset 0 0 0 4px var(--accent-gold)' : 'none',
                  zIndex: selectedPiece === index ? 10 : 1,
                  filter: (selectedPiece !== null && selectedPiece !== index && !isCompleted) ? 'brightness(0.6)' : 'brightness(1)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                whileHover={!isCompleted && selectedPiece !== index ? { scale: 0.95 } : {}}
              />
            );
          })}
        </motion.div>

        {isCompleted && (
          <NextButton to="/final-countdown" text="OPEN THE FINAL DOOR" />
        )}
      </div>
    </motion.div>
  );
};

export default PuzzleScreen;
