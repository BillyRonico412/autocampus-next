import { useRouter } from "next/router";
import ProjetCardBody from "./ProjetCardBody";
import ProjetCardFooter from "./ProjetCardFooter";
import ProjetCardHead from "./ProjetCardHead";

type Props = {
    id: number;
    titre: string;
    annee: number;
    description: string;
    image: string;
    nomPlateforme: string;
    motcles: string[];
};

const ProjetCard = (props: Props) => {
    const router = useRouter();
    const onClickCardProjet = () => {
        router.push("/projets/" + props.id);
    };
    return (
        <div
            className="relative w-[300px] h-[300px] border shadow rounded overflow-hidden cursor-pointer"
            onClick={onClickCardProjet}
        >
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
