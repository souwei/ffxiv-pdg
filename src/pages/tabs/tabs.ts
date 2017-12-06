import { Component } from '@angular/core';
import { LevelDungeonsPage } from '../level-dungeons/level-dungeons';
import { ExpertDungeonsPage } from '../expert-dungeons/expert-dungeons';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs (ionChange)="resetStack($event)">
      <ion-tab [root]="levelDungeonsPage" tabTitle="Leveling Dungeon" tabIcon="leaf"></ion-tab>
      <ion-tab [root]="expertDungeonsPage" tabTitle="Expert Dungeon" tabIcon="star"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  levelDungeonsPage = LevelDungeonsPage;
  expertDungeonsPage = ExpertDungeonsPage;

  resetStack(ev:any){
    if(ev.length()>1){
      ev.popToRoot();
    }
  }
}
