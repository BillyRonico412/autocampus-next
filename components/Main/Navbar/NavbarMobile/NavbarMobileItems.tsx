import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { menuItems } from "../../../../utils/variables";
import { navbarActions } from "../navbarStore";
import NavbarMobileItem1 from "./NavbarMobileItem1";

const NavbarMobileItems = () => {
    const dispatch = useDispatch();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node) &&
                window.innerWidth < 768
            ) {
                dispatch(navbarActions.setIsShow(false));
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            className="text-xl font-semibold absolute w-full bg-white z-50"
            ref={wrapperRef}
        >
            {menuItems.map((menuItem, i) => (
                <NavbarMobileItem1 menuItem={menuItem} index={i} key={i} />
            ))}
        </div>
    );
};

export default NavbarMobileItems;
