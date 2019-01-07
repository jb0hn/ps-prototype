import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from "../login/login";
/**
 * Generated class for the AnnoucementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annoucements',
  templateUrl: 'annoucements.html',
})
export class AnnoucementsPage {

  annoucment: string = 'classes';
  title: string = "Komunikaty";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoucementsPage');
  }

  logout(){
    this.navCtrl.push(LoginPage);
  }

}
