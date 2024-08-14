export type position = {
    x: string
    y: string
}

export interface IService {
    header: string;
    paragraph: string;
    icon: string | undefined;
};

export interface ISector {
    title: string;
    image: string | undefined;
    tagPosition: position
}

