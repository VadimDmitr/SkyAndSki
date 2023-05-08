import { Link } from "react-router-dom";

export const OrderCard = ({ order }) => {
	return (
		<div>
			<p>{order.createdAt.slice(0, 9)}</p>
			<p>{order.total}</p>
			{/* <p>{order.products[0].title}</p> */}
			{order.products.map((product) => (
				<p>{product.title}</p>
			))}
			<Link to={`/order/${order._id}`}>
				<button className="button pointer">
					MORE INFORMATION
				</button>
			</Link>
		</div>
	);
};
