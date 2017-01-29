var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksListPage } from '../pages/books-list/books-list';
import { BookCategoryListPage } from '../pages/book-category-list/book-category-list';
import { CategoryRecipesListPage } from '../pages/category-recipes-list/category-recipes-list';
import { BooksListService } from '../providers/books-list.service';
import { BookCategoryListService } from '../providers/book-category-list-service';
import { RecipeService } from '../providers/recipe-service';
import { AngularFireModule } from 'angularfire2';
export var firbaseConfig = {
    apiKey: "AIzaSyCrbS2lPxm9Gy65eCXu4WIKAcic1ks8DYI",
    authDomain: "coocking-ef7da.firebaseapp.com",
    databaseURL: "https://coocking-ef7da.firebaseio.com",
    storageBucket: "coocking-ef7da.appspot.com",
    messagingSenderId: "679421931049"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            BooksListPage,
            BookCategoryListPage,
            CategoryRecipesListPage
        ],
        imports: [
            IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(firbaseConfig)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            BooksListPage,
            BookCategoryListPage,
            CategoryRecipesListPage
        ],
        providers: [
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            BooksListService,
            BookCategoryListService,
            RecipeService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map