import { MobileContext } from '@/context/MobileContext';
import 'animate.css';
import { useContext } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const MenuMobile = () => {
  const { mobileMenu, setMobileMenu } = useContext(MobileContext);

  return (
    <button
      className="btn-mobile"
      aria-label="Menu"
      type="button"
      onClick={() => setMobileMenu(!mobileMenu)}
    >
      {mobileMenu ? (
        <AiOutlineClose
          aria-label="Fechar Menu"
          className="animate__animated animate__flipInX"
        />
      ) : (
        <AiOutlineMenu
          aria-label="Abrir Menu"
          className="animate__animated animate__flipInX"
        />
      )}
    </button>
  );
};
