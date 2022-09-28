import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { navbarActions } from "../navbarStore";
import { useSelector } from "react-redux";
import { RootState } from "../../../../utils/store";
import { useRouter } from "next/router";

const NavbarMobileHeader = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isShow = useSelector((state: RootState) => state.navbar.isShow);
    return (
        <nav className="py-4 px-4 flex items-center shadow">
            <button
                onClick={() => {
                    dispatch(navbarActions.setIsShow(!isShow));
                }}
            >
                <FaBars className="text-2xl" />
            </button>
            <div className="ml-auto flex items-center justify-center">
                <Image
                    src="/images/autocampus-logo.png"
                    alt="autocampus-logo"
                    width={132}
                    height={26}
                    onClick={() => router.push("/")}
                />
            </div>
        </nav>
    );
};

export default NavbarMobileHeader;
