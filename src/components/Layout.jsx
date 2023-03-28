import { Outlet } from "react-router-dom";
import { Header } from "./layout/header/Header";
import { Footer } from "../components/layout/Footer";

export const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}