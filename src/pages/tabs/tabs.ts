import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { AnnoucementsPage } from "../annoucements/annoucements";
import { ClassesPage } from "../classes/classes";
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = AnnoucementsPage;
  tab3Root = ClassesPage;

  constructor(public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    this.loginLoading();
  }

  loginLoading() {
    const loader = this.loadingCtrl.create({
      content: "Trwa logowanie...",
      duration: 2000
    });
  loader.present();
  }
}
