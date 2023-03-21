import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav-mobile mobile">
                <Logo />
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