import { FilArianeInterface } from "../../utils/interface";

type Props = {
    text1: string;
    text2: string;
};

const Header1 = (props: Props) => {
	return (
		<div>
			<h1 className="font-bold text-4xl">
				<span>{props.text1}</span>{" "}
				<span className="text-primary-old">{props.text2}</span>
			</h1>
		</div>
	);
};

export default Header1;
