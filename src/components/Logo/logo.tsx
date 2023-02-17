import logo from '../../assets/Logo.svg';

const Logo = () => {
  return (
    <img
      className="img-logo"
      style={{ maxWidth: '50px' }}
      src={logo}
      alt="Matheus Felipe - Logo"
    />
  );
};

export default Logo;
