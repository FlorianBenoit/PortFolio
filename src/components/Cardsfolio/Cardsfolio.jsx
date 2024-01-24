import Flip from "react-reveal/Flip";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Cardsfolio.css";

function Cardsfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flip bottom>
      <div className='all-cards'>
        <div className='material-card' href='/some-article'>
          <Slider {...settings}>
            <div>
              <img
                className='card-picture'
                src='Screenshot 2024-01-23 at 16-24-24 GeekOps.png'
                alt='Image 1'
              />
            </div>
            <div>
              <img
                className='card-picture'
                src='Screenshot 2024-01-23 at 16-31-28 GeekOps.png'
                alt='Image 2'
              />
            </div>
            <div>
              <img
                className='card-picture'
                src='Screenshot 2024-01-23 at 16-31-43 GeekOps.png'
                alt='Image 3'
              />
            </div>
            <div>
              <img
                className='card-picture'
                src='Screenshot 2024-01-23 at 16-32-12 GeekOps.png'
                alt='Image 4'
              />
            </div>
            {/* Ajoutez plus de div avec des images selon vos besoins */}
          </Slider>
          <div className='card-info'>
            <h2 className='card-title'>Wod Experience</h2>
            <p className='card-desc'>Projet réalisé en fin de formation - React TS</p>
          </div>
        </div>
        <div className='material-card' href='/some-article'>
          <div>
            <img
              className='card-picture'
              src='Screenshot 2024-01-23 at 18-25-13 Florian Benoit-Barnet.png'
              alt='Image 1'
            />
          </div>
          {/* Ajoutez plus de div avec des images selon vos besoins */}

          <div className='card-info'>
            <h2 className='card-title'>Portfolio</h2>
            <p className='card-desc'>Le site sur lequel vous êtes actuellement !</p>
          </div>
        </div>
      </div>
    </Flip>
  );
}

export default Cardsfolio;
