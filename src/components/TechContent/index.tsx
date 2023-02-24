import { MobileContext } from '@/context/MobileContext';
import 'animate.css';
import { useContext, useEffect, useState } from 'react';
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const TechContent = () => {
  const [isHtmlVisible, setIsHtmlVisible] = useState<boolean>(false);
  const [isCssVisible, setIsCssVisible] = useState<boolean>(false);
  const [isTailwindVisible, setIsTailwindVisible] = useState<boolean>(false);
  const [isSassVisible, setIsSassVisible] = useState<boolean>(false);
  const [isJSVisible, setIsJSVisible] = useState<boolean>(false);
  const [isReactVisible, setIsReactVisible] = useState<boolean>(false);
  const [isTSVisible, setIsTSVisible] = useState<boolean>(false);
  const [isNodeVisible, setIsNodeVisible] = useState<boolean>(false);
  const [isSQLVisible, setIsSQLVisible] = useState<boolean>(false);
  const [isGitVisible, setIsGitVisible] = useState<boolean>(false);

  const { mobileMenu } = useContext(MobileContext);

  useEffect(() => {
    setTimeout(() => {
      setIsHtmlVisible(true);
    }, 200);

    setTimeout(() => {
      setIsCssVisible(true);
    }, 500);

    setTimeout(() => {
      setIsTailwindVisible(true);
    }, 700);

    setTimeout(() => {
      setIsSassVisible(true);
    }, 900);

    setTimeout(() => {
      setIsJSVisible(true);
    }, 1100);

    setTimeout(() => {
      setIsReactVisible(true);
    }, 1300);

    setTimeout(() => {
      setIsTSVisible(true);
    }, 1500);

    setTimeout(() => {
      setIsNodeVisible(true);
    }, 1700);

    setTimeout(() => {
      setIsSQLVisible(true);
    }, 1900);

    setTimeout(() => {
      setIsGitVisible(true);
    }, 2100);
  }, []);

  return (
    <section className={`tech ${mobileMenu && 'opacity'}`}>
      <div className="tech__info">
        <h1 className="title animate__animated animate__fadeInDown">
          <span> &#8249;</span>Tecnologias 🚀<span> /&#8250;</span>
        </h1>
        <p className="paragraph animate__animated animate__fadeInUp">
          Essas são as tecnologias que possuo conhecimento no momento.
        </p>
      </div>

      <div className="tech-icon">
        {isHtmlVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiHtml5 />
            <p>HTML</p>
          </div>
        )}
        {isCssVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiCss3 />
            <p>CSS</p>
          </div>
        )}
        {isTailwindVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiTailwindcss />
            <p>Tailwind</p>
          </div>
        )}
        {isSassVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiSass />
            <p>SASS</p>
          </div>
        )}
        {isJSVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiJavascript />
            <p>JavaScript</p>
          </div>
        )}
        {isReactVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiReact />
            <p>React</p>
          </div>
        )}
        {isTSVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiTypescript />
            <p>TypeScript</p>
          </div>
        )}
        {isNodeVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiNodedotjs />
            <p>NodeJS</p>
          </div>
        )}
        {isSQLVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiPostgresql />
            <p>PostgreSQL</p>
          </div>
        )}
        {isGitVisible && (
          <div className="icon__content animate__animated animate__flipInX">
            <SiGit />
            <p>Git</p>
          </div>
        )}
      </div>
    </section>
  );
};
