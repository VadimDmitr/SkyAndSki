import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav-mobile mobile">
                <Logo />
                <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </nav>
            <nav className="nav desktop">
                <NavLink to={"/"}>
                    <h1>
                        <Logo />
                    </h1>
                </NavLink>
                <NavLink to={"/register"}>
                    <h1>Register</h1>
                </NavLink>
                <NavLink to={"/login"}>
                    <h1>Log in</h1>
                </NavLink>
                <NavLink to={"/delete-account"}>
                    <h1>Delete account</h1>
                </NavLink>
                <NavLink to={"/account"}>
                    <h1>Account</h1>
                </NavLink>
            </nav>
        </header>
    )
}