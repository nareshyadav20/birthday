import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundMusic from './components/BackgroundMusic';
import LockScreen from './screens/LockScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import BirthdayScreen from './screens/BirthdayScreen';

import PersonalityScreen from './screens/PersonalityScreen';
import TalentScreen from './screens/TalentScreen';
import PhotoGame from './screens/PhotoGame';
import SurpriseGame from './screens/SurpriseGame';
import InterestScreen from './screens/InterestScreen';
import ComplimentWall from './screens/ComplimentWall';
import PuzzleScreen from './screens/PuzzleScreen';
import FinalCountdown from './screens/FinalCountdown';
import FinalSurprise from './screens/FinalSurprise';

function App() {
  return (
    <Router>
      <div className="app-container">
        <BackgroundMusic />
        <div className="background-effects">
          {/* Background effects will go here */}
        </div>
        <div className="content-layer">
          <Routes>
            <Route path="/" element={<LockScreen />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/birthday-reveal" element={<BirthdayScreen />} />
            <Route path="/personality" element={<PersonalityScreen />} />
            <Route path="/talents" element={<TalentScreen />} />
            <Route path="/photos" element={<PhotoGame />} />
            <Route path="/surprise-game" element={<SurpriseGame />} />
            <Route path="/interests" element={<InterestScreen />} />
            <Route path="/compliments" element={<ComplimentWall />} />
            <Route path="/puzzle" element={<PuzzleScreen />} />
            <Route path="/final-countdown" element={<FinalCountdown />} />
            <Route path="/final" element={<FinalSurprise />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
