import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import snowboarderDescending from "images/snowboarder_descending.png";
import snowboarderWhiteJacket from "images/snowboarder_white_jacket.png";
import snowboarderYellowJacket from "images/snowboarder_yellow_jacket.png";

export const Gallery = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	return (
		<div className="gallery">
			<div className="carousel">
				<p className="carousel-images__title">
					Our Gallery
				</p>
				<Slider {...settings}>
					<div>
						<img
							src={snowboarderDescending}
							alt="Snowboarder descending"
							className="carousel__image"
						/>
					</div>
					<div>
						<img
							src={snowboarderWhiteJacket}
							alt="Snowboarder White Jacket"
							className="carousel__image"
						/>
					</div>
					<div>
						<img
							src={snowboarderYellowJacket}
							alt="Snowboarder Yellow Jacket"
							className="carousel__image"
						/>
					</div>
				</Slider>
			</div>
			<div className="laptop-images">
				<p className="laptop-images__title">Our Gallery</p>
				<img
					src={snowboarderDescending}
					alt="Snowboarder descending"
					className="laptop-images__image laptop-images__image--1"
				/>
				<img
					src={snowboarderWhiteJacket}
					alt="Snowboarder White Jacket"
					className="laptop-images__image laptop-images__image--2"
				/>
				<img
					src={snowboarderYellowJacket}
					alt="Snowboarder Yellow Jacket"
					className="laptop-images__image laptop-images__image--3"
				/>
			</div>
		</div>
	);
};