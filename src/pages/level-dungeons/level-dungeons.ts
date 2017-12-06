import { Component } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import levelingDungeons from '../../data/levelingDungeons';

@Component({
  selector: 'page-level-dungeons',
  templateUrl: 'level-dungeons.html',
})

export class LevelDungeonsPage {
  dungeonsCollection: Dungeon[];
  dungeonPage = DungeonInfoPage;

  ngOnInit(){
  this.dungeonsCollection = levelingDungeons;
  }
}
