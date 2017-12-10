export interface Dungeon {
  dungeonName: string;
  dungeonTips: string[];
  bossList: {
    bossName: string;
    bossTips: {
      desc: string;
      spellName?: string;
      icon: string;
    }[];
  }[];
}
