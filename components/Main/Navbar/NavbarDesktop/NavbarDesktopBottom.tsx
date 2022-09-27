import { menuItems } from "../../../../utils/variables";
import NavbarDesktopItem from "./NavbarDesktopItem";

const NavbarDesktopBottom = () => {
	return (
		<div className="flex items-center xl:justify-end">
			{menuItems
				.filter(
					(menuItem) =>
						menuItem.title !== "Contactez-nous" &&
                        menuItem.title !== "Offres d’emplois"
				)
				.map((menuItem, i) => (
					<NavbarDesktopItem key={i} menuItem={menuItem} index={i} />
				))}
		</div>
	);
};

export default NavbarDesktopBottom;
