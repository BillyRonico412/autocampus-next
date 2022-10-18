import Image from "next/image";
import Link from "next/link";
import autocampusLogo from "../../../../public/images/autocampus-logo.png";
import Search from "../../../Common/Search";

const NavbarDesktopTop = () => {
    return (
        <div className=" flex justify-between xl:justify-end xl:gap-x-10 ">
            <div className="flex items-center justify-center xl:hidden">
                <Image src={autocampusLogo} alt="autocampus-logo" />
            </div>
            <Search placeholder="Rechercher sur le site ..." />
            <div className="flex items-center">
                <a href="#" className="font-semibold">
                    Offre d&apos;emploi
                </a>
            </div>
            <div className="flex items-center">
                <Link href="/contact">
                    <span className="font-semibold cursor-pointer">Contact</span>
                </Link>
            </div>
            <div className="flex items-center">
                <span className="border-l px-2">FR</span>
                <span className="border-l px-2">EN</span>
            </div>
        </div>
    );
};

export default NavbarDesktopTop;
