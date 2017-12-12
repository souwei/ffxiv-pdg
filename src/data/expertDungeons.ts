import { DungeonCollection } from "./dungeonColletion.interface";
import { Dungeon } from "./dungeon.interface";

export default [
  <DungeonCollection>{
    dungeonSeries: "Stormblood",
    dungeons: [
      <Dungeon>{
        dungeonName: "Ala Mhigo",
        mainStoryQuest: true,
        dungeonTips: [
          "Be alert of AoE circles throughout dungeon."
        ],
        bossList: [
          {
            bossName: "Magitek Scorpion",
            bossTips: [
              {
                spellName: "ElECTROMAGNETIC FIELD",
                desc: " - unavoidable room-wide AoE." ,
                icon: "heal"
              },
              {
                spellName: "TARGET SEARCH",
                desc: "'Target Search' - circle AoE targetting players; run to edge and wait for target turn dark red, then run away.",
                icon: "avoid"
              },
              {
                spellName: "TAIL LASER",
                desc: " - avoid straight line AoE.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Aulus Manasina" ,
            bossTips: [
              {
                spellName: "MANA BURST",
                desc: " - unavoidable room-wide AoE.",
                icon: "heal"
              },
              {
                spellName: "MAGITEK DISRUPTOR",
                desc: " - move to side and then forward to dodge deathclaw and AoE; move until player reaches 'body'.",
                icon: "mechanic"
              },
              {
                desc: "Kill deathclaw adds asap.",
                icon: "dps"
              },
              {
                spellName: "DEMI-MAGICKS",
                desc: " - red marker on top of targetted players, spread to split damage.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "ZENOS YAE GALVUS",
            bossTips: [
              {
                desc: "DO NOT STAND outside where the black pool is.",
                icon: "general"
              },
              {
                spellName: "art of the STORM",
                desc: " - Run away from BOSS.",
                icon: "avoid"
              },
              {
                spellName: "art of the SWELL",
                desc: " - Run into BOSS and stack.",
                icon: "avoid"
              },
              {
                spellName: "art of the SWORD",
                desc: " - stay spread out to split damage.",
                icon: "heal"
              },
              {
                spellName: "UNMOVING TROIKA",
                desc: " - tankbuster ",
                icon: "heal"
              },
              {
                spellName: "LIGHTLESS SPARK",
                desc: " - target player with tether to cast large AoE; move away from party.",
                icon: "avoid"
              },
              {
                spellName: "CONCENTRATIVITY",
                desc: " - Unavoidable room wide AoE",
                icon: "heal"
              },
              {
                spellName: "STORM, SWELL, SWORD",
                desc: "Unavoidable room wide AoE",
                icon: "heal"
              },
              {
                desc: "'Kill Sword Adds ASAP'",
                icon: "dps"
              }
            ]
          }
        ]
      },
      <Dungeon>{
        dungeonName: "Kugane Castle",
        mainStoryQuest: false,
        dungeonTips: ["No special instructions."],
        bossList: [
          {
            bossName: "Zuiko-maru" ,
            bossTips: [
              {
                desc: "Stack together when someone is targetted with yellow indicator(stack marker) to share damage." ,
                icon: "mechanic"
              },
              {
                desc: "When tethered by adds, both targeted players should go to side of room together and kill adds asap.",
                icon: "dps"
              },
              {
                spellName: "KENKI RELEASE",
                desc: "- Unavoidable room wide AoE.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Dojun-maru",
            bossTips: [
              {
                desc: "Narrow line column AoEs.",
                icon: "avoid"
              },
              {
                desc: "Kill ninja adds asap.",
                icon: "dps"
              },
              {
                desc: "When targeted with electric circle, spread out to split damage.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Yojimbo",
            bossTips: [
              {
                desc: "Interact with piles of gold asap.",
                icon: "mechanic"
              },
              {
                spellName: "INOSHI-KATCHO",
                desc: "- avoid circle AoEs.",
                icon: "avoid"
              },
              {
                desc: "Kill dragonhead adds and avoid column AoEs.",
                icon: "dps"
              },
              {
                spellName: "Metta-Giri",
                desc: "unavoidable room-wide AoE",
                icon: "heal"
              }
            ]
          }
        ]
      },
      <Dungeon>{
        dungeonName: "The Temple of the Fist",
        mainStoryQuest: false,
        dungeonTips: ["Be careful of stepping into giant blobs of moss."],
        bossList: [
          {
            bossName: "Coeurl Smriti",
            bossTips: [
              {
                desc: "When boss summons minion Coeurl Sruti - it is advised to kill them at the same time.",
                icon: "dps"
              },
              {
                desc: "if one of the Coeurl is killed, the other will use 'Electric Burst' - Unavoidable Group wide AoE.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Arbuda",
            bossTips: [
              {
                spellName: "CARDINGAL SHIFT",
                desc: " - Unavoidable group wide AoE damage.",
                icon: "heal"
              },
              {
                spellName: "FOURFOLD SHEAR",
                desc: " - tank buster.",
                icon: "heal"
              },
              {
                spellName: "PORT AND STAR",
                desc: " - run to FRONT / BEHIND of boss.",
                icon: "mechanic"
              },
              {
                spellName: "FORE AND AFT",
                desc: " - run to SIDE of boss.",
                icon: "mechanic"
              },
              {
                spellName: "KILLER INSTINCT",
                desc: " - only 1 side of boss will be open to damage, all sides deflect dmg.",
                icon: "mechanic"
              },
              {
                spellName: "HELLSEAL",
                desc: " - all players with be marked; run to corresponding glowing symbol platform.",
                icon: "mechanic"
              }
            ]
          },
          {
            bossName: "Ivon Coeurlfist",
            bossTips: [
              {
                spellName: "SPIRIT WAVE",
                desc: "- unavoidable group wide AoE dmg; avoid standing in Tornado.",
                icon: "heal"
              },
              {
                spellName: "TOUCH OF SLAUGHTER",
                desc: "- Reduce targeted player to very low hp.",
                icon: "heal"
              },
              {
                spellName: "DRAGON WALL",
                desc: " - dragon heads that march across room, avoid!",
                icon: "avoid"
              },
              {
                spellName: "SILENT ROAR",
                desc: " - avoid large column AoE.",
                icon: "avoid"
              },
              {
                spellName: "RHARGR's PIECE",
                desc: " - proximity AoE, run to corner edges of room.",
                icon: "avoid"
              },
              {
                spellName: "ROSE OF DESTRUCTION",
                desc: " - stack with group to share damage.",
                icon: "mechanic"
              },
              {
                spellName: "FURIOUS FIST",
                desc: " - boss will summon orbs that player need to collect them; after he will launch unavoidable consective damage on party.",
                icon: "mechanic"
              }
            ]
          }
        ]
      },
      <Dungeon>{
        dungeonName: "The Drowned City of Skalla",
        mainStoryQuest: false,
        dungeonTips: ["No special instructions."],
        bossList: [
          {
            bossName: "Kelpie",
            bossTips: [
              {
                desc: "Do not stand in outer edge of arena.",
                icon: "general"
              },
              {
                spellName: "TORPEDO",
                desc: " - tankbuster.",
                icon: "heal"
              },
              {
                spellName: "RISING SEAS",
                desc: "- unavoidable groupwide AoE dmg.",
                icon: "heal"
              },
              {
                spellName: "HYDRO PUSH",
                desc: " - Move CLOSE to boss.",
                icon: "mechanic"
              },
              {
                spellName: "HYDRO PULL",
                desc: " - Move AWAY to opposite side of boss.",
                icon: "mechanic"
              },
              {
                spellName: "BLOODY PUDDLE",
                desc: " - spread apart to split damage and kite orbs away.",
                icon: "heal"
              }

            ]
          },
          {
            bossName: "The Old One",
            bossTips: [
              {
                spellName: "MYSTIC LIGHT / MYSTICT FLAME",
                desc: " - circle / cone AoE.",
                icon: "avoid"
              },
              {
                desc: "Kill adds that spawn asap.",
                icon: "dps"
              },
              {
                spellName: "SHIFTING LIGHT",
                desc: " - players transformed into Spiggans; kill adds with action ability to drop bombs on.",
                icon: "mechanic"
              }
            ]
          },
          {
            bossName: "Hrodric Poisontonguex",
            bossTips: [
              {
                desc: "When boss raises his ARMS ; move to BEHIND boss.",
                icon: "avoid"
              },
              {
                desc: "When boss raises his TAIL ; move to FRONT of boss.",
                icon: "general"
              },
              {
                spellName: "THE SPIN",
                desc: " - proximity AoE ; run away from boss.",
                icon: "heal"
              },
              {
                spellName: "RING OF CHAOS",
                desc: " - Donut AoE ; stack near boss to avoid other players",
                icon: "avoid"
              },
              {
                spellName: "EYE OF THE FIRE",
                desc: " - Gaze attack; FACE character AWAY from boss.",
                icon: "avoid"
              },
              {
                spellName: "CROSS OF CHAOS",
                desc: " - Cross shaped AoE attack; move to a spot and stop moving.",
                icon: "avoid"
              },
              {
                desc: "When boss faces random player, quickly move away from his view to avoid huge dmg.",
                icon: "avoid"
              }
            ]
          }
        ]
      }
    ]
  }
]
