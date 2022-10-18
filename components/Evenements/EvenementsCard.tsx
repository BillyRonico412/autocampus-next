import Image from "next/image";
import { useRouter } from "next/router";
import { FaCaretRight } from "react-icons/fa";
import { dateString, getImageApi } from "../../utils/variables";

type Props = {
    id: number;
    image: string;
    titre: string;
    description: string;
    date: string;
    link?: string;
};

const EvenementsCard = (props: Props) => {
    const router = useRouter();
    return (
        <div
            className="w-[320px] h-[600px] overflow-hidden shadow border rounded cursor-pointer group"
            onClick={() => {
                router.push("/actualites/evenements/" + props.id);
            }}
        >
            <div>
                <Image
                    src={getImageApi(props.image)}
                    width={320}
                    height={200}
                    className="object-cover"
                />
            </div>
            <div className="px-4 py-2 h-[320px] overflow-hidden">
                <p className="text-xl font-bold">{props.titre}</p>
                <p>{dateString(props.date)}</p>
                <p className="font-medium pt-2">{props.description}</p>
            </div>
            <div className="h-[80px] flex items-center gap-x-4 justify-end px-4 font-bold group-hover:text-primary-old transition-colors">
                <span>Lire la suite</span>
                <FaCaretRight />
            </div>
        </div>
    );
};

export default EvenementsCard;
