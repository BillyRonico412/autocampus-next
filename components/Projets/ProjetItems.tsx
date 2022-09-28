import { ProjetProps } from "../../pages/projets";
import ProjetItemsByYear from "./ProjetItemsByYear";

type Props = {
    projets: ProjetProps[];
    annees: number[];
};

const ProjetItems = (props: Props) => {
    return (
        <>
            {props.annees
                .map((annee, i) => (
                    <ProjetItemsByYear
                        annee={annee}
                        projets={props.projets.filter(
                            (projet) => projet.annee === annee
                        )}
                        key={i}
                    />
                ))}
        </>
    );
};

export default ProjetItems;
