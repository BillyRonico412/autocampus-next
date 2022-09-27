type Props = {
    nomPlateforme: string;
};
const ProjetCardHead = (props: Props) => {
    return (
        <div className="absolute top-0 left-0 bg-primary-old w-[200px] rounded-br-full px-4 py-1 text-xl font-semibold z-10">
            {props.nomPlateforme}
        </div>
    );
};

export default ProjetCardHead;
