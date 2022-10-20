import { Fragment } from "react";

type Props = {
    motcles: string[];
};

const PlateformesCardFooter = (props: Props) => {
    return (
        <div>
            <div className="h-[50px] px-4 bg-dark-font text-white flex items-center">
                <ul className="truncate font-semibold">
                    {props.motcles.map((motcle, i) => (
                        <Fragment key={i}>
                            {i !== 0 && ", "}
                            <span>{motcle}</span>
                        </Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlateformesCardFooter;
