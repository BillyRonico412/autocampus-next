type Props = {
    abstract: string;
    motcles: string[];
};

const PublicationsScientifiquesAbstract = (props: Props) => {
    return (
        <div className="bg-primary-20 flex flex-col gap-y-4 px-4 py-4 w-[600px]">
            <p className="font-bold">Abstract: </p>
            <p className="font-normal">{props.abstract}</p>
            <p>
                <span className="font-bold">Mot clés: </span>
                {props.motcles.map((motcle, i) => (
                    <span key={i} className="font-normal">
                        {i !== 0 && ", "}
                        {motcle}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default PublicationsScientifiquesAbstract;
