import { Component,OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import { DungeonService } from '../../app/services/dungeon-service';

@Component({
  selector: 'page-dungeons-listing',
  templateUrl: 'dungeons-listing.html',
})
export class DungeonsListingPage implements OnInit{
  dungeonsCollection: Dungeon[];
  dungeonPage = DungeonInfoPage;
  selectedCategory: string;
  dungeonsIcon: {} ;

  constructor(private dungeonSvr: DungeonService, private navParams:  NavParams){ }

  ngOnInit(){
    this.selectedCategory = this.navParams.data['type'];
    this.dungeonsCollection = this.dungeonSvr.getDungeons(this.selectedCategory);
    this.dungeonsIcon = this.dungeonSvr.getDungeonIcons();
  }

  getDungeonIcon(storyline:boolean){
    return (storyline) ? this.dungeonsIcon['main'] : this.dungeonsIcon['opt'];
  }

}
