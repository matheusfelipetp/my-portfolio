import logo from '@/assets/Logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img
        className="img-logo"
        style={{ maxWidth: '50px' }}
        src={logo}
        alt="Matheus Felipe - Logo"
      />
    </Link>
  );
};
