var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookCategoryListService } from '../../providers/book-category-list-service';
var BookCategoryListPage = BookCategoryListPage_1 = (function () {
    function BookCategoryListPage(navCtrl, navParams, _bookCategoryListService) {
        this.navCtrl = navCtrl;
        this._bookCategoryListService = _bookCategoryListService;
        var book = navParams.get('book');
        this.bookid = book.id;
        this.bookName = book.name;
    }
    BookCategoryListPage.prototype.ionViewDidLoad = function () {
        this.bookCategories = this._bookCategoryListService.getBookCategories(this.bookid);
        console.log('ionViewDidLoad BookCategoryListPage');
    };
    BookCategoryListPage.prototype.itemSelected = function (category) {
        this.navCtrl.push(BookCategoryListPage_1, { category: category });
    };
    return BookCategoryListPage;
}());
BookCategoryListPage = BookCategoryListPage_1 = __decorate([
    Component({
        selector: 'page-book-category-list',
        templateUrl: 'book-category-list.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, BookCategoryListService])
], BookCategoryListPage);
export { BookCategoryListPage };
var BookCategoryListPage_1;
//# sourceMappingURL=book-category-list.js.map