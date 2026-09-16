import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const FinalCountdown = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%', backgroundColor: 'var(--bg-primary)', padding: '20px', textAlign: 'center' }}
    >
      <motion.h1
        variants={itemVariants}
        className="heading-large"
        style={{ fontSize: '2.8rem', marginBottom: '20px', color: 'var(--accent-gold)' }}
      >
        Hemanthi...
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="body-text"
        style={{ fontSize: '1.4rem', marginBottom: '15px' }}
      >
        We've reached the end...
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="body-text"
        style={{ fontSize: '1.4rem', color: 'var(--accent-pink)', marginBottom: '50px' }}
      >
        But I saved the best part for last.
      </motion.p>

      <motion.div
        variants={itemVariants}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{
          width: '90px', height: '90px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 158, 0.1)',
          border: '2px solid var(--accent-pink)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '30px',
          boxShadow: '0 0 30px rgba(255, 107, 158, 0.4)'
        }}>
          <Lock size={36} color="var(--accent-pink)" />
        </div>

        <motion.button
          className="btn-primary"
          onClick={() => navigate('/final')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ width: '220px', height: '60px', fontSize: '1.2rem', letterSpacing: '2px', borderRadius: '30px' }}
        >
          UNLOCK ❤️
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FinalCountdown;
