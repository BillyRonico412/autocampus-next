import Image from "next/image";
import { getImageUrl } from "../../utils/variables";

type Props = {
    description: string;
    lienExterne: string;
    logo: string;
    nom: string;
};

const PartenaireCard = (props: Props) => {
    return (
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:h-[200px] md:overflow-hidden">
            <div className="w-[200px] h-[200px] flex items-center">
                <Image
                    src={getImageUrl(props.logo)}
                    width={200}
                    height={200}
                    className="object-cover"
                    alt={`Logo ${props.nom}`}
                />
            </div>
            <div className="w-full px-4">
                <div className="text-center font-bold text-xl">{props.nom}</div>
                <div className="text-center">{props.description}</div>
            </div>
        </div>
    );
};

export default PartenaireCard;
