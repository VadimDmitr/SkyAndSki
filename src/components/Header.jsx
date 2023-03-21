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
                <NavLink>
                    <Logo />
                </NavLink>
                <NavLink>Register</NavLink>
                <NavLink>Log in</NavLink>
            </nav>
        </header>
    )
}