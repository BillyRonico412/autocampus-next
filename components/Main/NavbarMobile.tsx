import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { menuItems } from "../../utils/variables";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NavbarMobile = () => {
    const router = useRouter();
    const [isShow, setIsShow] = useState(false);
    const [indexMenuItemOpened, setIndexItemMenuOpened] = useState<
        number | null
    >(null);
    useEffect(() => {
        setIndexItemMenuOpened(null);
    }, [isShow]);
    return (
        <div className="relative bg-white">
            <nav className="py-4 px-4 flex items-center shadow">
                <button
                    onClick={() => {
                        setIsShow(!isShow);
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
                    />
                </div>
            </nav>
            {isShow && (
                <div className="text-xl font-semibold absolute w-full bg-white z-10">
                    {menuItems.map((menuItem, i) => (
                        <div key={i}>
                            <div
                                className="py-3 border-b pl-4 flex items-center gap-x-4"
                                onClick={() => {
                                    if (menuItem.link) {
                                        router.push(menuItem.link);
                                        setIsShow(false);
                                    } else if (i === indexMenuItemOpened) {
                                        setIndexItemMenuOpened(null);
                                    } else {
                                        setIndexItemMenuOpened(i);
                                    }
                                }}
                            >
                                <span>{menuItem.title}</span>
                            </div>
                            {i === indexMenuItemOpened && (
                                <div>
                                    {menuItem.childrens.map(
                                        (menuItemChild, j) => (
                                            <div
                                                key={j}
                                                className="py-3 border-b pl-8 text-white bg-primary-old"
                                                onClick={() => {
                                                    if (menuItemChild.link) {
                                                        router.push(
                                                            menuItemChild.link
                                                        );
                                                        setIsShow(false);
                                                    }
                                                }}
                                            >
                                                {menuItemChild.title}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavbarMobile;
