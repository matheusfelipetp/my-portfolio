import 'animate.css';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import ImgMain from '../../assets/main.png';
import Button from '../Button/button';

interface IMainContent {
  mobileMenu: boolean;
}

const MainContent = ({ mobileMenu }: IMainContent) => {
  const [isBtnVisible, setIsBtnVisible] = useState<boolean>(false);
  const [isBioVisible, setIsBioVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBtnVisible(true);
    }, 800);

    setTimeout(() => {
      setIsBioVisible(true);
    }, 500);
  }, []);

  return (
    <main className="main">
      <div className={`main__content ${mobileMenu && 'opacity'}`}>
        <h1 className="title animate__animated animate__fadeInLeft">
          Olá, meu nome é <span> Matheus</span>👋🏻
        </h1>
        {isBioVisible && (
          <p className="bio animate__animated animate__fadeInUp">
            Sou <span>Desenvolvedor Full-Stack</span> e apaixonado por criar
            soluções inovadoras!
          </p>
        )}
        {isBtnVisible && (
          <div className="content__btns animate__animated animate__fadeInUp">
            <Button className="btn-default btn-contact">
              Entre em contato
            </Button>
            <Button className="btn-default btn-projects">
              Veja meus projetos
            </Button>
            <a href="https://github.com/matheusfelipetp" target="_blank">
              <BsGithub className="icon-github" />
            </a>
          </div>
        )}
      </div>

      <img
        className={`main__img ${mobileMenu && 'opacity'}`}
        src={ImgMain}
        style={{ maxWidth: '100%' }}
        alt="Foto de perfil"
      />
    </main>
  );
};

export default MainContent;
