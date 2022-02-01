import { ButtonData } from "src/app/carousel/button-data";
import { CarouselImageData } from "./carousel-image-data";

export interface CarouselItemData extends CarouselImageData {
    active?: boolean;
    title?: string;
    description?: string;
    actions?: ButtonData[];
}