import { Component } from '@angular/core';

import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProfileService } from './profile.service';
import { ToasterService } from '../../app/toaster/toaster.service';
import { AuthService } from '../../app/auth/auth.service';

@IonicPage({
  name: 'profile'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  password: string;
  confirmpassword: string;
  newpassword: string;
  email: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appCtrl: App,
              private authService: AuthService,
              private profileService: ProfileService,
              private toastService: ToasterService) {}

  ionViewDidLoad() {}

  exit(){
    this.authService.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  changePassword() {

    const FAILED = 'Não foi possível alterar os dados.';
    const SUCCESS = 'Dados alterados com sucesso.';

    if (this.newpassword === this.confirmpassword &&
        this.newpassword !== this.password) {

        const body = {
          password: this.newpassword,
          confirmpassword: this.confirmpassword
        };

          this.profileService.changePassword(body, this.email).subscribe(response => {
          this.toastService.setToaster(SUCCESS);
          this.restore();
        }, err => {
          console.log(err);
          this.toastService.setToaster(FAILED);
        });
    } else {
      this.toastService.setToaster('As senhas devem ser iguais.');
    }

  }

  private restore() {
    this.password = '';
    this.confirmpassword = '';
    this.newpassword = '';
    this.email = '';
  }

}
