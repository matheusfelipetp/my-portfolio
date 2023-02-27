import animais from '@/assets/animais.png';
import burguer from '@/assets/burguer.png';
import dogs from '@/assets/dogs.png';
import ezBracket from '@/assets/ezbracket.png';
import foodJP from '@/assets/foodJP.png';
import homeYou from '@/assets/home-you.png';
import kenzieHub from '@/assets/kenzie-hub.png';
import portfolio from '@/assets/portfolio.png';
import stage from '@/assets/stage.png';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([EffectCoverflow, Pagination]);

export const ProjectCards = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 50,
        slideShadows: false,
      }}
      className="projects-cards animate__animated animate__fadeIn"
    >
      <SwiperSlide>
        <div className="card">
          <img src={portfolio} alt="Meu portfólio" />
          <div className="card__content">
            <h2>Meu portfólio</h2>
            <p>
              Esse site aqui mesmo que você está vendo! Meu portfólio pessoal
              foi codado por mim com muito amor e carinho, utilizando
              TypeScript, React e SASS.
            </p>

            <div className="card__btns">
              <a className="btn-default btn-contact" href="" target="_blank">
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/my-portfolio"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={ezBracket} alt="Ez Bracket" />
          <div className="card__content">
            <h2>Ez Bracket</h2>
            <p>
              Essa aplicação permite que um usuário cadastrado crie e gerencie
              diferentes tipos de torneio, mantendo um histórico dos encerrados
              e dos que estão em andamento. Além disso, poderá definir um nome,
              regras e registrar os participantes. O sistema ainda permitirá
              manter um histórico dos vencedores.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://ez-bracket.vercel.app/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/ez-Bracket/ez-bracket"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={dogs} alt="Dogs" />
          <div className="card__content">
            <h2>Dogs</h2>
            <p>
              Rede social para cachorros, onde o usuário pode logar/se
              cadastrar, postar suas fotos, fazer comentários e, até mesmo,
              visualizar as estatísticas da sua conta.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://dogs-matheusfelipetp.vercel.app/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/dogs"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={burguer} alt="Burguer Kenzie" />
          <div className="card__content">
            <h2>Burguer Kenzie</h2>
            <p>
              Projeto com objetivo de criar uma aplicação que possibilitasse o
              usuário adicionar/remover itens do carrinho, além de filtrá-los
              por nome ou categoria.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://react-kenzie-burguer.vercel.app/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/burguer-kenzie"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={foodJP} alt="Food JP" />
          <div className="card__content">
            <h2>Food JP</h2>
            <p>
              Projeto da comunidade Codelândia com o objetivo de criar uma
              página para um resturante japonês fictício, utilizando Flexbox e
              Grid layout, além do JavaScript para criação do menu mobile.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://matheusfelipetp.github.io/foodJP/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/foodJP"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={kenzieHub} alt="Kenzie Hub" />
          <div className="card__content">
            <h2>Kenzie Hub</h2>
            <p>
              Projeto com objetivo de criar uma aplicação, onde o usuário
              pudesse realizar o seu cadastro e logar na sua conta,
              adicionando/removendo tecnologias que possui domínio, conseguindo
              editá-las conforme avança em seus estudos ou, ate mesmo, excluir
              da lista. Também foi criado um sistema de autologin baseado no
              token do usuário.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://kenzie-hub-matheusfelipetp.vercel.app/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/kenzie-hub"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={animais} alt="Animais Fantásticos" />
          <div className="card__content">
            <h2>Animais Fantásticos</h2>
            <p>
              Site voltado para informações sobre animais. Foi utilizado
              Programação Orientada a Objetos, além de consumo de API e clean
              code. A aplicação está responsiva para todas as telas.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://matheusfelipetp.github.io/animais-fantasticos/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/animais-fantasticos"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={homeYou} alt="Home You" />
          <div className="card__content">
            <h2>Home You</h2>
            <p>
              Projeto da comunidade Codelândia, feito apenas em HTML e CSS, com
              o objetivo de criar uma página para uma empresa fictícia de
              aluguel e venda de imóveis, utilizando Flexbox e Grid layout.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://matheusfelipetp.github.io/homeyou/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/homeyou"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <img src={stage} alt="Stage Dashboard" />
          <div className="card__content">
            <h2>Stage Dashboard</h2>
            <p>
              O objetivo era criar uma plataforma de gerenciamento empresarial,
              onde tanto o funcionário, quanto o administrador pudessem ter
              acesso aos seus respectivos dashboards com funcionalidades
              diferentes, desde a visualição de informações simples até a
              contratação/demissão de um funcionário. O design também foi criado
              do zero.
            </p>

            <div className="card__btns">
              <a
                className="btn-default btn-contact"
                href="https://matheusfelipetp.github.io/stage-dashboard/"
                target="_blank"
              >
                Live Preview
              </a>
              <a
                className="btn-default btn-projects"
                href="https://github.com/matheusfelipetp/stage-dashboard"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
