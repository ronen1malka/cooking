import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Book } from '../app/entities/book'
import { Recipe } from '../app/entities/recipe'

/*
  Generated class for the BooksList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BooksListService {
  books: Book[] = [];
  constructor(public http: Http) {
    console.log('Hello BooksList Provider');
    //var books1 = this.getBooks()
    //console.log(JSON.stringify(books1));
  }

  getBooks() {
    return this.http.request('../app/test_data.json')
      .map(res => res.json());

      

    /*let books:Book[]=[];
    let book = new Book();
    let recipe = new Recipe()

    book.name="אוכל איטלקי";
    book.description="ספר מתכונים מהמטבח האיטלקי";
    book.shareType="private"
    
    recipe.name="ספגטי"
    recipe.description="ספגט טעים"
    recipe.ingredients=["חבילת ספגטי","5 כוסות מים","מלח"];
    recipe.preparation="לבשל בסיר את כל המרכיבים";
    book.recipes.push(recipe);
    
    recipe = new Recipe()
    recipe.name="פסטה"
    recipe.description="פסטה טעימה"
    recipe.ingredients=["one pack of pasta","5 כוסות מים","Tomato souce","מלח"];
    recipe.preparation="לבשל בסיר את כל המרכיבים";
    book.recipes.push(recipe);
            
    recipe = new Recipe()
    recipe.name="פיצה"
    recipe.description="פיצה מעולה"
    recipe.ingredients=["one pack of pizza","רסק עגבניות","מלח"];
    recipe.preparation="לבשל בסיר את כל המרכיבים";
    book.recipes.push(recipe);

    books.push(book);

    book = new Book();
    book.name="אוכל אמריקאי";
    book.description="מתכונים אמריקאים";
    book.shareType="private"

    recipe = new Recipe()
    recipe.name="המבורגר"
    recipe.description="המבורגר מעולה"
    recipe.ingredients=["חצי קילו בשר טחון","רסק עגבניות","מלח"];
    recipe.preparation="לטגן את כל המרכיבים";
    book.recipes.push(recipe);

    books.push(book);

    book = new Book();
    book.name="אוכל ישראלי";
    book.description="מתכונים ישראלים";
    book.shareType="private"

    recipe = new Recipe()
    recipe.name="פלאפל"
    recipe.description="פאךאפל מעולה"
    recipe.ingredients=["קילו חומוס","רסק עגבניות","מלח"];
    recipe.preparation="לטגן את כל המרכיבים";
    book.recipes.push(recipe);

    books.push(book);*/
    //return this.books;
  }
}
