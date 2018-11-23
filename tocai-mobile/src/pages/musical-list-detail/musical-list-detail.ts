import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicalListDetailService } from './musical-list-detail.service';

@IonicPage({
  name: 'musical-list-detail'
})
@Component({
  selector: 'page-musical-list-detail',
  templateUrl: 'musical-list-detail.html',
})
export class MusicalListDetailPage {

  detail: Array<Object>;
  email: string;
  objectDetail: Object;

  musicalstyle: string;
  linkyoutube: string;
  linkspotify: string;
  telefone: string;
  emailDetail: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private musicalListDetailService: MusicalListDetailService) {
    this.email = navParams.get('email');
  }

  ionViewDidLoad() {
    this.musicalListDetailService.getMusicalListDetail(this.email).subscribe(response => {
      this.detail = [...response];
      this.objectDetail = this.detail[0];
      this.musicalstyle = this.objectDetail['musicalstyle'];
      this.linkspotify = this.objectDetail['linkspotify'];
      this.linkyoutube = this.objectDetail['linkyoutube'];
      this.telefone = this.objectDetail['telefone'];
      this.emailDetail = this.objectDetail['email'];
    });
  }

}
