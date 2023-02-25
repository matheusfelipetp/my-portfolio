import { MobileContext } from '@/context/MobileContext';
import { useContext } from 'react';

export const ProjectContent = () => {
  const { mobileMenu } = useContext(MobileContext);

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
      </div>
    </section>
  );
};
