import { Component , OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonService } from '../../app/services/dungeon-service';

@Component({
  selector: 'page-dungeon-info',
  templateUrl: 'dungeon-info.html',
})

export class DungeonInfoPage implements OnInit {
  dungeon: Dungeon;
  tipIconPaths: {};

  constructor(
    public navCtrl: NavController,
    public dungeonSvr: DungeonService,
    public navParams: NavParams) {
  }

  ngOnInit(){
    this.dungeon = this.navParams.data;
    this.tipIconPaths = this.dungeonSvr.getTipIconPaths();
  }

  getTipIconPath(tipIcon: string){
    return this.tipIconPaths[tipIcon];
  }

}
