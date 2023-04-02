import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../Logo";
import { Hamburger } from "./Hamburger";
import { MobileMenu } from "./MobileMenu";
import search from '../../../images/icons/search.svg';
import cart from '../../../images/icons/cart.svg';
import account from '../../../images/icons/account.svg';

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
            <img className="header__navigate-img" src={search} alt="search" />
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/cart"}>
            <img className="header__navigate-img" src={cart} alt="cart" />
            </NavLink>
            <NavLink activeClassName="header__nav-link--active" to={"/account"}>
            <img className="header__navigate-img" src={account} alt="account" />
            </NavLink>
        </div>
        </nav>
    </header>
    );
};
