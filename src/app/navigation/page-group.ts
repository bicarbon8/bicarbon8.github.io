import { PageData } from "./page-data";

export interface PageGroup {
    title: string;
    descripton?: string;
    pages: PageData[];
}