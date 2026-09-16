import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import { birthdayData } from '../data/birthdayData';
import { Lock } from 'lucide-react';

const LockScreen = () => {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(
    new Date() >= new Date(birthdayData.unlockDate)
  );

  const handleComplete = () => {
    setIsUnlocked(true);
  };

  const startSurprise = () => {
    navigate('/welcome');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}
    >
      {!isUnlocked ? (
        <>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(45deg, var(--accent-pink), var(--accent-gold))',
              marginBottom: '25px',
              boxShadow: '0 0 30px rgba(255,107,158,0.4)'
            }}>
              <img
                src="/images/hemanthi/hemanthi_poster.jpg"
                alt="Hemanthi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 18%',
                  borderRadius: '50%',
                  border: '3px solid var(--bg-primary)'
                }}
              />
            </div>
            <h1 className="heading-large" style={{ fontSize: '2rem' }}>
              Something Magical<br />Is Waiting...
            </h1>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              But not yet...<br />
              Hemanthi's special day is almost here. ❤️
            </p>
            <p style={{ color: 'var(--accent-gold)', fontWeight: '600', letterSpacing: '2px', marginBottom: '30px' }}>
              16 • 09 • 2004
            </p>
          </motion.div>

          <Countdown targetDate={birthdayData.unlockDate} onComplete={handleComplete} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: '20px' }}
          >
            Come back when the clock says it's time.
          </motion.p>

          {/* Developer Bypass */}
          <button 
            onClick={startSurprise} 
            style={{ 
              marginTop: '10px', 
              opacity: 0.2, 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '8px 16px',
              color: '#fff', 
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            dev_redirect
          </button>



        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h1 className="heading-large" style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>
            🎉 IT'S TIME!
          </h1>
          <h2 className="heading-large" style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Happy Birthday, Hemanthi!
          </h2>

          <button className="btn-primary" onClick={startSurprise} style={{ width: '100%' }}>
            START THE SURPRISE →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LockScreen;
