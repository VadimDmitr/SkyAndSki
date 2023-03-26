import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";
import { MobileMenu } from "../MobileMenu";

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
            <NavLink className="header__nav-link" activeClassName="header__nav-link--active" to={"/about"}>
            <h1>About</h1>
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/shop"}>
            <h1>Shop</h1>
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/contact"}>
            <h1>Contact</h1>
            </NavLink>
            </div>
            <div className="header__right-group">
            <NavLink activeClassName="header__nav-link--active" to={"/language"}>
            <h1>Language</h1>
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/search"}>
            <h1>Search</h1>
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/cart"}>
            <h1>Cart</h1>
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/account"}>
            <h1>Account</h1>
            </NavLink>
        </div>
        </nav>
    </header>
    );
};
