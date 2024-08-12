

export interface IService {
    header: string;
    paragraph: string;
    icon: string | undefined;
};

export interface ISector {
    title: string;
    image: string | undefined;
    tagPosition: Array<number>
}