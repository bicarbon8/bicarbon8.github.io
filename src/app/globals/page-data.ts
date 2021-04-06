export interface PageData {
    title: string;
    descripton?: string;
    url?: string;
    codeSourceUrl?: string;
    routeName?: string;
    childPages?: PageData[];
    classes?: string;
}