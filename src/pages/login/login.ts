import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksListPage } from '../books-list/books-list';
import { RegestrationFormPage } from '../regestration-form/regestration-form';
import { LoginService } from '../../providers/login-service';
import { alerts } from '../../shared/alerts';


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
    private _alerts: alerts) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    //
    this._loginService.login(this.email, this.password)
      .then(authState => {
        console.log("LOGIN-THEN", authState);
        this.navCtrl.push(BooksListPage);
      })
      .catch(error => {
        console.log("LOGIN-ERROR", error)
        if (error['code'] == "auth/invalid-email") {
          this._alerts.showAlert("שגיאה", "כתובת אמייל אינה חוקית", ["OK"]);
        }
        else {
          this._alerts.showAlert("Error", "Login failed", ["OK"])
        }
      });
  }

  register() {
    this.navCtrl.push(RegestrationFormPage);
  }

  logout() {
    this._loginService.logout();
  }
}
