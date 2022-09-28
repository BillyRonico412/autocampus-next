import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { MenuItemInterface } from "../../../../utils/interface";
import { navbarActions } from "../navbarStore";

type Props = {
    menuItemChild: MenuItemInterface;
};

const NavbarMobileItem2 = (props: Props) => {
	const router = useRouter();
	const dispatch = useDispatch();
	return (
		<div
			className="py-3 border-b pl-8 text-white bg-primary-old"
			onClick={() => {
				console.log("Hello")
				if (props.menuItemChild.link) {
					router.push(props.menuItemChild.link);
					dispatch(navbarActions.setIsShow(false));
				}
			}}
		>
			{props.menuItemChild.title}
		</div>
	);
};

export default NavbarMobileItem2;
