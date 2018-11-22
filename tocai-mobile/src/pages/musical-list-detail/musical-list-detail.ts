import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'musical-list-detail'
})
@Component({
  selector: 'page-musical-list-detail',
  templateUrl: 'musical-list-detail.html',
})
export class MusicalListDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ID: ',navParams.get('id'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicalListDetailPage');
  }

}
