import { useState } from 'react';
import useMedia from '../../hooks/useMedia';
import Button from '../Button/button';
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
        {mobile ? (
          <>
            <Logo />
            <div className="content__btns">
              <ToggleMode />
              <MenuMobile
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </div>
          </>
        ) : (
          <>
            <NavBar />
            <Logo />
            <div className="content__btns">
              <ToggleMode />
              <Button className="btn-contact">Contato</Button>
            </div>
          </>
        )}

        {mobileMenu && mobile && (
          <>
            <nav className="mobile animate__animated animate__fadeInDownBig animate__fast">
              <a href="#about-me">Sobre mim</a>
              <a href="#techs">Tecnologias</a>
              <a href="#projects">Projetos</a>
              <a href="#projects">Contato</a>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
