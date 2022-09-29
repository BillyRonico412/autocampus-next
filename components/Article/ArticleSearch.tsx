import Search from "../Common/Search";
import Select, { SelectProps } from "../Common/Select";

type Props = {
    anneeValues: number[];
    anneeOnChange: (s: string) => void;
    projetValues: string[];
    projetOnChange: (s: string) => void;
    categorieValues: string[];
    categorieOnChange: (s: string) => void;
    auteurValues: string[];
    auteurOnChange: (s: string) => void;
};

const ArticleSearch = (props: Props) => {
    const selects: SelectProps[] = [
        {
            text: "Année",
            values: props.anneeValues.map((annee) => ({
                key: String(annee),
                val: String(annee),
            })),
            defaultValue: {
                key: "Choisir l'année",
                val: "0",
            },
            onChange: props.anneeOnChange,
        },
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
        {
            text: "Categorie",
            values: props.categorieValues.map((categorie) => ({
                key: categorie,
                val: categorie,
            })),
            defaultValue: {
                key: "Choisir la categorie",
                val: "0",
            },
            onChange: props.categorieOnChange,
        },
        {
            text: "Auteur",
            values: props.auteurValues.map((auteur) => ({
                key: auteur,
                val: auteur,
            })),
            defaultValue: {
                key: "Choisir la categorie",
                val: "0",
            },
            onChange: props.auteurOnChange,
        },
    ];
    return (
        <div className="shadow border px-4 py-4 rounded flex flex-col gap-y-4 w-full">
            <p className="text-xl font-semibold text-center">Filtrer</p>
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
    );
};

export default ArticleSearch;
