import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Book} from '../app/entities/book'
import {Recipe} from '../app/entities/recipe'

/*
  Generated class for the BooksList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BooksListService {
  
  constructor(public http: Http) {
    console.log('Hello BooksList Provider');
  }

  getBooks(){
    let books:Book[]=[];
    let book = new Book();
    let recipe = new Recipe()

    book.name="italian food";
    book.description="book for italian food";
    book.shareType="private"
    
    recipe.name="spagetti"
    recipe.description="yammi spagetti"
    recipe.ingredients=["one pack of spagetti","5 cups of water","salt"];
    recipe.preparation="Coock all ingredients";
    book.recipes.push(recipe);
    
    recipe = new Recipe()
    recipe.name="pasta"
    recipe.description="yammi pasta"
    recipe.ingredients=["one pack of pasta","5 cups of water","Tomato souce","salt"];
    recipe.preparation="Coock all ingredients";
    book.recipes.push(recipe);
            
    recipe = new Recipe()
    recipe.name="pizza"
    recipe.description="yammi pizza"
    recipe.ingredients=["one pack of pizza","Tomato souce","salt"];
    recipe.preparation="Coock all ingredients";
    book.recipes.push(recipe);


    books.push(book);

    book = new Book();
    book.name="American food";
    book.description="book for American food";
    book.shareType="private"

    books.push(book);
    return books;
  }
}
