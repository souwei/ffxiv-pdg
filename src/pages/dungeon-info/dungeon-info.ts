import { Component , OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonService } from '../../app/services/dungeon-service';
import { SettingsProvider } from './../../providers/settings/settings';

@Component({
  selector: 'page-dungeon-info',
  templateUrl: 'dungeon-info.html',
})

export class DungeonInfoPage implements OnInit {
  dungeon: Dungeon;
  tipIconPaths: {};
  selectedTheme: String;


  constructor(
    public navCtrl: NavController,
    public dungeonSvr: DungeonService,
    public navParams: NavParams,
  private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ngOnInit(){
    this.dungeon = this.navParams.data;
    this.tipIconPaths = this.dungeonSvr.getTipIconPaths();
  }

  getTipIconPath(tipIcon: string){
    return this.tipIconPaths[tipIcon];
  }

  toggleAppTheme() {
if (this.selectedTheme === 'dark-theme') {
  this.settings.setActiveTheme('light-theme');
} else {
  this.settings.setActiveTheme('dark-theme');
}
}

}
