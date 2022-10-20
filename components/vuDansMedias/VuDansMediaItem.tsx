import { VuDansMediasType } from "../../utils/interface";
import VuDansMediaCard from "./VuDansMediaCard";

type Props = {
    media: VuDansMediasType;
};

const VuDansMediaItem = (props: Props) => {
    return (
        <div>
            <VuDansMediaCard
                titre={props.media.metadata.title}
                description={props.media.metadata.description}
                image={props.media.metadata.banner}
                link={props.media.lien}
            />
        </div>
    );
};

export default VuDansMediaItem;
