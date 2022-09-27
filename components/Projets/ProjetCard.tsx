import ProjetCardBody from "./ProjetCardBody";
import ProjetCardFooter from "./ProjetCardFooter";
import ProjetCardHead from "./ProjetCardHead";

type Props = {
    titre: string;
    annee: number;
    description: string;
    image: string;
    nomPlateforme: string;
    motcles: string[];
};

const ProjetCard = (props: Props) => {
    return (
        <div className="relative w-[300px] h-[300px] border shadow rounded overflow-hidden">
            <ProjetCardHead nomPlateforme={props.nomPlateforme} />
            <ProjetCardBody
                image={props.image}
                description={props.description}
            />
            <ProjetCardFooter titre={props.titre} motcles={props.motcles} />
        </div>
    );
};

export default ProjetCard;
