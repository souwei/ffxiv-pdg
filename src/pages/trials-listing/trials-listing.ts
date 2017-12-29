import { Component,OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import { DungeonService } from '../../app/services/dungeon-service';
import { DungeonCollection } from '../../data/dungeonColletion.interface';
import { Dungeon } from '../../data/dungeon.interface';
import { arr } from '../../data/trials.data';

@Component({
  selector: 'page-trials-listing',
  templateUrl: 'trials-listing.html',
})
export class TrialsListingPage implements OnInit{

  expLogoPaths: {};
  dungeonPage = DungeonInfoPage;
  dungeonsIcon: {};

  arrDungeons:  Dungeon[];
  hvwDungeons:  Dungeon[] = [];
  sbDungeons:   Dungeon[] = [];

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
    this.arrDungeons = arr;
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
