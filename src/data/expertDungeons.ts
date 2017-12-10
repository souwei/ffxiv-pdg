export default [
  {
    dungeonName: "Ala Mhigo",
    dungeonTips: [
      "Be alert of AoE circles throughout dungeon."
    ],
    bossList: [
      {
        bossName: "Magitek Scorpion",
        bossTips: [
          {
            desc: "'Electromagnetic Field' - unavoidable room-wide AoE." ,
            icon: "heal"
          },
          {
            desc: "'Target Search' - circle AoE targetting players; run to edge and wait for target turn dark red, then run away.",
            icon: "avoid"
          },
          {
            desc: "'Tail laser' - avoid straight line AoE.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Aulus Manasina" ,
        bossTips: [
          {
            desc: "'Mana Burst' - unavoidable room-wide AoE.",
            icon: "heal"
          },
          {
            desc: "'Magitek Disruptor' - move to side and then forward to dodge deathclaw and AoE; move until player reaches 'body'.",
            icon: "mechanic"
          },
          {
            desc: "Kill deathclaw adds asap.",
            icon: "dps"
          },
          {
            desc: "'DEMI-MAGICKS' - red marker on top of targetted players, spread to split damage.",
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
            desc: "'art of the STORM' - Run away from BOSS.",
            icon: "avoid"
          },
          {
            desc: "'art of the SWELL - Run into BOSS and stack.",
            icon: "avoid"
          },
          {
            desc: "art of the SWORD - stay spread out to split damage.",
            icon: "heal"
          },
          {
            desc: "'Unmoving Troika' - tankbuster ",
            icon: "heal"
          },
          {
            desc: "'Lightless spark' - target player with tether to cast large AoE; move away from party.",
            icon: "avoid"
          },
          {
            desc: "'Concentrativity' - Unavoidable room wide AoE",
            icon: "heal"
          },
          {
            desc: "'STORM, SWELL, SWORD' - Unavoidable room wide AoE",
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
  {
    dungeonName: "Kugane Castle",
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
            desc: "'Kenki Release' - Unavoidable room wide AoE.",
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
            desc: "'Inoshi-Katcho' - avoid circle AoEs.",
            icon: "avoid"
          },
          {
            desc: "Kill dragonhead adds and avoid column AoEs.",
            icon: "dps"
          }
        ]
      }
    ]
  },
  {
    dungeonName: "The Temple of the Fist",
    dungeonTips: ["Be careful of steppng into giant blobs of moss."],
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
            desc: "'Cardingal Shift' - Unavoidable group wide AoE damage.",
            icon: "heal"
          },
          {
            desc: "'Fourfold shear' - tank buster.",
            icon: "heal"
          },
          {
            desc: "'Port and Star' - run to FRONT / BEHIND of boss.",
            icon: "mechanic"
          },
          {
            desc: "'Fore and Aft' - run to SIDE of boss.",
            icon: "mechanic"
          },
          {
            desc: "'Killer instinct' - only 1 side of boss will be open to damage, all sides deflect dmg.",
            icon: "mechanic"
          },
          {
            desc: "'Hellseal' - all players with be marked; run to corresponding glowing symbol platform.",
            icon: "mechanic"
          }
        ]
      },
      {
        bossName: "Ivon Coeurlfist",
        bossTips: [
          {
            desc: "'Spirit Wave' - unavoidable group wide AoE dmg; avoid standing in Tornado.",
            icon: "heal"
          },
          {
            desc: "'Touch of Slaughter' - Reduce targeted player to very low hp.",
            icon: "heal"
          },
          {
            desc: "'Dragon wall' - dragon heads that march across room, avoid!",
            icon: "avoid"
          },
          {
            desc: "'Silent Roar' - avoid large column AoE.",
            icon: "avoid"
          },
          {
            desc: "'Rhalgr's Piece' - proximity AoE, run to corner edges of room.",
            icon: "avoid"
          },
          {
            desc: "'Rose of Destruction' - stack with group to share damage.",
            icon: "mechanic"
          },
          {
            desc: "'Furios Fist' - boss will summon orbs that player need to collect them; after he will launch unavoidable consective damage on party.",
            icon: "mechanic"
          }
        ]
      }
    ]
  },
  {
    dungeonName: "The Drowned City of Skalla",
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
            desc: "'Torpedo' - tankbuster.",
            icon: "heal"
          },
          {
            desc: "'Rising Seas' - unavoidable groupwide AoE dmg.",
            icon: "heal"
          },
          {
            desc: "'Hydro Push' - Move CLOSE to boss.",
            icon: "mechanic"
          },
          {
            desc: "'Hydro Pull' - Move AWAY to opposite side of boss.",
            icon: "mechanic"
          },
          {
            desc: "'Bloody Puddle' - spread apart to split damage and kite orbs away.",
            icon: "heal"
          }

        ]
      },
      {
        bossName: "The Old One",
        bossTips: [
          {
            desc: "'Mystic Light / Flame' - circle / cone AoE.",
            icon: "avoid"
          },
          {
            desc: "Kill adds that spawn asap.",
            icon: "dps"
          },
          {
            desc: "'Shifting Light' - players transformed into Spiggans; kill adds with action ability to drop bombs on.",
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
            desc: "'The Spin' - proximity AoE ; run away from boss.",
            icon: "heal"
          },
          {
            desc: "'Ring of Chaos' - Donut AoE ; stack near boss to avoid other players",
            icon: "avoid"
          },
          {
            desc: "'Eye of the Fire' - Gaze attack; FACE character AWAY from boss.",
            icon: "avoid"
          },
          {
            desc: "'Cross of Chaos' - Cross shaped AoE attack; move to a spot and stop moving.",
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
