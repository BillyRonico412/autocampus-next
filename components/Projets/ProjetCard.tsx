import { useRouter } from "next/router";
import ProjetCardBody from "./ProjetCardBody";
import ProjetCardFooter from "./ProjetCardFooter";
import ProjetCardHead from "./ProjetCardHead";

export type ProjetCardProps = {
    id: number;
    titre: string;
    description: string;
    image: string;
    nomPlateforme: string;
    motcles: string[];
};

type Props = ProjetCardProps;

const ProjetCard = (props: Props) => {
    const router = useRouter();
    const onClickCardProjet = () => {
        router.push("/projets/" + props.id);
    };
    return (
        <div
            className="relative w-[300px] h-[300px] border shadow rounded overflow-hidden cursor-pointer text-left"
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
