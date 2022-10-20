import { VuDansMediasType } from "../../utils/interface";
import VuDansMediaItem from "./VuDansMediaItem";

type Props = {
    medias: VuDansMediasType[];
};

const VuDansMediaItems = (props: Props) => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 justify-items-center">
                {props.medias.map((media, i) => (
                    <VuDansMediaItem key={i} media={media} />
                ))}
            </div>
        </div>
    );
};

export default VuDansMediaItems;
