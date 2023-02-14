import 'animate.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

interface IMenuMobile {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({ mobileMenu, setMobileMenu }: IMenuMobile) => {
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

export default MenuMobile;
