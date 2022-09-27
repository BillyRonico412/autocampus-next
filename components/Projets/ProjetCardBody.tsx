import Image from "next/image";
import { getImageUrl } from "../../utils/variables";

type Props = {
    image: string;
    description: string;
};

const ProjetCardBody = (props: Props) => {
    return (
        <div className="bg-footer overflow-hidden relative h-[220px] group">
            <Image
                src={getImageUrl(props.image)}
                width={300}
                height={220}
                className="object-cover"
            />
            <div
                className="absolute -top-full -left-full group-hover:top-0 group-hover:left-0 z-20 w-[300px] h-[220px] text-xl bg-primary-old bg-opacity-90 break-words px-4 py-2 font-semibold"
                style={{ transition: "0.2s all" }}
            >
                {props.description}
            </div>
        </div>
    );
};

export default ProjetCardBody;
