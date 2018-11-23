import { Component } from '@angular/core';

import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AuthService } from '../../app/auth/auth.service';
import { MusicalListService } from './musical-list.service';

@IonicPage({
  name: 'musical-list'
})
@Component({
  selector: 'page-musical-list',
  templateUrl: 'musical-list.html',
})
export class MusicalListPage {

  musicalList: Array<Object>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appCtrl: App,
              private authService: AuthService,
              private musicalListService: MusicalListService) {
  }

  ionViewDidLoad() {
    this.musicalListService.getMusicalList('1').subscribe(response => {
      this.musicalList = [...response];
    });
  }

  detail(email) {
    this.navCtrl.push('musical-list-detail', {email: email});
  }

  exit(){
    this.authService.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  message(email) {
    this.navCtrl.push('musical-list-message', {email: email});
  }

  getType(type = '') {

    let typeReturn = '';

    switch (type) {

      case '1': {
        typeReturn = 'CARREIRA SOLO';
        break;
      }
      case '2': {
        typeReturn = 'DUPLA';
        break;
      }
      case '3': {
        typeReturn = 'BANDA';
        break;
      }
      default: {
        typeReturn = '';
        break;
     }

    }

    return typeReturn;
  }

  getChange(type = '') {

    let labelChangeReturn = '';

    switch (type) {

      case '1': {
        labelChangeReturn = 'ACEITA VIAGENS';
        break;
      }
      case '2': {
        labelChangeReturn = 'NÃO ACEITA VIAGENS';
        break;
      }
      default: {
        labelChangeReturn = '';
        break;
     }

    }

    return labelChangeReturn;
  }

}
