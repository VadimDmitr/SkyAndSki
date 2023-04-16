import { useContext } from "react";
import { cartDataContext } from "contexts/cartContext";
import snowboard from "images/snowboard_light.png";
import cross from "images/icons/cross.svg";

export const Cart = () => {
	const { cart, setCart } = useContext(cartDataContext);

	const getCartValue = () => {
		console.log("cart inside getCartValue =====> ", cart);
	};

	const increaseQuantity = (item, quantity) => {
		if (cart) {
			if (cart[item.title]) {
				// If the item exists, update its quantity
				const updatedCart = {
					...cart,
					[item.title]: {
						...cart[item.title],
						quantity: cart[item.title].quantity + quantity,
					},
				};
				setCart(updatedCart);
			} else {
				// If the item doesn't exist, add it to the cart with the specified quantity
				const updatedCart = {
					...cart,
					[item.title]: {
						...item,
						quantity,
					},
				};
				setCart(updatedCart);
			}
		}
		console.log("cart after setCart ====> ", cart);
	};

	return (
		<div className="wrapper">
			<div className="cart">
				<h2>Cart</h2>
				<div className="cart__items">
					{cart.map((item) => (
						<div className="cart-item">
							<img
								className="cart-item__img"
								src={snowboard}
								alt="snowboard"
							/>
							<div className="cart-item__content">
								<p className="cart-item__title">
									{item.productName}
								</p>
								<img
									src={cross}
									alt="remove item from cart"
								/>
								<p>120$</p>
								<div className="cart-item">
									<p className="pointer">-</p>
									<p>
										{item.quantity}
									</p>
									<p
										className="pointer"
										onClick={() =>
											increaseQuantity(item, 1)
										}
									>
										+
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<button onClick={() => getCartValue()}>
					Click
				</button>
			</div>
		</div>
	);
};
