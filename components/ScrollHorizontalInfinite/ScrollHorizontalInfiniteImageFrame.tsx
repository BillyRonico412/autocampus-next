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
                <div key={i} className="flex justify-center items-center">
                    <Image
                        src={getImageApi(imgSrc)}
                        alt={imgSrc}
                        width={props.width - 20}
                        height={props.height - 20}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ScrollHorizontalInfiniteImageFrame;
