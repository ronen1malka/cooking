import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksListPage } from '../books-list/books-list';
import { LoginService } from '../../providers/login-service';
import {alerts} from '../../shared/alerts';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email = "";
  password = "";

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private _loginService: LoginService,
    private _alerts:alerts) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    //
    this._loginService.login(this.email, this.password)
    .then(authState => {
        console.log("LOGIN-THEN",authState);
        this.navCtrl.push(BooksListPage);
    })
   .catch(error => {
       console.log("LOGIN-ERROR",error)
       this._alerts.showAlert("Error","Login failed",["OK"])
      });
  }
  
  register() {
    this._loginService.register(this.email, this.password)
    .then(authState => {
      console.log("REGISTER-THEN", authState)
      authState.auth.sendEmailVerification();
    })
      .catch(error => console.log("REGISTER-ERROR", error));
  }

  logout() {
    this._loginService.logout();
  }
}
