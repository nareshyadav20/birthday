import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.volume = 0.2; // slight sound
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Success! We can remove the listeners now.
            document.removeEventListener('click', playAudio);
            document.removeEventListener('touchstart', playAudio);
          }).catch(e => {
            console.log("Audio play failed, waiting for user interaction:", e);
          });
        }
      }
    };

    // Try playing immediately (usually fails in modern browsers until click)
    playAudio();

    // Browsers block autoplay until user interaction. Keep listening until it works.
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };
  }, []);

  return (
    <audio 
      ref={audioRef}
      id="global-bg-audio"
      loop 
      src="/music/birthday-song11.mp3" 
      style={{ display: 'none' }} 
    />
  );
};

export default BackgroundMusic;
