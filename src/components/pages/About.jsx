import jump from "images/about_jump.jpg";
import descend from "images/about_descend.jpg";
import snowboards from "images/about_snowboards.jpg";
import together from "images/about_together.jpg";

export const About = () => {
  return (
    <div className="wrapper">
      <div className="about">
        <h1 className="about__title">About Sky & Ski</h1>
				<div className="about__content">
          <img src={jump} alt="Jump" />
        <h2 className="about__subtitle">
          Sky & Ski is a leading eCommerce platform for winter sports enthusiasts...
        </h2>
        <img src={descend} alt="Descend" />
          <h2 className="about__subtitle">
            Our mission is to help our customers enjoy the winter season...
          </h2>
					<img src={snowboards} alt="Snowboards" />
          <h2 className="about__subtitle">
            We are dedicated to providing an exceptional shopping experience...
          </h2>
          <img src={together} alt="Together" />
          <h2 className="about__subtitle">
            Thank you for choosing Sky & Ski with our Team!<br/> And we look forward to serving all your needs!
          </h2>
        </div>
      </div>
    </div>
  );
};
