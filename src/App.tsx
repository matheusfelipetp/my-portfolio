import { useState } from 'react';
import Header from './components/Header/header';
import MainContent from './components/MainContent/mainContent';
import './styles/style.css';

const App = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <>
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <MainContent mobileMenu={mobileMenu} />
    </>
  );
};

export default App;
