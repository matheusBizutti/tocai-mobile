import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicalListDetailPage } from './musical-list-detail';
import { MusicalListDetailService } from './musical-list-detail.service';

@NgModule({
  declarations: [
    MusicalListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicalListDetailPage),
  ],
  providers: [MusicalListDetailService]
})
export class MusicalListDetailPageModule {}
