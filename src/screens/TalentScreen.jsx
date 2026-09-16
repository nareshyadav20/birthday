import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NextButton from '../components/NextButton';
import ProgressIndicator from '../components/ProgressIndicator';
import { talents } from '../data/talents';

const TalentScreen = () => {
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowValues(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}
    >
      <ProgressIndicator current={4} total={10} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', maxWidth: '350px' }}>
        <h2 className="heading-large" style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
          Her Talents
        </h2>

        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {talents.map((talent, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontWeight: '500' }}>{talent.name}</span>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>
                  {showValues ? talent.label : '0%'}
                </span>
              </div>
              <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: showValues ? `${talent.level}%` : 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  style={{
                    height: '100%',
                    background: talent.label === '∞%' 
                      ? 'linear-gradient(90deg, var(--accent-pink), var(--accent-gold), var(--accent-purple))'
                      : 'linear-gradient(90deg, var(--accent-pink), var(--accent-purple))',
                    borderRadius: '5px'
                  }}
                />
              </div>
              {talent.label === '∞%' && showValues && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  style={{ fontSize: '0.8rem', color: 'var(--accent-pink)', marginTop: '5px', fontStyle: 'italic' }}
                >
                  TOO HIGH TO MEASURE
                </motion.p>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <NextButton to="/photos" />
        </div>
      </div>
    </motion.div>
  );
};

export default TalentScreen;
