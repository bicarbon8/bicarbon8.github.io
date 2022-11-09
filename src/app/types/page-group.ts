import { PageData } from "./page-data";

export type PageGroup = {
    groupTitle: string;
    groupDescripton?: string;
    pages: PageData[];
};