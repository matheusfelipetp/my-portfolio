import { MobileContext } from '@/context/MobileContext';
import { useContext, useEffect, useState } from 'react';
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si';

export const ContactContent = () => {
  const [isSocialVisible, setIsSocialVisible] = useState<boolean>();
  const { mobileMenu } = useContext(MobileContext);

  useEffect(() => {
    setTimeout(() => {
      setIsSocialVisible(true);
    }, 500);
  }, []);

  return (
    <section className={`contact ${mobileMenu && 'opacity'}`}>
      <div className="contact__info">
        <h1 className="title animate__animated animate__fadeInDown">
          <span> &#8249;</span>Contato 📲<span> /&#8250;</span>
        </h1>
        <p className="paragraph animate__animated animate__fadeInUp">
          Entre em contato comigo através das minhas redes sociais. Caso
          prefira, preencha o formulário abaixo e me envie uma mensagem no{' '}
          <span>WhatsApp</span>.
        </p>

        {isSocialVisible && (
          <div className="info__social animate__animated animate__fadeInUp">
            <a
              href="https://www.linkedin.com/in/matheusfelipetp/"
              target="_blank"
            >
              <SiLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/matheusfelipetp/"
              target="_blank"
            >
              <SiInstagram className="social-icon" />
            </a>
            <a href="mailto:matheusfelipetp@outlook.com" target="_blank">
              <SiGmail className="social-icon" />
            </a>
            <a href="https://github.com/matheusfelipetp" target="_blank">
              <SiGithub className="social-icon" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
