import { Component } from '@angular/core';
import { DungeonsListingPage } from '../dungeons-listing/dungeons-listing';
import { SettingsProvider } from '../../providers/settings/settings';
import { TrialsListingPage } from '../trials-listing/trials-listing';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs (ionChange)="resetStack($event)">
      <ion-tab [root]="dungeonsListingPage"
               tabIcon="dungeon"></ion-tab>

      <ion-tab [root]="dungeonsListingPage"
               tabIcon="trial"></ion-tab>

      <ion-tab [root]="trialsListingPage"
               tabIcon="raid"></ion-tab>

      <ion-tab [root]="dungeonsListingPage"
               tabIcon="star"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  dungeonsListingPage = DungeonsListingPage;
  trialsListingPage = TrialsListingPage;
  selectedTheme: String;

  constructor(private settings: SettingsProvider){
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  resetStack(ev:any){
    if(ev.length()>1){
      ev.popToRoot();
    }
  }
}
