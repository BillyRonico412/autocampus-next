import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const LayoutCard = (props: Props) => {
    return (
        <div className="flex xl:grid xl:grid-cols-2 gap-x-8 flex-col gap-y-12">
            {props.children}
        </div>
    );
};

export default LayoutCard;
