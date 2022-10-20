import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { EvenementsType } from "../Actualites/utils";
import EvenementsItem from "./EvenementsItem";

type Props = {
    annee: number;
    evenements: EvenementsType[];
};

const EvenementsByYear = (props: Props) => {
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            {props.evenements.length > 0 && (
                <div className="ml-8">
                    <p
                        className="text-lg font-semibold flex items-center gap-x-2 cursor-pointer"
                        onClick={() => setIsShow(!isShow)}
                    >
                        {props.annee}
                        {isShow ? <FaCaretDown /> : <FaCaretRight />}
                    </p>
                    {isShow && (
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 justify-items-center">
                            {props.evenements.map((actu, i) => (
                                <EvenementsItem key={i} evenement={actu} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default EvenementsByYear;
