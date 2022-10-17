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
                        <div className="flex gap-y-2 mt-2 flex-wrap gap-x-8">
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
