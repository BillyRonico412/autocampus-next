import Image from "next/image";
import { getImageApi } from "../../utils/variables";

type Props = {
    images: string[];
};

const HomepageCarousel = (props: Props) => {
    return (
        <div>
            <div className="flex flex-shrink h-[500px]">
                {props.images.map((image, i) => (
                    <div className="relative w-full h-[500px]" key={i}>
                        <Image
                            src={getImageApi(image)}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomepageCarousel;
