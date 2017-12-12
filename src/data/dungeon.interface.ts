export interface Dungeon {
  dungeonSeries: "STORMBLOOD",
  dungeons: {
    dungeonSeries: string;
    dungeons: {
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
    }[];
  }[];
}
