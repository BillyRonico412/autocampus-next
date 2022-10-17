import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { getImageApi } from "../../utils/variables";

type Props = {
    image: string;
    titre: string;
    description: string;
    date: string;
    link?: string;
};

const dateString = (date: string) => {
    const mois = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre",
    ];
    const dateObj = new Date(date);
    return `${dateObj.getDay()} ${
        mois[dateObj.getMonth()]
    } ${dateObj.getFullYear()}`;
};

const EvenementsCard = (props: Props) => {
    return (
        <div className="w-[350px] h-[600px] overflow-hidden shadow border rounded cursor-pointer group">
            <div>
                <Image
                    src={getImageApi(props.image)}
                    width={350}
                    height={200}
                    className="object-cover"
                />
            </div>
            <div className="px-4 py-2 h-[320px] overflow-hidden">
                <p className="text-xl font-bold">{props.titre}</p>
                <p>{dateString(props.date)}</p>
                <p className="font-medium pt-2">{props.description}</p>
            </div>
            <div className="h-[80px] flex items-center gap-x-4 justify-end px-4 font-bold group-hover:text-primary-old">
                <span>Lire la suite</span>
                <FaCaretRight />
            </div>
        </div>
    );
};

export default EvenementsCard;
