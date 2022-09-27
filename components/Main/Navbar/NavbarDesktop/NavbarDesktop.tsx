import Image from "next/image";
import autocampusLogo from "../../../../public/images/autocampus-logo.png";
import NavbarDesktopBottom from "./NavbarDesktopBottom";
import NavbarDesktopTop from "./NavbarDesktopTop";

const NavbarDesktop = () => {
	return (
		<nav className="shadow">
			<div className="container mx-auto flex justify-between px-4">
				<div className="hidden xl:flex items-center justify-center">
					<Image src={autocampusLogo} alt="autocampus-logo" />
				</div>
				<div className="flex flex-col gap-y-2 pt-4 flex-grow">
					<NavbarDesktopTop />
					<NavbarDesktopBottom />
				</div>
			</div>
		</nav>
	);
};

export default NavbarDesktop;
