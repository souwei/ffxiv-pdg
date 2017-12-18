import { Injectable } from '@angular/core';
import LevelDungeons from '../../data/levelingDungeons';
import ExpertDungeons from '../../data/expertDungeons';
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

  getDungeons(dungeonType: string): DungeonCollection[] {
    return (dungeonType === 'leveling') ? LevelDungeons : ExpertDungeons;
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

  filterItems(searchTerm){
    return LevelDungeons.filter((dS)=>{
      return dS.dungeons.some((dE)=>{
        return dE.dungeonName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      })
    });
  }

}
