import useMedia from '../../hooks/useMedia';
import Button from '../Button/button';
import Logo from '../Logo/logo';
import MenuMobile from '../MenuMobile/menuMobile';
import NavBar from '../NavBar/navbar';
import ToggleMode from '../ToggleMode/toggleMode';

interface IHeader {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ mobileMenu, setMobileMenu }: IHeader) => {
  const mobile = useMedia('(max-width:60rem)');

  return (
    <header className="header animate__animated animate__fadeInDown">
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

export default Header;
