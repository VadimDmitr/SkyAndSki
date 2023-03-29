// import { Header } from "./Header/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
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