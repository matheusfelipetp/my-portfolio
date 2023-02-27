import { ProjectCards } from '@/components';
import { MobileContext } from '@/context/MobileContext';
import { useContext, useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

export const ProjectContent = () => {
  const [isBtnVisible, setIsBtnVisible] = useState<boolean>(false);
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const { mobileMenu } = useContext(MobileContext);

  useEffect(() => {
    setTimeout(() => {
      setIsBtnVisible(true);
    }, 600);

    setTimeout(() => {
      setIsCardVisible(true);
    }, 900);
  }, []);

  return (
    <section className={`projects ${mobileMenu && 'opacity'}`}>
      <div className="projects__info">
        <h1 className="title animate__animated animate__fadeInDown">
          <span> &#8249;</span>Projetos ⚙️<span> /&#8250;</span>
        </h1>
        <p className="paragraph animate__animated animate__fadeInUp">
          Abaixo, estão listados alguns dos principais projetos que desenvolvi.
          Caso deseje visualizar todos, acesse o meu <span>GitHub</span>.
        </p>

        {isBtnVisible && (
          <a
            className="btn-github animate__animated animate__fadeInUp"
            href="https://github.com/matheusfelipetp"
            target="_blank"
          >
            Ver todos os projetos
            <BsArrowRightShort className="arrow" />
          </a>
        )}
      </div>

      {isCardVisible && <ProjectCards />}
    </section>
  );
};
