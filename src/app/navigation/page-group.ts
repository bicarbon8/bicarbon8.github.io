import { PageData } from "./page-data";

export interface PageGroup {
    groupTitle: string;
    groupDescripton?: string;
    pages: PageData[];
}