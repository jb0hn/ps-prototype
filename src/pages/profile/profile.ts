import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentIdPage } from "../student-id/student-id";
import { LoginPage } from "../login/login";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  title: string = "Profil";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showId(event, button) {
    this.navCtrl.push(StudentIdPage, {
      button: button
    });
  }

  logout(){
    this.navCtrl.push(LoginPage);
  }
}
