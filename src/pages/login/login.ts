import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksListPage } from '../books-list/books-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
     this.navCtrl.push(BooksListPage)
  }

}
