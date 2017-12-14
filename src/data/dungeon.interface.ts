export interface Dungeon {
  dungeonName: string;
  mainStoryQuest: boolean;
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
