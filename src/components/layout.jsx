import Header from "./header/Header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
        <>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}