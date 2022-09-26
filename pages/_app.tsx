import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavbarMobile from "../components/Main/NavbarMobile";
import FooterMobile from "../components/Main/FooterMobile";
import NavbarDesktop from "../components/Main/NavbarDesktop";
import FooterTablet from "../components/Main/FooterTablet";
import FooterDesktop from "../components/Main/FooterDesktop";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="md:hidden">
                <NavbarMobile />
            </div>
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>
            <Component {...pageProps} />
            <div className="mt-auto md:hidden">
                <FooterMobile />
            </div>
            <div className="mt-auto hidden md:block xl:hidden">
                <FooterTablet />
            </div>
            <div className="mt-auto hidden xl:block">
                <FooterDesktop />
            </div>
        </main>
    );
}

export default MyApp;
