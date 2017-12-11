import { Injectable } from '@angular/core';
import { Dungeon } from '../../data/dungeon.interface';
import LevelDungeons from '../../data/levelingDungeons';
import ExpertDungeons from '../../data/expertDungeons';

const tipIconPaths = {
  "heal"       : "../../assets/imgs/heal.png",
  "tank"       : "../../assets/imgs/tank.png",
  "dps"        : "../../assets/imgs/dps.png",
  "general"    : "../../assets/imgs/general.png",
  "avoid"      : "../../assets/imgs/avoid.png",
  "mechanic"   : "../../assets/imgs/mech.png"
}

@Injectable()
export class DungeonService {

  constructor() { }

  getDungeons(dungeonType: string): any {
    return (dungeonType === 'leveling') ? LevelDungeons : ExpertDungeons;
  }

  getTipIconPaths(): object {
    return tipIconPaths;
  }

}
