import { useRouter } from "next/router";
import { useState } from "react";
import { FaCaretDown, FaCaretRight, FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProjetProps } from "../../pages/projets";
import { RootState } from "../../utils/store";
import { projetActions } from "./projetStore";

type Props = {
    annee: number;
    projets: ProjetProps[];
};

const ProjetListByYear = (props: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const anneeCloses = useSelector(
        (state: RootState) => state.projet.anneeCloses
    );
    const onClickAnne = () => {
        if (anneeCloses.includes(props.annee)) {
            const index = anneeCloses.findIndex(
                (annee) => annee === props.annee
            );
            if (index >= 0) {
                dispatch(
                    projetActions.setAnneeCloses([
                        ...anneeCloses.slice(0, index),
                        ...anneeCloses.slice(index + 1),
                    ])
                );
            }
        } else {
            dispatch(
                projetActions.setAnneeCloses([...anneeCloses, props.annee])
            );
        }
    };
    const onClickProjet = (id: number) => {
        router.push("/projets/" + id);
    };
    return (
        <div className="my-4 flex flex-col gap-y-4">
            <p
                className="text-lg font-semibold flex gap-x-4 items-center"
                onClick={onClickAnne}
            >
                {props.annee}{" "}
                {!anneeCloses.includes(props.annee) ? (
                    <FaCaretDown />
                ) : (
                    <FaCaretRight />
                )}
            </p>
            {!anneeCloses.includes(props.annee) && (
                <div>
                    {props.projets.map((projet, i) => (
                        <div
                            className="flex items-center gap-x-4 group cursor-pointer"
                            key={i}
                            onClick={() => onClickProjet(projet.id)}
                        >
                            <FaChevronRight className="text-xs invisible group-hover:visible" />
                            <p className="flex items-center gap-x-4 truncate">
                                {projet.titre}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjetListByYear;
