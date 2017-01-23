import { Category } from "./category";

export class Book {
    id: string = "0";
    name: string = "";
    description: string = "";
    shareType: string = "";
    categories: Category[] = [];
}