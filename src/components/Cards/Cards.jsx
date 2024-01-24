import Zoom from "react-reveal/Zoom";
import "./Cards.css";

function Cards() {
  return (
    <div className='all'>
      <div className='skills'>
        <div className='container'>
          <div className='skill-card'>
            <Zoom top>
              <div className='card'>
                <i className='fas fa-pencil-ruler'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
                    alt=''
                  />
                </i>
                <h4>Javascript</h4>
                <p>Projet Personnel, Projet Scolaire PERSONNEL - O'CLOCK</p>
              </div>
            </Zoom>
            <Zoom top>
              <div className='card'>
                <i className='fas fa-magic'>
                  <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='' />
                </i>
                <h4>Typescript</h4>
                <p>Projet Personnel, Projet Scolaire PERSONNEL - O'CLOCK</p>
              </div>
            </Zoom>
            <Zoom top>
              <div className='card'>
                <i className='fab fa-sketch'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/langfr-1024px-React_Logo_SVG.svg.png'
                    alt=''
                  />
                </i>
                <h4>REACT</h4>
                <p>Redux-Router</p>
                <p>Projet Personnel, Projet Scolaire PERSONNEL - O'CLOCK</p>
              </div>
            </Zoom>
            <Zoom top>
              <div className='card'>
                <i className='fab fa-bitbucket'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1920px-PHP-logo.svg.png'
                    alt=''
                  />
                </i>
                <h4>PHP</h4>
                <p>8.0</p>
                <p>
                  Projet Scolaire <br />
                  PERSONNEL - O'CLOCK
                </p>
              </div>
            </Zoom>
            <Zoom top>
              <div className='card'>
                <i className='fas fa-chart-line'>
                  <img
                    src='https://s.w.org/style/images/about/WordPress-logotype-wmark.png'
                    alt=''
                  />
                </i>
                <h4>Wordpress</h4>
                <p>
                  Projet Scolaire <br />
                  PERSONNEL - O'CLOCK
                </p>
              </div>
            </Zoom>
            <Zoom top>
              <div className='card'>
                <i className='fas fa-file-code'>
                  {" "}
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png'
                    alt=''
                  />
                </i>
                <h4>Git Github</h4>
                <p>Projet Personnel, Projet Scolaire PERSONNEL - O'CLOCK</p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
