export interface PageData {
    title: string;
    descripton?: string;
    url?: string;
    routeName?: string;
    childPages?: PageData[];
    classes?: string;
}