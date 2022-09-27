import "../styles/globals.css";
import type { AppProps } from "next/app";
import FooterMobile from "../components/Main/Footer/FooterMobile";
import NavbarDesktop from "../components/Main/Navbar/NavbarDesktop/NavbarDesktop";
import FooterTablet from "../components/Main/Footer/FooterTablet";
import FooterDesktop from "../components/Main/Footer/FooterDesktop";
import NavbarMobile from "../components/Main/Navbar/NavbarMobile/NavbarMobile";
import { Provider } from "react-redux";
import { store } from "../utils/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default MyApp;
