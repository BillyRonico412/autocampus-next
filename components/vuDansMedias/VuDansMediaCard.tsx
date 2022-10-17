import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { getImageApi, linkImageDefaultVuMedia } from "../../utils/variables";

type Props = {
    image?: string;
    titre: string;
    description: string;
    link: string;
};

const VuDansMediaCard = (props: Props) => {
    return (
        <div
            className="w-[350px] h-[600px] overflow-hidden shadow border rounded cursor-pointer group"
            onClick={() => {
                window.open(props.link, "_blank");
            }}
        >
            <div>
                <img
                    src={props.image ? props.image : linkImageDefaultVuMedia}
                    className="object-cover w-[350px] h-[200px]"
                />
            </div>
            <div className="px-4 py-2 h-[320px] overflow-hidden">
                <p className="text-xl font-bold">{props.titre}</p>
                <p className="font-medium pt-2">{props.description}</p>
            </div>
            <div className="h-[80px] flex items-center gap-x-4 justify-end px-4 font-bold group-hover:text-primary-old transition-colors">
                <span>Lire la suite</span>
                <FaCaretRight />
            </div>
        </div>
    );
};

export default VuDansMediaCard;
