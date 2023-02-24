import { Button, Logo, MenuMobile, NavBar } from '@/components';
import { MobileContext } from '@/context/MobileContext';
import useMedia from '@/hooks/useMedia';
import { useContext } from 'react';

export const Header = () => {
  const mobile = useMedia('(max-width:60rem)');
  const { mobileMenu } = useContext(MobileContext);

  return (
    <header className="header animate__animated animate__fadeInDown">
      <div className="header__content">
        {mobile ? (
          <>
            <Logo />
            <div className="content__btns">
              <MenuMobile />
            </div>
          </>
        ) : (
          <>
            <NavBar />
            <Logo />
            <div className="content__btns">
              <Button className="btn-default btn-contact">Contato</Button>
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
