import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AnnoucementsPage } from "../pages/annoucements/annoucements";
import { AnnoucementsPageModule } from "../pages/annoucements/annoucements.module";
import { ClassesPage } from "../pages/classes/classes";
import { ClassesPageModule } from "../pages/classes/classes.module";

import { ProfilePage } from "../pages/profile/profile";
import { ProfilePageModule } from "../pages/profile/profile.module";

import { TabsPage } from "../pages/tabs/tabs";

import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";

import { StudentIdPage } from "../pages/student-id/student-id";
import { StudentIdPageModule } from "../pages/student-id/student-id.module";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    LoginPage,
    AnnoucementsPage,
    ClassesPage,
    TabsPage,
    StudentIdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AnnoucementsPageModule,
    ClassesPageModule,
    ProfilePageModule,
    StudentIdPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    LoginPage,
    AnnoucementsPage,
    ClassesPage,
    TabsPage,
    StudentIdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
