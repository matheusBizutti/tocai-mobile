import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginService } from './login.service';
import { AuthService } from '../../app/auth/auth.service';
import { ToasterService } from '../../app/toaster/toaster.service';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    email: '';
    password: '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loginService: LoginService,
              private authService: AuthService,
              private toastCtrl: ToasterService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    this.loginService.siginAuth({email : this.email, password: this.password}).subscribe(response => {

      this.authService.setToken(response['token']);
      this.navCtrl.setRoot(TabsPage);
    }, err => {
      this.toastCtrl.setToaster('Não foi possível efetuar o login com dados informados.');
    });
  }

}
