import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import { Hamburger } from "../layout/header/Hamburger";
import { MobileMenu } from "../layout/header/MobileMenu";

export const Header = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	return (
		<header className="header">
			<nav className="header__nav header__nav--mobile">
				<Logo className="header__logo" />
				<Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
				<MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
			</nav>
			<nav className="header__nav header__nav--desktop">
				<div className="header__logo-group">
					<NavLink to={"/"}>
						<h1>
							<Logo className="header__logo" />
						</h1>
					</NavLink>
				</div>
				<div className="header__middle-group">
					<NavLink
						className="header__nav-link"
						activeClassName="header__nav-link--active"
						to={"/about"}
					>
						<p>About</p>
					</NavLink>
					<NavLink activeClassName="header__nav-link--active" to={"/shop"}>
						<p>Shop</p>
					</NavLink>
					<NavLink activeClassName="header__nav-link--active" to={"/contact"}>
						<p>Contact</p>
					</NavLink>
				</div>
				<div className="header__right-group">
					<NavLink activeClassName="header__nav-link--active" to={"/language"}>
						<p>Language</p>
					</NavLink>
					<NavLink activeClassName="header__nav-link--active" to={"/search"}>
						<p>Search</p>
					</NavLink>
					<NavLink activeClassName="header__nav-link--active" to={"/cart"}>
						<p>Cart</p>
					</NavLink>
					<NavLink activeClassName="header__nav-link--active" to={"/account"}>
						<p>Account</p>
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
