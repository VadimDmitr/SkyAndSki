import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "components/Logo";
import { Hamburger } from "components/layout/header/Hamburger";
import { MobileMenu } from "components/layout/header/MobileMenu";
import search from "images/icons/search.svg";
import cart from "images/icons/cart.svg";
import account from "images/icons/account.svg";
import language from "images/icons/language.svg";

export const Header = () => {
	const [openMobileMenu, setOpenMobileMenu] =
		useState(false);

	return (
		<header className="header">
			<nav className="nav-mobile mobile">
				<Logo />
				<div className="nav-mobile__right-group">
					<img
						className="pointer"
						src={search}
						alt="search"
					/>
					<img className="pointer" src={cart} alt="cart" />
					<img
						className="pointer"
						src={account}
						alt="account"
					/>
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
			
				<NavLink to={"/"}>
					<Logo />
				</NavLink>
				<div className="nav__middle-group">
					<NavLink className="nav__link" to={"/about"}>
						<p>About</p>
					</NavLink>
					<NavLink className="nav__link" to={"/shop"}>
						<p>Shop</p>
					</NavLink>
					<NavLink className="nav__link" to={"/contact"}>
						<p>Contact</p>
					</NavLink>
				</div>
				<div className="nav__right-group">
					<NavLink
						activeClassName="nav__nav-link--active"
						to={"/language"}
					>
						<img
							className="nav__navigate-language"
							src={language}
							alt="language"
						/>
					</NavLink>
					<NavLink
						activeClassName="nav__nav-link--active"
						to={"/search"}
					>
						<img
							className="nav__navigate-search"
							src={search}
							alt="search"
						/>
					</NavLink>
					<NavLink
						activeClassName="nav__nav-link--active"
						to={"/cart"}
					>
						<img
							className="nav__navigate-cart"
							src={cart}
							alt="cart"
						/>
					</NavLink>
					<NavLink
						activeClassName="nav__nav-link--active"
						to={"/account"}
					>
						<img
							className="nav__navigate-account"
							src={account}
							alt="account"
						/>
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
