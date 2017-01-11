import {Recipe} from "./recipe";

export class Book {
    name: string = "";
    description: string = "";
    shareType: string = "";
    recipes: Recipe[] = [];
}