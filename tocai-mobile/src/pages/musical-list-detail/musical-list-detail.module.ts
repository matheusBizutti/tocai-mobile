import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicalListDetailPage } from './musical-list-detail';

@NgModule({
  declarations: [
    MusicalListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicalListDetailPage),
  ],
})
export class MusicalListDetailPageModule {}
