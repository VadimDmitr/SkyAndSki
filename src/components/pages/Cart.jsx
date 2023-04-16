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
		if (
			cart.some(
				(cartItem) =>
					cartItem.productName === item.productName
			)
		) {
			let updatedCart = cart;
			updatedCart.find(
				(cartItemLocal) =>
					cartItemLocal.productName === item.productName
			).quantity += quantity;
			setCart([...updatedCart]);
		}
		console.log("cart after setCart ====> ", cart);
	};

	const decreaseQuantity = (item, quantity) => {
		if (
			cart.some(
				(cartItem) =>
					cartItem.productName === item.productName
			)
		) {
			let updatedCart = cart;
			let cartItemQuantity = updatedCart.find(
				(cartItemLocal) =>
					cartItemLocal.productName === item.productName
			).quantity;
			if (cartItemQuantity > 1) {
				updatedCart.find(
					(cartItemLocal) =>
						cartItemLocal.productName === item.productName
				).quantity -= quantity;
				setCart([...updatedCart]);
			}
		}
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
									<p
										className="pointer"
										onClick={() =>
											decreaseQuantity(item, 1)
										}
									>
										-
									</p>
									<p>{item.quantity}</p>
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
