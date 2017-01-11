import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Book } from '../../app/entities/book'
import { BooksListService } from '../../providers/books-list.service'

/*
  Generated class for the BooksList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html'
})
export class BooksListPage {
  books: Book[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _booksListService: BooksListService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.books = this._booksListService.getBooks();
  }

}
