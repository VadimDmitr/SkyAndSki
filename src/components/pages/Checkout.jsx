import { useState, useContext } from "react";
import { cartDataContext } from "contexts/cartContext";
import { BASEURL } from "api/index";
import cardChip from "images/icons/chip.svg";
import shield from "images/icons/shield.svg";

export const Checkout = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		zip: "",
		city: "",
		address: "",
		cardNumber: "",
		cardHolder: "",
		expirationMonth: "",
		expirationYear: "",
		cvv: "",
	});

	const { cart } = useContext(cartDataContext);

	let estimate = 0;
	let tax = 0;
	let finalPrice = 0;
	if (cart.length > 0) {
		const estimate = cart.reduce(
			(total, current) =>
				total + current.quantity * current.productPrice,
			0
		);
		const tax = (estimate / 100) * 10.1;
		const finalPrice = estimate + tax;
	}

	const URL = BASEURL + "orders";

	const order = {
		products: [
			{
				productId: "1",
				name: "NewProduct",
				quantity: "4",
				price: "400",
			},
			{
				productId: "2",
				name: "NewProduct2",
				quantity: "2",
				price: "150",
			},
		],
		bill: "550",
	};

	const handleChange = (evt) => {
		const value = evt.target.value;
		setFormData({
			...formData,
			[evt.target.name]: value,
		});
		console.log("state ===> ", formData);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			process.env.USER_BEARER_TOKEN
		);
		myHeaders.append("Content-Type", "application/json");

		fetch(URL, {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(order)
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("result ====> ", result);
				// setProducts([...JSON.parse(result).products]);
			})
			.catch((error) => console.log("error", error));
		console.log("azaza");
	};

	return (
		<div className="wrapper-mobile-full-screen">
			<form
				className="checkout"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h1 className="checkout__header">Checkout</h1>
				<div className="checkout__address-container">
					<h2 className="checkout__sub-header">
						1. Your Address
					</h2>
					<div className="checkout__address-form">
						<div className="checkout__address-form-row-double">
							<div className="checkout__address-form-container">
								<label className="checkout__address-form-label">
									First Name
								</label>
								<input
									className="checkout__address-form-input"
									// required
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
									// required
									type="text"
									name="lastName"
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Email
							</label>
							<input
								className="checkout__address-form-input"
								// required
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
								// required
								type="text"
								name="contry"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__address-form-row-double checkout__address-form-row-double--reverse">
							<div className="checkout__address-form-container">
								<label className="checkout__address-form-label">
									Zip Code
								</label>
								<input
									className="checkout__address-form-input"
									// required
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
									// required
									type="text"
									name="city"
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>
						<div className="checkout__address-form-container">
							<label className="checkout__address-form-label">
								Address
							</label>
							<input
								className="checkout__address-form-input"
								// required
								type="text"
								name="address"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
				</div>
				<div className="checkout__payment-container">
					<h2 className="checkout__sub-header">
						2. Payment
					</h2>
					<div className="checkout__payment-form">
						<div className="checkout__payment-form-row-outer align-items-end">
							<div className="checkout__payment-form-row">
								<label className="checkout__payment-form-label">
									Card number
								</label>
								<input
									className="checkout__payment-form-input"
									// required
									type="text"
									name="cardNumber"
									onChange={(event) => handleChange(event)}
								/>
							</div>
							<img src={cardChip} alt="card chip" />
						</div>
						<div className="checkout__payment-form-row">
							<label className="checkout__payment-form-label">
								Card holder
							</label>
							<input
								className="checkout__payment-form-input"
								// required
								type="text"
								name="cardHolder"
								onChange={(event) => handleChange(event)}
							/>
						</div>
						<div className="checkout__payment-form-row-outer">
							<div className="checkout__payment-form-row">
								<label className="checkout__payment-form-label">
									Expiration date
								</label>
								<div className="checkout__payment-form-row-outer checkout__payment-form-row-outer--exp align-items-start">
									<input
										className="checkout__payment-form-input checkout__payment-form-input--exp"
										// required
										type="text"
										name="expirationMonth"
										onChange={(event) =>
											handleChange(event)
										}
									/>
									<input
										className="checkout__payment-form-input  checkout__payment-form-input--exp"
										// required
										type="text"
										name="expirationYear"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
							</div>
							<div className="checkout__payment-form-row">
								<label className="checkout__payment-form-label">
									CVV/CVC
								</label>
								<input
									className="checkout__payment-form-input  checkout__payment-form-input--cvv"
									// required
									type="text"
									name="cvv"
									onChange={(event) => handleChange(event)}
								/>
								<p>3 or 4 digits</p>
							</div>
						</div>
						<div className="checkout__payment-form-info-container">
							<img src={shield} alt="card shield" />
							<p className="checkout__payment-form-info">
								HTTPS/SSL - Secure connection
							</p>
						</div>
					</div>
				</div>
				<div className="checkout__estimate-container">
					<div className="cart-checkout-container__row">
						<p className="cart-checkout-container__before-total">
							Shipping & Handling
						</p>
						<p className="cart-checkout-container__before-total">
							Free
						</p>
					</div>
					<div className="cart-checkout-container__row">
						<p className="cart-checkout-container__before-total">
							Price
						</p>
						<p className="cart-checkout-container__before-total">
							${cart.length > 0 ? estimate : <></>}
						</p>
					</div>
					<div className="cart-checkout-container__row">
						<p className="cart-checkout-container__before-total">
							Tax
						</p>
						{/* <p>Tax</p> */}
						<p className="cart-checkout-container__before-total">
							{/* ${tax.toFixed(2)}$ */}
							{cart.length > 0 ? tax : <></>}
						</p>
					</div>
					<div className="cart-checkout-container__row">
						<p className="cart-checkout-container__total">
							GRAND TOTAL
						</p>
						<p className="cart-checkout-container__total">
							{/* ${finalPrice.toFixed(2)}$ */}
							{cart.length > 0 ? finalPrice : <></>}
						</p>
					</div>
					{/* <Link to={"/checkout"ijuh */}
				</div>
				<div className="checkout__complete-container">
					<button className="button" type="submit">
						Complete payment
					</button>
					<p className="checkout__purchase-terms">
						By placing your order you agree to our{" "}
						<a
							className="checkout__purchase-terms-link"
							href="#"
						>
							Terms & Conditions
						</a>{" "}
						and you understand that we will process your
						personal data on the basis of our{" "}
						<a
							className="checkout__purchase-terms-link"
							href="#"
						>
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</form>
		</div>
	);
};