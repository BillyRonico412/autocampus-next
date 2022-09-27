import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../utils/store";
import { navbarActions } from "../navbarStore";
import NavbarMobileHeader from "./NavbarMobileHeader";
import NavbarMobileItems from "./NavbarMobileItems";

const NavbarMobile = () => {
	const dispatch = useDispatch();
	const isShow = useSelector((state: RootState) => state.navbar.isShow);
	useEffect(() => {
		dispatch(navbarActions.setIndexMenuItemOpened(null));
	}, [isShow]);
	return (
		<div className="relative bg-white">
			<NavbarMobileHeader />
			{isShow && <NavbarMobileItems />}
		</div>
	);
};

export default NavbarMobile;
