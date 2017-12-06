import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelDungeonsPage } from './level-dungeons';

@NgModule({
  declarations: [
    LevelDungeonsPage,
  ],
  imports: [
    IonicPageModule.forChild(LevelDungeonsPage),
  ],
})
export class LevelDungeonsPageModule {}
