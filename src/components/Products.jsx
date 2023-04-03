export const Products = ({ products }) => {
	return (
		<div className="products">
			{products.map((card) => {
				return (
					<div className="product" key={card.id}>
						<img src={card.img} alt={card.title} />
						<div className="product__text">
							<p className="product__title">{card.title}</p>
							<p className="product__price">{card.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
