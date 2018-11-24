import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicalListService } from '../musical-list/musical-list.service';
import { ToasterService } from '../../app/toaster/toaster.service';
import { AuthService } from '../../app/auth/auth.service';

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
  sendmail = {
    from: '',
    to: '',
    subject: '',
    html: ''
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private musicalListService: MusicalListService,
              private toasterService: ToasterService,
              private authService: AuthService) {
    this.email = navParams.get('email');
  }

  ionViewDidLoad() {}

  sendMail() {

    this.sendmail.from = this.authService.getEmail();
    this.sendmail.to = this.email;

    const bodyMail = this.sendmail.html;
    this.sendmail.html = `De: ` + `${this.sendmail.from}` + ` Para: ` + `${this.sendmail.to}` + ' ' + bodyMail;

    this.musicalListService.sendMail(this.sendmail).subscribe(response => {
      this.toasterService.setToaster('E-mail enviado com sucesso.');
      this.sendmail = {
        from: undefined,
        to: undefined,
        subject: undefined,
        html: undefined
      };
      this.navCtrl.push('musical-list');
    }, err => {
      this.toasterService.setToaster('Não foi possível enviar o e-mail');
    });
  }

}
