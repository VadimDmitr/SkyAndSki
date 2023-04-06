import snowboard from "../images/snowboard_light.png";

export const Product = () => {
	return (
		<div className="product">
			<img src={snowboard} alt="snowboard" />
			<div className="product__content">
				<p>title</p>
				<p>price</p>
				<p>description</p>
                <span>-</span>
                <span>1</span>
                <span>+</span>
                <p>Add to cart</p>
			</div>
		</div>
	);
};
