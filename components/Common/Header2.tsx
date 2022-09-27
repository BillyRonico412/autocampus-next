import { ReactNode } from "react";
import { FilArianeInterface } from "../../utils/interface";
import FilAriane from "./FilAriane";

type Props = {
    title: string;
    filArianes: FilArianeInterface[];
    children: ReactNode;
};

const Header2 = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center bg-primary-old py-8 gap-y-2">
			<div>{props.children}</div>
			<div className="text-3xl font-bold">{props.title}</div>
			<FilAriane filArianes={props.filArianes} />
		</div>
	);
};

export default Header2;
