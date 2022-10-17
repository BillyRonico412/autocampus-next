import Select, { SelectProps } from "../Common/Select";

type Props = {
    projetValues: string[];
    projetOnChange: (s: string) => void;
};

const VuDansMediasSearch = (props: Props) => {
    const selects: SelectProps[] = [
        {
            text: "Projet",
            values: props.projetValues.map((projet) => ({
                key: projet,
                val: projet,
            })),
            defaultValue: {
                key: "Choisir le projet",
                val: "0",
            },
            onChange: props.projetOnChange,
        },
    ];
    return (
        <div>
            <div className="shadow border px-4 py-4 rounded flex flex-col gap-y-4 w-full">
                <p className="text-3xl font-bold text-center">Recherche</p>
                <div className="flex justify-center gap-x-8">
                    {selects.map((select, i) => (
                        <Select
                            text={select.text}
                            values={select.values}
                            onChange={select.onChange}
                            defaultValue={select.defaultValue}
                            full
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VuDansMediasSearch;
