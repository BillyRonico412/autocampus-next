import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { PublicationsScientifiquesInterface } from "../../pages/publications-scientifiques";
import { RootState } from "../../utils/store";
import PublicationsScientifiquesByYear from "./PublicationsScientifiquesByYear";

type Props = {
    publicationsScientifiques: PublicationsScientifiquesInterface[];
    categorie: string;
};

const PublicationsScientifiquesByCategory = (props: Props) => {
    const [isShow, setIsShow] = useState(true);
    const dateList = useSelector(
        (state: RootState) => state.publicationsScientifique.dateList
    );
    return (
        <>
            {props.publicationsScientifiques.length > 0 && (
                <div>
                    <p
                        className="font-bold text-xl flex gap-x-2 items-center cursor-pointer"
                        onClick={() => {
                            setIsShow(!isShow);
                        }}
                    >
                        {props.categorie}
                        {isShow ? <FaCaretDown /> : <FaCaretRight />}
                    </p>
                    {isShow && (
                        <div className="flex flex-col gap-y-6 mt-6">
                            {dateList.map((annee, i) => (
                                <PublicationsScientifiquesByYear
                                    key={i}
                                    publicationsScientifiques={props.publicationsScientifiques.filter(
                                        (pub) => pub.annee === annee
                                    )}
                                    annee={annee}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default PublicationsScientifiquesByCategory;
