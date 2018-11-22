import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicalListMessagePage } from './musical-list-message';

@NgModule({
  declarations: [
    MusicalListMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MusicalListMessagePage),
  ],
})
export class MusicalListMessagePageModule {}
