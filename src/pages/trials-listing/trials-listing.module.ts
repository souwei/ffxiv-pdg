import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialsListingPage } from './trials-listing';

@NgModule({
  declarations: [
    TrialsListingPage,
  ],
  imports: [
    IonicPageModule.forChild(TrialsListingPage),
  ],
})
export class TrialsListingPageModule {}
