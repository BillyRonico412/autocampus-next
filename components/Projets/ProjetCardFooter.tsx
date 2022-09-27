import { Fragment } from "react";

type Props = {
    titre: string;
    motcles: string[];
};

const ProjetCardFooter = (props: Props) => {
    return (
        <div className="h-[80px] px-4 bg-footer">
            <div className="text-xl font-semibold truncate">{props.titre}</div>
            <ul className="truncate">
                {props.motcles.map((motcle, i) => (
                    <Fragment key={i}>
                        {i !== 0 && ", "}
                        <span>{motcle}</span>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};

export default ProjetCardFooter;
