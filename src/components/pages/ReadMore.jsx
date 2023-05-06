import snowmobile from "images/why_us_snowmobile.jpg";
import snowboard from "images/why_us_snowboard_man.jpg";
import boy from "images/why_us_boy.jpg";
import resort from "images/why_us_resort.jpg";

export const ReadMore = () => {
	return (
		<div className="read-more">
			<div className="read-more__about">
				<h1 className="read-more__title">Why choose US?</h1>
				<div className="read-more__content">
					<img
						src={snowmobile}
						alt="Snowmobile"
						className="read-more__image"
					/>
					<h2 className="read-more__subtitle">
						Our mission is to provide comprehensive and
						reliable service for all your winter sports
						equipment, including board accessories and
						repairs.
					</h2>
					<img
						src={snowboard}
						alt="Snowboard man"
						className="read-more__image"
					/>
					<h2 className="read-more__subtitle">
						We strive to make the repair process as
						convenient and efficient as possible.
					</h2>
					<img
						src={boy}
						alt="Boy"
						className="read-more__image"
					/>
					<h2 className="read-more__subtitle">
						We are dedicated to ensuring that your gear is
						in top condition, and we offer a comprehensive
						warranty and guarantee to give you peace of
						mind.
					</h2>
					<img
						src={resort}
						alt="Resort"
						className="read-more__image"
					/>
					<h2 className="read-more__subtitle">
						Our team is committed to providing you with the
						best possible experience and ensuring that you
						are fully satisfied with our work.
					</h2>
				</div>
			</div>
		</div>
	);
};
