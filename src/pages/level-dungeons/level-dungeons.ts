import { Component } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import { DungeonInfoPage } from '../dungeon-info/dungeon-info';
import { DungeonService } from '../../app/services/dungeon-service';

@Component({
  selector: 'page-level-dungeons',
  templateUrl: 'level-dungeons.html',
})

export class LevelDungeonsPage {
  dungeonsCollection: Dungeon[];
  dungeonPage = DungeonInfoPage;

  constructor(private dungeonSvr: DungeonService){ }

  ngOnInit(){
  this.dungeonsCollection = this.dungeonSvr.getDungeons();
  }
}
