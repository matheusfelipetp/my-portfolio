import ToggleMode from '../ToggleMode/toggleMode';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#techs">Tecnologias</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
      <ToggleMode />
    </nav>
  );
};

export default NavBar;
