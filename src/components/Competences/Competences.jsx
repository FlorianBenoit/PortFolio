import Cards from "../Cards/Cards";
import "./Competences.css";

function Competences() {
  return (
    <div className='comp'>
      <div className='comp-all'>
        <div className='comp-text'>
          <div className='comp-title'>COMPÉTENCES</div>
          <div className='comp-desc'>
            Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on
            en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.
          </div>
        </div>
        <div className='comp-body'>
          <div className='comp-cards'>
            <Cards />
          </div>
          <div className='comp-cv'>
            Vous pouvez également télécharger mon CV{" "}
            <a className='link-cv' href='public/CV.pdf' download='CVDocument.pdf'>
              ICI !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
