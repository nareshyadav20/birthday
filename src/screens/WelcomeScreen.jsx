import React from 'react';
import { motion } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';

const WelcomeScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%', textAlign: 'center' }}
    >
      <ProgressIndicator current={1} total={10} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <motion.img
          src="/images/keerthana/keerthana_poster.jpg"
          alt="Keerthana"
          style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', border: '4px solid var(--accent-pink)', marginBottom: '30px', boxShadow: '0 0 20px rgba(255,107,158,0.4)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200?text=Keerthana';
          }}
        />

        <h1 className="heading-large" style={{ fontSize: '2.5rem' }}>
          Hey Keerthana... ❤️
        </h1>

        <p className="body-text" style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
          Today isn't just another day.
        </p>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginBottom: '40px' }}>
          Someone made a little journey for you...
        </p>

        <NextButton to="/birthday-reveal" text="START" />
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
