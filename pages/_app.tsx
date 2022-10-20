import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import FooterDesktop from "../components/Main/Footer/FooterDesktop";
import FooterMobile from "../components/Main/Footer/FooterMobile";
import FooterTablet from "../components/Main/Footer/FooterTablet";
import NavbarDesktop from "../components/Main/Navbar/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "../components/Main/Navbar/NavbarMobile/NavbarMobile";
import "../styles/globals.css";
import { store } from "../utils/store";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Provider store={store}>
            <main className="min-h-screen flex flex-col">
                <div className="md:hidden">
                    <NavbarMobile />
                </div>
                <div className="hidden md:block">
                    <NavbarDesktop />
                </div>
                <motion.div
                    key={router.route}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    <Component {...pageProps} />
                </motion.div>

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
        </Provider>
    );
}

export default MyApp;
