export const ProductCard = ({ product }) => {
	// this is used in SwitchCategory or Catalog components
	return (
		<div className="product-card" key={product.id}>
			<img className="product-card__img" src={product.img} alt={product.title} />
			<div className="product-card__text">
				<p className="product-card__title">
					{product?.title}
				</p>
				<p className="product-card__price">
					${product?.price}
				</p>
			</div>
		</div>
	);
};
