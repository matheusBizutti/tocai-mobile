import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicalListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
