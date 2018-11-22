import { Component } from '@angular/core';

import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage({
  name: 'musical-list'
})
@Component({
  selector: 'page-musical-list',
  templateUrl: 'musical-list.html',
})
export class MusicalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicalListPage');
  }

  detail() {
    this.navCtrl.push('musical-list-detail', {id: '0001'});
  }

  exit(){
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  message() {
    this.navCtrl.push('musical-list-message', {id: '0001'});
  }

}
