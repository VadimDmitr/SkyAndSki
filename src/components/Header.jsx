import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink>
                    <p>logo</p>
                </NavLink>
                <NavLink>Register</NavLink>
                <NavLink>Log in</NavLink>
            </nav>
        </header>
    )
}