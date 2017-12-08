import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DungeonsListingPage } from './dungeons-listing';

@NgModule({
  declarations: [
    DungeonsListingPage,
  ],
  imports: [
    IonicPageModule.forChild(DungeonsListingPage),
  ],
})
export class DungeonsListingPageModule {}
