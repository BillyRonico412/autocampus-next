import { getStaticPropsApi } from "../../utils/variables";

export type PartenaireProps = {
    description: string;
    lienExterne: string;
    logo: string;
    nom: string;
};

export enum PartenaireTypeEnum {
    Entreprises,
    Institutions,
    Laboratoires,
}

export const urlByPartenaireType = (partenaireType: PartenaireTypeEnum) => {
    let url = "/items/partenaire?filter[category][_eq]=";
    switch (partenaireType) {
        case PartenaireTypeEnum.Entreprises:
            url += "Entreprise";
            break;
        case PartenaireTypeEnum.Institutions:
            url += "Institution";
            break;
        case PartenaireTypeEnum.Laboratoires:
            url += "Laboratoire";
            break;
    }
    return url;
};
