import { ReactNode } from "react";
import { FilArianeInterface } from "../../utils/interface";
import FilAriane from "./FilAriane";

type Props = {
    title: string;
    filArianes: FilArianeInterface[];
    children: ReactNode;
    motcles?: string[];
};

const Header2 = (props: Props) => {
    return (
        <div className=" bg-primary-old py-8">
            <div className="container mx-auto md:flex md:items-center">
                <div className="flex flex-col items-center md:items-start justify-center gap-y-2">
                    <FilAriane filArianes={props.filArianes} />
                    <div className="md:hidden">{props.children}</div>
                    <div className="text-3xl font-bold text-center md:text-left">{props.title}</div>
                    <ul className="flex font-semibold">
                        {props.motcles && (
                            <>
                                <li className="mr-2 font-bold">Mot clés:</li>
                                {props.motcles.map((motcle, i) => (
                                    <li key={i}>
                                        {i !== 0 && ", "} {motcle}
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
                <div className="ml-auto hidden md:block">{props.children}</div>
            </div>
        </div>
    );
};

export default Header2;
