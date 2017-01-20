import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksListPage } from '../pages/books-list/books-list'
import { BooksListService } from '../providers/books-list.service'
import {AngularFireModule} from 'angularfire2'


  export const firbaseConfig = {
    apiKey: "AIzaSyCrbS2lPxm9Gy65eCXu4WIKAcic1ks8DYI",
    authDomain: "coocking-ef7da.firebaseapp.com",
    databaseURL: "https://coocking-ef7da.firebaseio.com",
    storageBucket: "coocking-ef7da.appspot.com",
    messagingSenderId: "679421931049"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firbaseConfig)
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
