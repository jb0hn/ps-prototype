import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentIdPage } from './student-id';

@NgModule({
  declarations: [
    StudentIdPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentIdPage),
  ],
})
export class StudentIdPageModule {}
