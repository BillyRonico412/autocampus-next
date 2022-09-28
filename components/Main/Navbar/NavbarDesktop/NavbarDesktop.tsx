import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import autocampusLogo from "../../../../public/images/autocampus-logo.png";
import NavbarDesktopBottom from "./NavbarDesktopBottom";
import NavbarDesktopTop from "./NavbarDesktopTop";

const NavbarDesktop = () => {
    const router = useRouter();
    return (
        <nav className="shadow">
            <div className="container mx-auto flex justify-between px-4">
                <div className="hidden xl:flex items-center justify-center">
                    <Image
                        src={autocampusLogo}
                        className="cursor-pointer"
                        alt="autocampus-logo"
                        onClick={() => router.push("/")}
                    />
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
