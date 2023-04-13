import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div>
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="image1.jpg" alt="Image 1" className="carousel__image" />
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" className="carousel__image" />
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" className="carousel__image" />
          </div>
        </Slider>
      </div>
      <div className="laptop-images">
        <h2 className="laptop-images__title">Надпись</h2>
        <img src="image1.jpg" alt="Image 1" className="laptop-images__image laptop-images__image--1" />
        <img src="image2.jpg" alt="Image 2" className="laptop-images__image laptop-images__image--2" />
        <img src="image3.jpg" alt="Image 3" className="laptop-images__image laptop-images__image--3" />
      </div>
    </div>
  );
};




