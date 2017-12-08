import { Injectable } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import LevelDungeons from '../../data/levelingDungeons';

@Injectable()
export class DungeonService {

  constructor() { }

  getDungeons(): Dungeon[] {
    return LevelDungeons;
  }

}
