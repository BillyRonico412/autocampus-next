import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { PublicationsScientifiquesInterface } from "../../pages/publications-scientifiques";
import PublicationsScientifiquesItem from "./publicationsScientifiquesItem";

type Props = {
    publicationsScientifiques: PublicationsScientifiquesInterface[];
    annee: number;
};

const PublicationsScientifiquesByYear = (props: Props) => {
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            {props.publicationsScientifiques.length > 0 && (
                <div className="ml-8">
                    <p
                        className="text-lg font-semibold flex items-center gap-x-2 cursor-pointer"
                        onClick={() => setIsShow(!isShow)}
                    >
                        {props.annee}
                        {isShow ? <FaCaretDown /> : <FaCaretRight />}
                    </p>
                    {isShow && (
                        <div className="flex flex-col gap-y-2 mt-2">
                            {props.publicationsScientifiques.map((pub, i) => (
                                <PublicationsScientifiquesItem
                                    key={i}
                                    item={pub}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default PublicationsScientifiquesByYear;
