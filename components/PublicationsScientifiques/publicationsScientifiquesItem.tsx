import { PublicationsScientifiquesInterface } from "../../pages/publications-scientifiques";
import { menuItems } from "../../utils/variables";
import PublicationsScientifiquesAbstract from "./PublicationsScientifiquesAbstract";

type Props = {
    item: PublicationsScientifiquesInterface;
};

const PublicationsScientifiquesItem = (props: Props) => {
    return (
        <div className="ml-8">
            <p className="font-semibold group">
                {props.item.titre}{" "}
                {/* <div className="z-10 absolute hidden group-hover:block">
                    <PublicationsScientifiquesAbstract
                        abstract={props.item.abstract}
                        motcles={props.item.publicationScientifiqueMotcle.map(
                            (motcle) => motcle.motcle_id.libelle
                        )}
                    />
                </div> */}
            </p>
            <p>
                {props.item.publicationScientifiqueAuteur.map((auteur, i) => (
                    <span key={i}>
                        {i !== 0 && ", "}
                        {auteur.auteur_id.prenom + " " + auteur.auteur_id.nom}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default PublicationsScientifiquesItem;
