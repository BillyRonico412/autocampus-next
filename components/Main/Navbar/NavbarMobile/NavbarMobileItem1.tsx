import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { MenuItemInterface } from "../../../../utils/interface";
import { RootState } from "../../../../utils/store";
import { navbarActions } from "../navbarStore";
import NavbarMobileItem2 from "./NavbarMobileItem2";

type Props = {
    menuItem: MenuItemInterface;
    index: number;
};

const NavbarMobileItem1 = (props: Props) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const indexMenuItemOpened = useSelector(
		(state: RootState) => state.navbar.indexMenuItemOpened
	);
	const onClickNavbarItem1 = (menuItem: MenuItemInterface, index: number) => {
		if (menuItem.link) {
			router.push(menuItem.link);
			dispatch(navbarActions.setIsShow(false));
		} else if (index === indexMenuItemOpened) {
			dispatch(navbarActions.setIndexMenuItemOpened(null));
		} else {
			dispatch(navbarActions.setIndexMenuItemOpened(index));
		}
	};
	return (
		<>
			<div
				className="py-3 border-b pl-4 flex items-center gap-x-4"
				onClick={() => onClickNavbarItem1(props.menuItem, props.index)}
			>
				<span>{props.menuItem.title}</span>
			</div>
			{props.index === indexMenuItemOpened && (
				<div>
					{props.menuItem.childrens.map((menuItemChild, j) => (
						<NavbarMobileItem2
							menuItemChild={menuItemChild}
							key={j}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default NavbarMobileItem1;
