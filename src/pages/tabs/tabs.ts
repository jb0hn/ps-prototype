import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { AnnoucementsPage } from "../annoucements/annoucements";
import { ClassesPage } from "../classes/classes";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = AnnoucementsPage;
  tab3Root = ClassesPage;

  constructor() {

  }
}
