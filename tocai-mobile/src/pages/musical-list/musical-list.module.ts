import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicalListPage } from './musical-list';
import { MusicalListService } from './musical-list.service';

@NgModule({
  declarations: [
    MusicalListPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicalListPage),
  ],
  providers: [MusicalListService]
})
export class MusicalListPageModule {}
