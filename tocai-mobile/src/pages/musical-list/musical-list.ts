import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'musical-list'
})
@Component({
  selector: 'page-musical-list',
  templateUrl: 'musical-list.html',
})
export class MusicalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicalListPage');
  }

  detail() {
    this.navCtrl.push('musical-list-detail', {id: '0001'});
  }

  message() {
    this.navCtrl.push('musical-list-message', {id: '0001'});
  }

}
