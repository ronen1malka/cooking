import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Book } from '../../app/entities/book'
import { BooksListService } from '../../providers/books-list.service'
import { BookCategoryListPage } from '../book-category-list/book-category-list'
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html'
})
export class BooksListPage {
  books: FirebaseListObservable<Book[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _booksListService: BooksListService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.books = this._booksListService.getBooks()
  }

  itemSelected(book) {
    this.navCtrl.push(BookCategoryListPage, { book: book })
  }

}
