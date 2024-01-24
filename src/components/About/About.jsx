import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";

function About() {
  return (
    <div className='about'>
      <div className='about-all'>
        <div className='about-title'>A PROPOS DE MOI</div>
        <div className='about-desc'>
          <div className='about-img'>
            <img className='about-pic' src='Moi.JPG' alt='' />
          </div>
          <div className='about-text'>
            Salut, moi c'est Florian, jeune développeur passionné par la technologie depuis mon plus
            jeune âge et j'adore le développement web que j'ai découvert il y a quelques années.
            Curieux, j'aime apprendre et l'informatique est le terrain de jeu parfait pour cela ! Il
            me reste encore beaucoup (énormément) de choses à apprendre, mais je suis prêt à lire
            toutes les documentations pour m'améliorer !
            <div className='socials'>
              <div className='social'>
                <a
                  href='https://github.com/FlorianBenoit?tab=repositories'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='social-icon'>
                    <FontAwesomeIcon icon={faGithub} className='social-icon' />
                  </div>
                </a>
              </div>

              <div className='social'>
                <a
                  href='www.linkedin.com/in/florian-benoit-barnet'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='social-icon'>
                    <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
                  </div>
                </a>
              </div>

              <div className='social'>
                <a className='link-cv' href='CV.pdf' download='CVDocument.pdf'>
                  <div className='social-icon'>
                    <FontAwesomeIcon icon={faFilePdf} className='social-icon' />
                  </div>
                </a>
              </div>

              <div className='email-wrapper'>
                <a href={`mailto:f.benoitbarnet@gmail.com`} target='_blank' rel='noreferrer'>
                  <div className='social-icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
