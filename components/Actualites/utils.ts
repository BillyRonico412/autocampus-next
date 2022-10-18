export enum ActualitesEnum {
    Evenements,
    VuDansLesMedias,
}

export type EvenementsType = {
    id: number;
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
