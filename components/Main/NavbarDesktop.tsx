import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useState } from "react";
import autocampusLogo from "../../public/images/autocampus-logo.png";
import { MenuItemInterface } from "../../utils/interface";
import { menuItems } from "../../utils/variables";
import Search from "../Common/Search";

const MenuItemChild = (props: {
    menuItem: MenuItemInterface;
    setIndexMenuItemOpened: Dispatch<SetStateAction<number | null>>;
}) => {
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                props.setIndexMenuItemOpened(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    const onClickItemMenuChild = (menuItem: MenuItemInterface) => {
        if (menuItem.link) {
            props.setIndexMenuItemOpened(null);
            router.push(menuItem.link);
        }
    };
    return (
        <div
            className="absolute top-[110%] z-10 bg-primary-old w-full"
            ref={wrapperRef}
        >
            {props.menuItem.childrens.map((menuItemChild, j) => (
                <div
                    key={j}
                    className="py-1 text-center border-b text-white px-4"
                    onClick={() => onClickItemMenuChild(menuItemChild)}
                >
                    {menuItemChild.title}
                </div>
            ))}
        </div>
    );
};

const NavbarDesktop = () => {
    const router = useRouter();
    const [indexMenuItemOpened, setIndexMenuItemOpened] = useState<
        number | null
    >(null);
    const onClickMenuItem = (menuItem: MenuItemInterface, i: number) => {
        if (menuItem.link) {
            router.push(menuItem.link);
            setIndexMenuItemOpened(null);
        } else {
            setIndexMenuItemOpened(i);
        }
    };
    return (
        <nav className="shadow">
            <div className="container mx-auto flex justify-between px-4">
                <div className="hidden xl:flex items-center justify-center">
                    <Image src={autocampusLogo} alt="autocampus-logo" />
                </div>
                <div className="flex flex-col gap-y-2 pt-4 flex-grow">
                    <div className=" flex justify-between xl:justify-end xl:gap-x-10 ">
                        <div className="flex items-center justify-center xl:hidden">
                            <Image src={autocampusLogo} alt="autocampus-logo" />
                        </div>
                        <Search />
                        <div className="flex items-center">
                            <a href="#" className="font-semibold">
                                Offre d&apos;emploi
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="font-semibold">
                                Contact
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="border-l px-2">FR</span>
                            <span className="border-l px-2">EN</span>
                        </div>
                    </div>
                    <div className="flex items-center xl:justify-end">
                        {menuItems
                            .filter(
                                (menuItem) =>
                                    menuItem.title !== "Contactez-nous" &&
                                    menuItem.title !== "Offres d’emplois"
                            )
                            .map((menuItem, i) => (
                                <div
                                    key={i}
                                    className={
                                        "flex-grow xl:flex-grow-0 xl:w-36 font-semibold hover:bg-primary-old hover:text-white h-full cursor-pointer py-1 " +
                                        (i === indexMenuItemOpened &&
                                            "!bg-primary-old !text-white")
                                    }
                                >
                                    {(() => {
                                        if (
                                            menuItem.title ===
                                            "Qui sommes nous ?"
                                        ) {
                                            return (
                                                <div>
                                                    <div
                                                        className="relative flex flex-col items-center"
                                                        onClick={() =>
                                                            onClickMenuItem(
                                                                menuItem,
                                                                i
                                                            )
                                                        }
                                                    >
                                                        <span>Qui sommes</span>
                                                        <span>nous ?</span>
                                                        {i ===
                                                            indexMenuItemOpened && (
                                                            <MenuItemChild
                                                                menuItem={
                                                                    menuItem
                                                                }
                                                                setIndexMenuItemOpened={
                                                                    setIndexMenuItemOpened
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        } else if (
                                            menuItem.title ===
                                            "Les plateformes boîtes à outils"
                                        ) {
                                            return (
                                                <div
                                                    className="relative flex flex-col items-center"
                                                    onClick={() =>
                                                        onClickMenuItem(
                                                            menuItem,
                                                            i
                                                        )
                                                    }
                                                >
                                                    <span>Les plateformes</span>
                                                    <span>boîtes à outils</span>
                                                    {i ===
                                                        indexMenuItemOpened && (
                                                        <MenuItemChild
                                                            menuItem={menuItem}
                                                            setIndexMenuItemOpened={
                                                                setIndexMenuItemOpened
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="relative flex justify-center items-center h-full"
                                                    onClick={() =>
                                                        onClickMenuItem(
                                                            menuItem,
                                                            i
                                                        )
                                                    }
                                                >
                                                    {menuItem.title}
                                                    {i ===
                                                        indexMenuItemOpened && (
                                                        <MenuItemChild
                                                            menuItem={menuItem}
                                                            setIndexMenuItemOpened={
                                                                setIndexMenuItemOpened
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDesktop;
