import { Component } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import expertDungeons from '../../data/expertDungeons';

@Component({
  selector: 'page-expert-dungeons',
  templateUrl: 'expert-dungeons.html',
})

export class ExpertDungeonsPage {
  dungeonsCollection: Dungeon[];
  dungeonPage = DungeonInfoPage;

  ngOnInit(){
  this.dungeonsCollection = expertDungeons;
  }

}
