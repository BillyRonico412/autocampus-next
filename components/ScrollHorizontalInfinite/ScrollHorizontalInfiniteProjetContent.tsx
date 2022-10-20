import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ProjetCardProps } from "../Projets/ProjetCard";
import ScrollHorizontalInfiniteProjetFrame from "./ScrollHorizontalInfiniteProjetFrame";

type Props = {
    projets: ProjetCardProps[];
    autoplay?: boolean;
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

    const numberImgOnContainer = Math.floor(container / 350);
    const numberContainer =
        Math.floor(props.projets.length / numberImgOnContainer) +
        (props.projets.length % numberImgOnContainer > 0 ? 1 : 0);

    return (
        <div style={{ height: `300px` }}>
            <Carousel autoPlay={props.autoplay} infiniteLoop showThumbs={false}>
                {new Array(numberContainer).fill(0).map((_, i) => (
                    <ScrollHorizontalInfiniteProjetFrame
                        key={i}
                        projets={props.projets.slice(
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
