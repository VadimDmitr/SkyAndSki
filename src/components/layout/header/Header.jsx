import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Hamburger } from "components/layout/header/Hamburger";
import { MobileMenu } from "components/layout/header/MobileMenu";
import { Logo } from "components/icons/Logo";
// import { Search } from "components/icons/Search";
import { Cart } from "components/icons/Cart";
import { Account } from "components/icons/Account";
// import { Caret } from "components/icons/Caret";

const HeaderElement = styled.header`
	border-bottom: ${({ currentPath }) =>
		currentPath === "/" ||
		currentPath === "/login" ||
		currentPath === "/register"
			? "1px solid var(--color-secondary)"
			: "1px solid var(--color-primary)"};
	position: ${({ currentPath }) =>
		currentPath === "/" ||
		currentPath === "/login" ||
		currentPath === "/register"
			? "absolute"
			: "static"};

	.nav__link-text {
		color: ${({ currentPath }) =>
			currentPath === "/" ||
			currentPath === "/login" ||
			currentPath === "/register"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

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
		<HeaderElement
			className="header"
			currentPath={currentPath}
		>
			<nav className="nav-mobile mobile">
				<NavLink className="nav__link" to={"/"}>
					<Logo currentPath={currentPath} />
				</NavLink>
				<div className="nav-mobile__right-group">
					{/* <NavLink className="nav__link" to={"/search"}>
						<Search currentPath={currentPath} />
					</NavLink> */}
					<NavLink className="nav__link" to={"/cart"}>
						<Cart currentPath={currentPath} />
					</NavLink>
					<NavLink className="nav__link" to={"/account"}>
						<Account currentPath={currentPath} />
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
					<Logo currentPath={currentPath} />
				</NavLink>
				<div className="nav__middle-group">
					<NavLink className="nav__link" to={"/about"}>
						<p className="nav__link-text">About</p>
					</NavLink>
					<NavLink className="nav__link" to="/shop">
						<p className="nav__link-text">Shop</p>
					</NavLink>
					<NavLink className="nav__link" to={"/contact"}>
						<p className="nav__link-text">Contact</p>
					</NavLink>
				</div>
				<div className="nav__right-group">
					{/* <NavLink className="nav__link" to={"/language"}>
						<p className="nav__link-text">En</p>
						<Caret currentPath={currentPath} />
					</NavLink>
					<NavLink className="nav__link" to={"/search"}>
						<Search currentPath={currentPath} />
					</NavLink> */}
					<NavLink className="nav__link" to={"/cart"}>
						<Cart currentPath={currentPath} />
					</NavLink>
					{Object.keys(userData).length === 0 ? (
						<NavLink className="nav__link" to={"/login"}>
							<Account currentPath={currentPath} />
						</NavLink>
					) : (
						<NavLink className="nav__link" to={"/account"}>
							<Account currentPath={currentPath} />
						</NavLink>
					)}
				</div>
			</nav>
		</HeaderElement>
	);
};
