import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NextButton = ({ to, text = "NEXT", onClick, showArrow = true }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <motion.button 
      className="btn-primary" 
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ marginTop: '20px', width: '100%', maxWidth: '300px' }}
    >
      {text}
      {showArrow && <ArrowRight size={20} />}
    </motion.button>
  );
};

export default NextButton;
