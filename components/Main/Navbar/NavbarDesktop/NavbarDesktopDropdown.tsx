import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { MenuItemInterface } from "../../../../utils/interface";
import { navbarActions } from "../navbarStore";

type Props = {
    menuItem: MenuItemInterface;
};

const NavbarDesktopDropdown = (props: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node) &&
                window.innerWidth >= 768
            ) {
                dispatch(navbarActions.setIndexMenuItemOpened(null));
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const onClickItemMenuChild = (menuItem: MenuItemInterface) => {
        if (menuItem.link) {
            dispatch(navbarActions.setIndexMenuItemOpened(null));
            router.push(menuItem.link);
        }
    };
    return (
        <div className="absolute top-[110%] z-50 w-full" ref={wrapperRef}>
            {props.menuItem.childrens.map((menuItemChild, j) => (
                <div
                    key={j}
                    className="py-1 text-center border-b text-white px-4 bg-primary-old hover:bg-primary-old-hover"
                    onClick={() => onClickItemMenuChild(menuItemChild)}
                >
                    {menuItemChild.title}
                </div>
            ))}
        </div>
    );
};

export default NavbarDesktopDropdown;
