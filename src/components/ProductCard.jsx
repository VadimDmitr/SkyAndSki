export const ProductCard = ({ product }) => {
	return (
		<div className="product" key={product.id}>
			<img src={product.img} alt={product.title} />
			<div className="product__text">
				<p className="product__title">{product.title}</p>
				<p className="product__price">{product.price}</p>
			</div>
		</div>
	);
};
