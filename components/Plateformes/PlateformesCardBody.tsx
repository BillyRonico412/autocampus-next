import Image from "next/image";
import { getImageApi } from "../../utils/variables";

type Props = {
    image: string;
    description: string;
};

const PlateformesCardBody = (props: Props) => {
    return (
        <div className="bg-footer overflow-hidden relative h-[220px] group">
            <Image
                src={getImageApi(props.image)}
                width={300}
                height={220}
                className="object-cover"
            />
            <div
                className="absolute -top-full -left-full opacity-0 group-hover:top-0 group-hover:left-0 group-hover:opacity-100 z-20 w-[300px] h-[220px] text-lg bg-primary-old bg-opacity-90 break-words px-4 py-2 font-semibold"
                style={{ transition: "0.2s all" }}
            >
                {props.description}
            </div>
        </div>
    );
};

export default PlateformesCardBody;
