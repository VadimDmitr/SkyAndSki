import { useState, useContext } from "react";
// import { cartDataContext } from "contexts/cartContext";

export const Checkout = () => {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		zip: "",
		city: "",
		address: "",
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
		console.log("state ===> ", state);
	}
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
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								First Name
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="firstName"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Last Name
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="lastName"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Email
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="email"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Country
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="contry"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Zip Code
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="zip"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								City
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="city"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Address
							</label>
							<input
								className="checkout__address-form-input"
								required
								type="text"
								name="address"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</form>
				</div>
				<div className="checkout__payment-container">
					<h2>2. Payment</h2>
					<form className="checkout__payment-form">
						<p>Card number</p>
						<input required type="text" />
						<p>Card holder</p>
						<input required type="text" />
						<p>Expiration date</p>
						<p>CVV/CVC</p>
						<p>HTTPS/SSL - Secure connection</p>
					</form>
				</div>
			</div>
		</div>
	);
};
