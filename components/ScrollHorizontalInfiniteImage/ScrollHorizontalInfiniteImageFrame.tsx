import Image from "next/image";
import { getImageApi } from "../../utils/variables";

type Props = {
    imagesSrc: string[];
    width: number;
    height: number;
    numberImgOnContainer: number;
};

const ScrollHorizontalInfiniteImageFrame = (props: Props) => {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${props.numberImgOnContainer}, 1fr)`,
            }}
        >
            {props.imagesSrc.map((imgSrc, i) => (
                <div key={i}>
                    <Image
                        src={getImageApi(imgSrc)}
                        alt={imgSrc}
                        width={props.width}
                        height={props.height}
                        className="object-cover "
                    />
                </div>
            ))}
        </div>
    );
};

export default ScrollHorizontalInfiniteImageFrame;
