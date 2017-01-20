import { Recipe } from "./recipe";

export class Book {
    id: string = "0";
    name: string = "";
    description: string = "";
    shareType: string = "";
    recipes: Recipe[] = [];
}