import "./About.css";

function About() {
  return (
    <div className='about'>
      <div className='about-all'>
        <div className='about-title'>A PROPOS DE MOI</div>
        <div className='about-desc'>
          <div className='about-img'>
            <img className='about-pic' src='./public/Moi.JPG' alt='' />
          </div>
          <div className='about-text'>
            Salut, moi c'est Florian, jeune développeur passionné par la technologie depuis mon plus
            jeune âge et j'adore le développement web que j'ai découvert il y a quelques années.
            Curieux, j'aime apprendre et l'informatique est le terrain de jeu parfait pour cela ! Il
            me reste encore beaucoup (énormément) de choses à apprendre, mais je suis prêt à lire
            toutes les documentations pour m'améliorer !
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
