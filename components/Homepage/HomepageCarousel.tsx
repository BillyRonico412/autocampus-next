import Image from "next/image";
import { getImageApi } from "../../utils/variables";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {
    images: string[];
};

const HomepageCarousel = (props: Props) => {
    return (
        <div>
            <div className="h-[500px]">
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    {props.images.map((image, i) => (
                        <div className="relative w-full h-[500px]" key={i}>
                            <Image
                                src={getImageApi(image)}
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HomepageCarousel;
