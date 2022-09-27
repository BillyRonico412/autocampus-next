import { ProjetProps } from "../../pages/projets";
import ProjetCard from "./ProjetCard";

type Props = ProjetProps;

const ProjetItems = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 justify-items-center my-8">
            {props.projets.map((projet, i) => (
                <ProjetCard
                    titre={projet.titre}
                    annee={projet.annee}
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
    );
};

export default ProjetItems;
