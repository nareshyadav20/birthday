import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { messages } from '../data/messages';
import { hemanthiPhotos } from '../data/photos';

const finalPhotos = [
  "/images/hemanthi/hemanthi_poster.jpg",
  "/images/hemanthi/hemanthi_traditional.jpg",
  "/images/hemanthi/hemanthi_smile.jpg",
  "/images/hemanthi/hemanthi_outdoor.jpg"
];

const FinalSurprise = () => {
  const navigate = useNavigate();
  const [showLastSurprise, setShowLastSurprise] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % finalPhotos.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    // Fire confetti on load
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF6B9E', '#9D4EDD', '#FFD700', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF6B9E', '#9D4EDD', '#FFD700', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Immediately stop global background music to prevent overlap
    const globalAudio = document.getElementById('global-bg-audio');
    if (globalAudio) {
      globalAudio.pause();
    }

    // Play final surprise music directly from the audio element
    const finalAudio = document.getElementById('final-audio');
    if (finalAudio) {
      finalAudio.volume = 0.5; // Set volume to 50%
      finalAudio.play().catch(e => console.log("Final audio play failed:", e));
    }

    return () => {
      if (finalAudio) {
        finalAudio.pause();
        finalAudio.currentTime = 0;
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px 0', minHeight: '100%',
        overflowY: 'auto', overflowX: 'hidden'
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.h1
          className="heading-large"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          style={{ fontSize: '3rem', textAlign: 'center', color: 'var(--accent-gold)', marginBottom: '5px' }}
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2
          className="heading-large"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          style={{ fontSize: '3.5rem', textAlign: 'center', color: 'var(--accent-pink)', marginBottom: '20px' }}
        >
          Hemanthi ❤️
        </motion.h2>

        <p style={{ color: 'var(--text-secondary)', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '30px' }}>
          16 September 2004
        </p>

        <p className="body-text" style={{ fontStyle: 'italic', marginBottom: '40px', textAlign: 'center' }}>
          "You deserve a day as beautiful as you are."
        </p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          style={{
            position: 'relative',
            width: '250px', height: '300px',
            padding: '10px',
            background: 'var(--glass-bg)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '16px',
            marginBottom: '40px',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)'
          }}
        >
          <AnimatePresence>
            <motion.img
              key={photoIndex}
              src={finalPhotos[photoIndex]}
              alt="Hemanthi Final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 20px)',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                borderRadius: '12px',
                position: 'absolute',
                top: '10px',
                left: '10px'
              }}
            />
          </AnimatePresence>
        </motion.div>

        <div className="glass-panel" style={{ width: '100%', padding: '30px 20px', marginBottom: '40px' }}>
          <p className="body-text" style={{ whiteSpace: 'pre-line', lineHeight: '1.8', fontSize: '1rem', textAlign: 'center' }}>
            {messages.finalMessage}
          </p>
        </div>

        {!showLastSurprise ? (
          <>
            <h3 style={{ color: 'var(--accent-pink)', marginBottom: '20px', letterSpacing: '1px' }}>
              ONE MORE THING...
            </h3>

            <button
              className="btn-primary"
              style={{ width: '100%', marginBottom: '30px' }}
              onClick={() => {
                setShowLastSurprise(true);
                confetti({
                  particleCount: 150,
                  spread: 80,
                  origin: { y: 0.6 },
                  colors: ['#FF6B9E', '#9D4EDD', '#FFD700', '#ffffff']
                });
              }}
            >
              OPEN YOUR LAST SURPRISE 🎁
            </button>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring' }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,105,180,0.1) 0%, rgba(255,215,0,0.1) 100%)',
              border: '1px solid rgba(255, 107, 158, 0.3)',
              padding: '25px 20px',
              borderRadius: '16px',
              marginBottom: '30px',
              textAlign: 'center',
              width: '100%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <p className="body-text" style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', fontWeight: '600', lineHeight: '1.5' }}>
              Always remember how incredibly loved you are.<br /><br />
              Happy Birthday! 🎉❤️
            </p>
          </motion.div>
        )}

        <button
          onClick={() => navigate('/welcome')}
          style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
            display: 'flex', alignItems: 'center', gap: '8px',
            cursor: 'pointer', padding: '10px', fontSize: '0.9rem'
          }}
        >
          REPLAY THE SURPRISE ↻
        </button>

        <audio
          id="final-audio"
          loop
          src="/music/birthday-song.mp3"
          style={{ display: 'none' }}
        />

      </div>
    </motion.div>
  );
};

export default FinalSurprise;
