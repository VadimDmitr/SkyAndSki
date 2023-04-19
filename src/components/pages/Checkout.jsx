// import { useContext } from "react";
// import { cartDataContext } from "contexts/cartContext";

export const Checkout = () => {
	// const { cart } = useContext(cartDataContext);

	// const estimate = cart.reduce(
	// 	(total, current) =>
	// 		total + current.quantity * current.productPrice,
	// 	0
	// );
	// const tax = (estimate / 100) * 10.1;
	// const finalPrice = estimate + tax;

	return (
		<div className="wrapper-mobile-full-screen">
			<div className="checkout">
				<h1>Checkout</h1>
				<div className="checkout__address-container">
					<h2>1. Your Address</h2>
					<form className="checkout__address-form">
						<p>First Name</p>
						<input />
						<p>Last Name</p>
						<input />
						<p>Email</p>
						<input />
						<p>Country</p>
						<input />
						<p>Zip Code</p>
						<input />
						<p>City</p>
						<input />
						<p>Address</p>
						<input />
					</form>
				</div>
				<div className="checkout__payment-container">
					<h2>2. Payment</h2>
					<form className="checkout__payment-form">
						<p>Card number</p>
						<input />
						<p>Card holder</p>
						<input />
						<p>Expiration date</p>
						<p>CVV/CVC</p>
						<p>HTTPS/SSL - Secure connection</p>
					</form>
				</div>
			</div>
		</div>
	);
};
