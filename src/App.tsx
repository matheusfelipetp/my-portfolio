import { useEffect, useState } from 'react';
import Header from './components/Header/header';
import MainContent from './components/MainContent/mainContent';
import TextAnimated from './components/TextAnimated/textAnimated';
import './styles/style.css';

const App = () => {
  const [change, setChange] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 4000);
  });

  return (
    <>
      {change ? (
        <TextAnimated />
      ) : (
        <>
          <Header />
          <MainContent />
        </>
      )}
    </>
  );
};

export default App;
