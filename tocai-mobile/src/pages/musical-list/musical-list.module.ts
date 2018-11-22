import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicalListPage } from './musical-list';

@NgModule({
  declarations: [
    MusicalListPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicalListPage),
  ],
})
export class MusicalListPageModule {}
