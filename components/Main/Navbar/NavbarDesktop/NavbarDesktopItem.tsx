import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MenuItemInterface } from "../../../../utils/interface";
import { RootState } from "../../../../utils/store";
import { navbarActions } from "../navbarStore";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";

type Props = {
    menuItem: MenuItemInterface;
    index: number;
};

const NavbarDesktopItem = (props: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const indexMenuItemOpened = useSelector(
        (state: RootState) => state.navbar.indexMenuItemOpened
    );
    const onClickMenuItem = () => {
        if (props.menuItem.link) {
            router.push(props.menuItem.link);
            dispatch(navbarActions.setIndexMenuItemOpened(null));
        } else {
            dispatch(navbarActions.setIndexMenuItemOpened(props.index));
        }
    };
    return (
        <div
            className={
                "flex-grow xl:flex-grow-0 xl:w-36 font-semibold hover:bg-primary-old hover:text-white h-full cursor-pointer py-1 " +
                (props.index === indexMenuItemOpened &&
                    "!bg-primary-old !text-white")
            }
        >
            {(() => {
                if (props.menuItem.title === "Qui sommes nous ?") {
                    return (
                        <div className="relative">
                            <div
                                className="flex flex-col items-center"
                                onClick={() => onClickMenuItem()}
                            >
                                <span>Qui sommes</span>
                                <span>nous ?</span>
                            </div>
                            {props.index === indexMenuItemOpened && (
                                <NavbarDesktopDropdown
                                    menuItem={props.menuItem}
                                />
                            )}
                        </div>
                    );
                } else if (
                    props.menuItem.title === "Les plateformes boîtes à outils"
                ) {
                    return (
                        <div className="relative">
                            <div
                                className="flex flex-col items-center"
                                onClick={() => onClickMenuItem()}
                            >
                                <span>Les plateformes</span>
                                <span>boîtes à outils</span>
                            </div>
                            {props.index === indexMenuItemOpened && (
                                <NavbarDesktopDropdown
                                    menuItem={props.menuItem}
                                />
                            )}
                        </div>
                    );
                } else {
                    return (
                        <div className="h-full relative">
                            <div
                                className="flex justify-center items-center h-full"
                                onClick={() => onClickMenuItem()}
                            >
                                {props.menuItem.title}
                            </div>
                            {props.index === indexMenuItemOpened && (
                                <NavbarDesktopDropdown
                                    menuItem={props.menuItem}
                                />
                            )}
                        </div>
                    );
                }
            })()}
        </div>
    );
};

export default NavbarDesktopItem;
