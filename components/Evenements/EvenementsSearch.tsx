import React from "react";
import Select, { SelectProps } from "../Common/Select";

type Props = {
    anneeValues: number[];
    anneeOnChange: (s: string) => void;
    projetValues: string[];
    projetOnChange: (s: string) => void;
};

const EvenementsSearch = (props: Props) => {
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
    ];
    return (
        <div>
            <div className="shadow border px-4 py-4 rounded flex flex-col gap-y-4 w-full">
                <p className="text-3xl font-bold text-center">Recherche</p>
                <div className="flex flex-col md:flex-row gap-y-4 justify-center gap-x-8">
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

export default EvenementsSearch;
