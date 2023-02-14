import { useState } from 'react';
import useMedia from '../../hooks/useMedia';
import Logo from '../Logo/logo';
import MenuMobile from '../MenuMobile/menuMobile';
import NavBar from '../NavBar/navbar';
import ToggleMode from '../ToggleMode/toggleMode';

const Header = () => {
  const mobile = useMedia('(max-width:60rem)');
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {mobile ? (
          <div className="content__btns">
            <ToggleMode />
            <MenuMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          </div>
        ) : (
          <NavBar />
        )}

        {mobileMenu && mobile && (
          <>
            <nav className="mobile animate__animated animate__fadeInDownBig animate__fast">
              <a href="#techs">Tecnologias</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
