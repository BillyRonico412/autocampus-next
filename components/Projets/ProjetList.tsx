import { ProjetProps } from "../../pages/projets";
import ProjetListByYear from "./ProjetListByYear";

type Props = {
    projets: ProjetProps[];
    annees: number[];
};

const ProjetList = (props: Props) => {
    return (
        <div className="shadow border px-4 py-4 rounded">
            <p className="font-bold">Liste des projets</p>
            {props.annees.map((annee, i) => (
                <ProjetListByYear
                    annee={annee}
                    projets={props.projets.filter(
                        (projet) => projet.annee === annee
                    )}
                    key={i}
                />
            ))}
        </div>
    );
};

export default ProjetList;
