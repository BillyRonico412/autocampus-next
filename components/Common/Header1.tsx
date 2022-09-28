import { ReactNode } from "react";

type Props = {
    text1: string;
    text2: string;
    icons: ReactNode;
};

const Header1 = (props: Props) => {
    return (
        <div>
            <h1 className="flex font-bold text-4xl">
                <span>{props.text1}</span>{" "}
                <span className="text-primary-old ml-2">{props.text2}</span>
                <div className="ml-auto">{props.icons}</div>
            </h1>
        </div>
    );
};

export default Header1;
