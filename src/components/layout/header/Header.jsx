import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Hamburger } from "components/layout/header/Hamburger";
import { MobileMenu } from "components/layout/header/MobileMenu";
import { Logo } from "components/Logo";
import search from "images/icons/searchRed.svg";
import cart from "images/icons/cartRed.svg";
import account from "images/icons/accountRed.svg";
import language from "images/icons/languageRed.svg";
//import { Logo } from "components/Logo";
//import search from "images/icons/search.svg";
//import cart from "images/icons/cart.svg";
//import account from "images/icons/account.svg";
//import language from "images/icons/language.svg";

const HeaderElement = styled.header`
	// color: ${({currentPath}) => (currentPath === "/") ? "white" : "red"};

	// p {
	// 	color: ${({currentPath}) => (currentPath === "/") ? "white" : "red"};
	// }
	.nav__link-text {
		color: ${({currentPath}) => (currentPath === "/") ? "white" : "red"};
	}
`

export const Header = () => {
	const currentPath = useLocation().pathname;
	console.log(currentPath);
	const [openMobileMenu, setOpenMobileMenu] =
		useState(false);

	// const navigate = useNavigate();
	const { userData } = useContext(userDataContext);

	useEffect(() => {
		// console.log("userData =====> ", userData);
		// if (userData === null) navigate("/");
		// if (userData.token === null) navigate ("/");
	});

	return (
		<HeaderElement className="header" currentPath={currentPath}>
			<nav className="nav-mobile mobile">
				<NavLink className="nav__link" to={"/"}>
					<Logo />
				</NavLink>
				<div className="nav-mobile__right-group">
					<NavLink className="nav__link" to={"/search"}>
						<img
							className="pointer"
							src={search}
							alt="search"
						/>
					</NavLink>
					<NavLink className="nav__link" to={"/cart"}>
						<img
							className="pointer"
							src={cart}
							alt="cart"
						/>
					</NavLink>
					<NavLink className="nav__link" to={"/account"}>
						<img
							className="pointer"
							src={account}
							alt="account"
						/>
					</NavLink>
					<Hamburger
						openMobileMenu={openMobileMenu}
						setOpenMobileMenu={setOpenMobileMenu}
					/>
				</div>
				<MobileMenu
					openMobileMenu={openMobileMenu}
					setOpenMobileMenu={setOpenMobileMenu}
				/>
			</nav>

			<nav className="nav desktop">
				<NavLink className="nav__link" to={"/"}>
					<Logo />
				</NavLink>
				<div className="nav__middle-group">
					<NavLink className="nav__link" to={"/about"}>
						<p className="nav__link-text">About</p>
					</NavLink>
					<NavLink className="nav__link" to={"/shop"}>
						<p className="nav__link-text">Shop</p>
					</NavLink>
					<NavLink className="nav__link" to={"/contact"}>
						<p className="nav__link-text">Contact</p>
					</NavLink>
				</div>
				<div className="nav__right-group">
					<NavLink className="nav__link" to={"/language"}>
						<img
							className="nav__navigate-language"
							src={language}
							alt="language"
						/>
					</NavLink>
					<NavLink className="nav__link" to={"/search"}>
						<img
							className="nav__navigate-search"
							src={search}
							alt="search"
						/>
					</NavLink>
					<NavLink className="nav__link" to={"/cart"}>
						<img
							className="nav__navigate-cart"
							src={cart}
							alt="cart"
						/>
					</NavLink>
					{Object.keys(userData).length === 0 ? (
						<NavLink className="nav__link" to={"/login"}>
							<img
								className="nav__navigate-account"
								src={account}
								alt="account"
							/>
						</NavLink>
					) : (
						<NavLink className="nav__link" to={"/account"}>
							<img
								className="nav__navigate-account"
								src={account}
								alt="account"
							/>
						</NavLink>
					)}
				</div>
			</nav>
		</HeaderElement>
	);
};
