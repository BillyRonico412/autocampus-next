import { VuDansMediasType } from "../../utils/interface";
import VuDansMediaItem from "./VuDansMediaItem";

type Props = {
    medias: VuDansMediasType[];
};

const VuDansMediaItems = (props: Props) => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex gap-y-8 mt-2 flex-wrap gap-x-8">
                {props.medias.map((media, i) => (
                    <VuDansMediaItem key={i} media={media} />
                ))}
            </div>
        </div>
    );
};

export default VuDansMediaItems;
