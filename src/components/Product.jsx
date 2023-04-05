export const Product = ({ product }) => {
	return (
		<div className="product" key={product.id}>
			<img src={product.img} alt={product.name} />
			<div className="product__text">
				<p className="product__title">{product.name}</p>
				<p className="product__price">{product.price}</p>
			</div>
		</div>
	);
};
