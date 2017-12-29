import { Component,OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import { DungeonService } from '../../app/services/dungeon-service';
import { DungeonCollection } from '../../data/dungeonColletion.interface';
import { Dungeon } from '../../data/dungeon.interface';
//import { arr,hvw,sb } from '../../data/dungeonsInfo';

@Component({
  selector: 'page-dungeons-listing',
  templateUrl: 'dungeons-listing.html',
})

export class DungeonsListingPage implements OnInit{
  expLogoPaths:     {};
  dungeonsIcon:     {};
  arrDungeons:      Dungeon[];
  hvwDungeons:      Dungeon[];
  sbDungeons:       Dungeon[];
  dungeonPage = DungeonInfoPage;

  constructor(private dungeonSvr: DungeonService, private navParams:  NavParams){
  }

  ngOnInit(){
    this.initializeItems();
    this.dungeonsIcon = this.dungeonSvr.getDungeonIcons();
    this.expLogoPaths = this.dungeonSvr.getExpLogos();
  }

  getDungeonIcon(storyline:boolean){
    return (storyline) ? this.dungeonsIcon['main'] : this.dungeonsIcon['opt'];
  }

  getExpLogo(expansion:string){
    return this.expLogoPaths[expansion];
  }

  initializeItems(): void {
    this.arrDungeons = this.dungeonSvr.getDungeons('arr');
    this.hvwDungeons = this.dungeonSvr.getDungeons('hvw');
    this.sbDungeons = this.dungeonSvr.getDungeons('sb');
  }

  getItems(searchbar){
    this.initializeItems();
    var q = searchbar.target.value;
    if (!q || q.trim() == '') {
      return;
    }
    this.filterItems(q);
  }

  //to do refactor this section
  filterItems(searchTerm){
    this.arrDungeons = this.arrDungeons.filter((dun)=>{
      return dun.dungeonName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    this.hvwDungeons = this.hvwDungeons.filter((dun)=>{
      return dun.dungeonName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })

    this.sbDungeons = this.sbDungeons.filter((dun)=>{
      return dun.dungeonName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

}
