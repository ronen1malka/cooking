var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Book } from '../app/entities/book';
import { Category } from '../app/entities/category';
import { Recipe } from '../app/entities/recipe';
import { AngularFire } from 'angularfire2';
var BooksListService = (function () {
    //books: Book[] = [];
    function BooksListService(af) {
        this.af = af;
        console.log('Hello BooksList Provider');
        //this.sampledata();    
    }
    BooksListService.prototype.getBooks = function () {
        return this.af.database.list('/books');
    };
    BooksListService.prototype.sampledata = function () {
        var books = [];
        var book = new Book();
        var recipe = new Recipe();
        var category = new Category();
        book.id = "0";
        book.name = "אוכל איטלקי";
        book.description = "ספר מתכונים מהמטבח האיטלקי";
        book.shareType = "private";
        category = new Category();
        category.name = "פסטות";
        category.id = "0";
        book.categories.push(category);
        recipe.name = "ספגטי";
        recipe.description = "ספגט טעים";
        recipe.ingredients = ["חבילת ספגטי", "5 כוסות מים", "מלח"];
        recipe.preparation = "לבשל בסיר את כל המרכיבים";
        category.recipes.push(recipe);
        recipe = new Recipe();
        recipe.name = "פסטה";
        recipe.description = "פסטה טעימה";
        recipe.ingredients = ["one pack of pasta", "5 כוסות מים", "Tomato souce", "מלח"];
        recipe.preparation = "לבשל בסיר את כל המרכיבים";
        category.recipes.push(recipe);
        category = new Category();
        category.name = "פיצות";
        category.id = "1";
        book.categories.push(category);
        recipe = new Recipe();
        recipe.name = "פיצה";
        recipe.description = "פיצה מעולה";
        recipe.ingredients = ["one pack of pizza", "רסק עגבניות", "מלח"];
        recipe.preparation = "לבשל בסיר את כל המרכיבים";
        category.recipes.push(recipe);
        books.push(book);
        book.id = "1";
        book = new Book();
        book.name = "אוכל אמריקאי";
        book.description = "מתכונים אמריקאים";
        book.shareType = "private";
        category = new Category();
        category.name = "בשר";
        category.id = "0";
        book.categories.push(category);
        recipe = new Recipe();
        recipe.name = "המבורגר";
        recipe.description = "המבורגר מעולה";
        recipe.ingredients = ["חצי קילו בשר טחון", "רסק עגבניות", "מלח"];
        recipe.preparation = "לטגן את כל המרכיבים";
        category.recipes.push(recipe);
        books.push(book);
        book = new Book();
        book.id = "2";
        book.name = "אוכל ישראלי";
        book.description = "מתכונים ישראלים";
        book.shareType = "private";
        category = new Category();
        category.name = "חטיפים";
        category.id = "0";
        book.categories.push(category);
        recipe = new Recipe();
        recipe.name = "פלאפל";
        recipe.description = "פאךאפל מעולה";
        recipe.ingredients = ["קילו חומוס", "רסק עגבניות", "מלח"];
        recipe.preparation = "לטגן את כל המרכיבים";
        category.recipes.push(recipe);
        books.push(book);
        var j = { "books": books };
        console.log(JSON.stringify(j));
    };
    return BooksListService;
}());
BooksListService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFire])
], BooksListService);
export { BooksListService };
//# sourceMappingURL=books-list.service.js.map