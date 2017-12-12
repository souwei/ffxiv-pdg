import { Component } from '@angular/core';
import { DungeonsListingPage } from '../dungeons-listing/dungeons-listing';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs (ionChange)="resetStack($event)">
      <ion-tab [root]="dungeonsListingPage"
               [rootParams]="{type:'leveling'}"
               tabTitle="Leveling Dungeons"
               tabIcon="leaf"></ion-tab>

      <ion-tab [root]="dungeonsListingPage"
               [rootParams]="{type:'expert'}"
               tabTitle="Expert Dungeons"
               tabIcon="star"></ion-tab>

      <ion-tab [root]="dungeonsListingPage"
               [rootParams]="{type:'leveling'}"
               tabTitle="Leveling Dungeons"
               tabIcon="leaf"></ion-tab>

      <ion-tab [root]="dungeonsListingPage"
               [rootParams]="{type:'expert'}"
               tabTitle="Expert Dungeons"
               tabIcon="star"></ion-tab>          
    </ion-tabs>
  `
})

export class TabsPage {
  dungeonsListingPage = DungeonsListingPage;
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
