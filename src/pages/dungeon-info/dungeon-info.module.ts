import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DungeonInfoPage } from './dungeon-info';

@NgModule({
  declarations: [
    DungeonInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DungeonInfoPage),
  ],
})
export class DungeonInfoPageModule {}
