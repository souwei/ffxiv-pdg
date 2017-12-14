import { Component,OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import { DungeonService } from '../../app/services/dungeon-service';
import { DungeonCollection } from '../../data/dungeonColletion.interface';

@Component({
  selector: 'page-dungeons-listing',
  templateUrl: 'dungeons-listing.html',
})
export class DungeonsListingPage implements OnInit{

  expLogoPaths: {};

  dungeonsCollection: DungeonCollection[];

  dungeonPage = DungeonInfoPage;
  selectedCategory: string;
  dungeonsIcon: {};


  constructor(private dungeonSvr: DungeonService, private navParams:  NavParams){
  }

  ngOnInit(){
    this.selectedCategory = this.navParams.data['type'];
    this.dungeonsCollection = this.dungeonSvr.getDungeons(this.selectedCategory);
    this.dungeonsIcon = this.dungeonSvr.getDungeonIcons();
    this.expLogoPaths = this.dungeonSvr.getExpLogos();
  }

  getDungeonIcon(storyline:boolean){
    return (storyline) ? this.dungeonsIcon['main'] : this.dungeonsIcon['opt'];
  }

  getExpLogo(expansion:string){
    return this.expLogoPaths[expansion];
  }

}
