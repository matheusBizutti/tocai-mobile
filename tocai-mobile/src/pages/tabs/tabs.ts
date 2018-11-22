import { Component } from '@angular/core';

import { MusicalListPage } from '../musical-list/musical-list';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = MusicalListPage;

  constructor() {

  }
}
