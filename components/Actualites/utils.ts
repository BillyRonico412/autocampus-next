
export enum ActualitesEnum {
    Evenements,
    VuDansLesMedias,
}

export type EvenementsType = {
    image: string;
    titre: string;
    description: string;
    date: string;
    projet: string;
    link?: {
        ext: boolean;
        target: string;
    };
};
