import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15); 

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
      {showSettings?<Settings/> : <Timer/>}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
