import { FilArianeInterface } from "../../utils/interface";
import Link from "next/link";

type Props = {
    filArianes: FilArianeInterface[];
};

const FilAriane = (props: Props) => {
    return (
        <div className="flex gap-x-1">
            {props.filArianes.map((fil, i) => (
                <div key={i} className="flex gap-x-1 text-lg font-semibold">
                    {i !== 0 && <span>/</span>}
                    <Link href={fil.link}>
                        <span className="hover:underline cursor-pointer">{fil.text}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FilAriane;
