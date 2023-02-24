import { Logo, MenuMobile, NavBar } from '@/components';
import { MobileContext } from '@/context/MobileContext';
import useMedia from '@/hooks/useMedia';
import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const mobile = useMedia('(max-width:60rem)');
  const { pathname } = useLocation();
  const { mobileMenu, setMobileMenu } = useContext(MobileContext);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

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
              <Link to="/contact" className="btn-default btn-contact">
                Contato
              </Link>
            </div>
          </>
        )}

        {mobileMenu && mobile && (
          <>
            <nav className="mobile animate__animated animate__fadeInDownBig animate__fast">
              <Link to="/">Sobre mim</Link>
              <Link to="/tech">Tecnologias</Link>
              <Link to="/projects">Projetos</Link>
              <Link to="contact">Contato</Link>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};
