import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ProjetProps } from "../../pages/projets";
import { RootState } from "../../utils/store";
import ProjetCard from "./ProjetCard";
import { projetActions } from "./projetStore";

type Props = {
    annee: number;
    projets: ProjetProps[];
};

const ProjetItemsByYear = (props: Props) => {
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
    return (
        <div className="my-8 flex flex-col gap-y-8">
            <p
                className="text-xl font-bold flex gap-x-4 items-center"
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
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-y-8 justify-items-center">
                    {props.projets.map((projet, i) => (
                        <ProjetCard
                            id={projet.id}
                            titre={projet.titre}
                            description={projet.description}
                            image={projet.image}
                            nomPlateforme={projet.projetPlateforme.nom}
                            motcles={projet.projetMotcle.map(
                                (motcle) => motcle.motcle_id.libelle
                            )}
                            key={i}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjetItemsByYear;
