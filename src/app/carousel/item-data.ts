import { ButtonData } from "src/globals/button-data";

export interface ItemData {
    imgSrc: string;
    altTxt: string;
    active?: boolean;
    title?: string;
    description?: string;
    actions?: ButtonData[];
}