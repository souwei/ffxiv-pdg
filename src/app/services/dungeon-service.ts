import { Injectable } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import LevelDungeons from '../../data/levelingDungeons';
import ExpertDungeons from '../../data/expertDungeons';

@Injectable()
export class DungeonService {

  constructor() { }

  getDungeons(dungeonType: string): Dungeon[] {
    return (dungeonType === 'leveling') ? LevelDungeons : ExpertDungeons;
  }

}
