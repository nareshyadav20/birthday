import React from 'react';

const ProgressIndicator = ({ current, total }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '8px', 
      padding: '10px 0',
      marginBottom: '20px'
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i + 1 <= current ? 'var(--accent-pink)' : 'rgba(255,255,255,0.2)',
            transition: 'background-color 0.3s ease',
            boxShadow: i + 1 === current ? '0 0 10px var(--accent-pink)' : 'none'
          }} />
          {i < total - 1 && (
            <div style={{
              height: '2px',
              width: '12px',
              backgroundColor: i + 1 < current ? 'var(--accent-pink)' : 'rgba(255,255,255,0.1)',
              transition: 'background-color 0.3s ease'
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;
