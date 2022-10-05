import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ScrollHorizontalInfiniteImageFrame from "./ScrollHorizontalInfiniteImageFrame";

type Props = {
    imagesSrc: string[];
    width: number;
    height: number;
};

const ScrollHorizontalInfiniteImageContent = (props: Props) => {
    const [container, setContainer] = useState(640);
    const updateContainer = () => {
        if (window.innerWidth < 640) {
            setContainer(window.innerWidth);
        } else if (window.innerWidth < 768) {
            setContainer(640);
        } else if (window.innerWidth < 1024) {
            setContainer(768);
        } else if (window.innerWidth < 1280) {
            setContainer(1024);
        } else if (window.innerWidth < 1280) {
            setContainer(1536);
        } else {
            setContainer(1536);
        }
    };
    useEffect(() => {
        updateContainer();
        window.addEventListener("resize", updateContainer);
        return () => {
            window.removeEventListener("resize", updateContainer);
        };
    }, []);

    const numberImgOnContainer = Math.floor(container / props.width);
    const numberContainer =
        Math.floor(props.imagesSrc.length / numberImgOnContainer) +
        (props.imagesSrc.length % numberImgOnContainer > 0 ? 1 : 0);

    console.log(container);

    return (
        <div style={{ height: `${props.height}px` }}>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                {new Array(numberContainer).fill(0).map((_, i) => (
                    <ScrollHorizontalInfiniteImageFrame
                        key={i}
                        height={props.height}
                        width={props.width}
                        imagesSrc={props.imagesSrc.slice(
                            i * numberImgOnContainer,
                            (i + 1) * numberImgOnContainer
                        )}
                        numberImgOnContainer={numberImgOnContainer}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default ScrollHorizontalInfiniteImageContent;
