import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookCategoryListService} from '../../providers/book-category-list-service';
import { Book } from '../../app/entities/book';


@Component({
  selector: 'page-book-category-list',
  templateUrl: 'book-category-list.html'
})

export class BookCategoryListPage {
  bookid;
  bookName;
  bookCategories;
  constructor( private navCtrl: NavController,  navParams: NavParams, private _bookCategoryListService : BookCategoryListService) {
    let book:Book=navParams.get('book');
    this.bookid=book.id;
    this.bookName=book.name;
  }

  ionViewDidLoad() {
    this.bookCategories= this._bookCategoryListService.getBookCategories(this.bookid);
    console.log('ionViewDidLoad BookCategoryListPage');
  }

  itemSelected(category) {
    this.navCtrl.push(BookCategoryListPage, { category: category })
  }

}
