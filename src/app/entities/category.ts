import { Recipe } from "./recipe";

export class Category {
    id: string = "0";
    name: string = "";      
    recipes: Recipe[] = [];
}