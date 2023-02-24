import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Sobre mim</Link>
      <Link to="/tech">Tecnologias</Link>
      <Link to="/projects">Projetos</Link>
    </nav>
  );
};
