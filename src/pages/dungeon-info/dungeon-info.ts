import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dungeon } from '../../data/dungeon.interface';

@Component({
  selector: 'page-dungeon-info',
  templateUrl: 'dungeon-info.html',
})

export class DungeonInfoPage {
  dungeon: Dungeon;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit(){
    this.dungeon = this.navParams.data;
  }

}
