import { useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

const ToggleMode = () => {
  const [mode, setMode] = useState<string | null>('light');

  useEffect(() => {
    const currentMode = localStorage.getItem('toggleMode');
    setMode(currentMode);
  }, []);

  const toggleMode = (modeBtn: string) => {
    localStorage.setItem('toggleMode', modeBtn);
    setMode(modeBtn);
  };

  return (
    <>
      {mode === 'light' ? (
        <BsFillSunFill
          className="icon light-mode"
          onClick={() => toggleMode('dark')}
        />
      ) : (
        <MdDarkMode
          className="icon dark-mode"
          onClick={() => toggleMode('light')}
        />
      )}
    </>
  );
};

export default ToggleMode;