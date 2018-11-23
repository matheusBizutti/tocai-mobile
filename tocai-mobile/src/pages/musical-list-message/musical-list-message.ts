import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicalListMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'musical-list-message'
})
@Component({
  selector: 'page-musical-list-message',
  templateUrl: 'musical-list-message.html',
})
export class MusicalListMessagePage {

  private email;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = navParams.get('email');
  }

  ionViewDidLoad() {}

}
