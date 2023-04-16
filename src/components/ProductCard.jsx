import snowboard from "images/snowboard_light.png";

export const ProductCard = ({ product }) => {
	// this is used in SwitchCategory or Catalog components
	return (
		<div className="product-card" key={product.id}>
			<img src={snowboard} alt={product.title} />
			<div className="product-card__text">
				<p className="product-card__title">
					{product?.productName}
				</p>
				<p className="product-card__price">
					${product?.productPrice}
				</p>
			</div>
		</div>
	);
};
