import { Injectable } from '@angular/core';
import LevelDungeons from '../../data/levelingDungeons';
import ExpertDungeons from '../../data/expertDungeons';
import AllDungeons from '../../data/dungeons.data';
import { arr,hvw,sb } from '../../data/dungeonsInfo';
import { Dungeon } from '../../data/dungeon.interface';

import { DungeonCollection } from '../../data/dungeonColletion.interface';

const tipIconPaths = {
  "heal"       : "assets/imgs/heal.png",
  "tank"       : "assets/imgs/tank.png",
  "dps"        : "assets/imgs/dps.png",
  "general"    : "assets/imgs/general.png",
  "avoid"      : "assets/imgs/avoid.png",
  "mechanic"   : "assets/imgs/mech.png"
}

const dungeonIconPaths = {
  "main"      : "assets/imgs/msq.png",
  "opt"       : "assets/imgs/oq.png"
}

const expLogoPaths = {
  "A Realm Reborn"       : "assets/imgs/arr.png",
  "Heavensward"        : "assets/imgs/hw.png",
  "Stormblood"        : "assets/imgs/sb.png"
}

@Injectable()
export class DungeonService {

  constructor() { }

  getDungeons(dungeonExp: string): Promise<Dungeon[]> {
    var dungeonSet = {
      "arr" : arr,
      "hvw" : hvw,
      "sb"  : sb
    }
    return Promise.resolve(dungeonSet[dungeonExp]);
  }

  getTipIconPaths(): object {
    return tipIconPaths;
  }

  getDungeonIcons() : object {
    return dungeonIconPaths;
  }

  getExpLogos() : object {
    return expLogoPaths;
  }

}
