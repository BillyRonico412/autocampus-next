import { useRouter } from "next/router";
import PlateformesCardBody from "./PlateformesCardBody";
import PlateformesCardFooter from "./PlateformesCardFooter";
import PlateformesCardHead from "./PlateformesCardHead";

type Props = {
    id: number;
    description: string;
    image: string;
    nomPlateforme: string;
    couleur: string;
    motcles: string[];
};

const PlateformesCard = (props: Props) => {
    const router = useRouter();
    const onClickCardPlateforme = () => {
        router.push("/plateformes/" + props.id);
    };
    return (
        <div
            className="relative w-[300px] h-[270px] shadow rounded overflow-hidden cursor-pointer"
            onClick={onClickCardPlateforme}
        >
            <PlateformesCardHead
                nomPlateforme={props.nomPlateforme}
            />
            <PlateformesCardBody
                image={props.image}
                description={props.description}
            />
            <PlateformesCardFooter motcles={props.motcles} />
        </div>
    );
};

export default PlateformesCard;
