import { Link } from "react-router-dom";

export const OrderCard = ({ order }) => {
	return (
		<div className="order-card">
			<p className="order-card__date-created">{order.createdAt.slice(0, 10)}</p>
			<p className="order-card__total">{order.total}</p>
			{/* <p>{order.products[0].title}</p> */}
			{order.products.map((product) => (
				<p className="order-card__product-title">{product.title}</p>
			))}
			<Link to={`/order/${order._id}`}>
				<button className="button pointer">
					MORE INFORMATION
				</button>
			</Link>
		</div>
	);
};
