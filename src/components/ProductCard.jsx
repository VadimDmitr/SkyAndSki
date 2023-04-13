export const ProductCard = ({ product }) => {
	// this is used in switch category
	return (
		<div className="product-card" key={product.id}>
			{/* <img src={product.img} alt={product.title} /> */}
			<div className="product-card__text">
				<p className="product-card__title">
					{product?.productName}
				</p>
				<p className="product-card__price">
					{product?.productPrice}
				</p>
			</div>
		</div>
		// <div className="product-card" key={product.id}>
		// 	{/* <img src={product.img} alt={product.title} /> */}
		// 	<div className="product-card__text">
		// 		<p className="product-card__title">
		// 			{product.title}
		// 		</p>
		// 		<p className="product-card__price">
		// 			{product.price}
		// 		</p>
		// 	</div>
		// </div>
	);
};
