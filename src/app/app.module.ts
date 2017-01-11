import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksListPage } from '../pages/books-list/books-list'
import { BooksListService } from '../providers/books-list.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksListPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BooksListService]
})
export class AppModule { }
