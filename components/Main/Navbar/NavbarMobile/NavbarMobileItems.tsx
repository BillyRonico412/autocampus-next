import { menuItems } from "../../../../utils/variables";
import NavbarMobileItem1 from "./NavbarMobileItem1";

const NavbarMobileItems = () => {
	return (
		<div className="text-xl font-semibold absolute w-full bg-white z-50">
			{menuItems.map((menuItem, i) => (
				<NavbarMobileItem1 menuItem={menuItem} index={i} key={i} />
			))}
		</div>
	);
};

export default NavbarMobileItems;
