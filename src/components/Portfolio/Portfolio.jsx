import Cardsfolio from "../Cardsfolio/Cardsfolio";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className='port'>
      <div className='port-all'>
        <div className='port-text'>
          <div className='port-title'>PORTFOLIO</div>
        </div>
        <div className='port-body'>
          <div className='port-cards'>
            <Cardsfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
