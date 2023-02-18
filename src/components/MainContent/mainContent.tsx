import 'animate.css';
import ImgMain from '../../assets/main.png';

const MainContent = () => {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="title animate__animated animate__fadeInLeft">
          Olá, meu nome é <span> Matheus</span>👋🏻
        </h1>
        <p className="bio">
          Sou <span>Desenvolvedor Full-Stack</span> e apaixonado por criar
          soluções inovadoras!
        </p>
      </div>

      <div>
        <img
          className="main__img"
          src={ImgMain}
          style={{ maxWidth: '100%' }}
          alt="Foto de perfil"
        />
      </div>
    </main>
  );
};

export default MainContent;
