import { Dungeon } from './dungeon.interface';

export const arr = [
  <Dungeon>{
      dungeonName: "The Bowl of Embers",
      mainStoryQuest: true,
      dungeonTips: [
        "The ‘Bloody memo’ will indicate which colour of coral you will need to interact with.",
        "Kill Clams first that spawn shade seekers."
      ],
      bossList: [
        {
          bossName: "Ifrit",
          bossTips: [
            {
              desc: "Avoid standing in targeted circle AoE." ,
              icon: "avoid"
            },
            {
              desc: "Kill 'Internal Nails' when they spawn asap to avoid wipe." ,
              icon: "dps"
            },
            {
              spellName: "Eruption",
              desc: "When boss is down to 25%, rings of AoE will spawn inside / outside or arena, avoid." ,
              icon: "avoid"
            }
          ]
        }
      ]
    },
  <Dungeon>{
    dungeonName: "The Navel",
    mainStoryQuest: true,
    dungeonTips: ["Break the barriers.","Destroy the Orbs.","Find the Rosary."],
    bossList: [
      {
        bossName: "Titan" ,
        bossTips: [
          {
            desc: "Boss will occassionally stomp to do unavoidable AoE dmg to party." ,
            icon: "heal"
          },
          {
            desc: "Boss will jump into the air, players must run to the inner edge of the circle marker to avoid being knocked off." ,
            icon: "mechanic"
          },
          {
            desc: "Kill Titan's heart asap when it is exposed." ,
            icon: "dps"
          },
          {
            desc: "Avoid standing in titan's line AoE to avoid being knocked off the edge of the arena." ,
            icon: "mechanic"
          },
          {
            desc: "Boss will trap a random player in a rock tomb that must be freed asap." ,
            icon: "dps"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Howling Eye",
    mainStoryQuest: true,
    dungeonTips: ["Let tank lead the way."],
    bossList: [
      {
        bossName: "Garuda - Phase 1",
        bossTips: [
          {
            desc: "Tank should pull Garuda to edge of the room, away from stone pillars.",
            icon: "tank"
          },
          {
          	spellName: "Mistral Song",
            desc: "When garuda flies away, hide behind stone pillars.",
            icon: "mechanic"
          },
          {
            desc: "Kill razor plumes asap.",
            icon: "dps"
          }
        ]
      },
      {
        bossName: "Garuda - Phase 2",
        bossTips: [
          {
          	spellName: "Mistral Shriek",
            desc: "Get away from boss",
            icon: "avoid"
          },
          {
          	spellName: "Mistral Song",
            desc: "Get behind boss.",
            icon: "avoid"
          },
          {
            desc: "Kill razor plumes asap.",
            icon: "dps"
          }
        ]
      }
    ]
  }
  ,
  <Dungeon>{
    dungeonName: "Cape Westwind",
    mainStoryQuest: true,
    dungeonTips: ["Always kill 'Bombs' first and avoid AoE self-destruct."],
    bossList: [
      {
        bossName: "Rihtahtyn sas Arvina",
        bossTips: [
          {
            desc: "Avoid circle AoE.",
            icon: "avoid"
          },
          {
            desc: "Move away from boss when he charges up his magitek missiles.",
            icon: "avoid"
          },
          {
            desc: "Kill adds.",
            icon: "dps"
          },
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "Bowl of Embers(hard)",
    mainStoryQuest: true,
    dungeonTips: ["Always kill 'Bombs' first and avoid AoE self-destruct."],
    bossList: [
      {
        bossName: "Phase 1 - Ifrit",
        bossTips: [
          {
            desc: "Pull boss to edge of room.",
            icon: "tank"
          },
          {
            desc: "Avoid standing in red crackling glow underneath player.",
            icon: "avoid"
          },
          {
          	spellName: "Vulcan Burst",
            desc: "Instant unavoidable AoE damage",
            icon: "heal"
          },
          {
            desc: "Ifrit will stand in edge of room and dash across, do not stand in path(LEFT ifrit always dash first).",
            icon: "avoid"
          }
        ]
      },
       {
        bossName: "Phase 2 - Ifrit",
        bossTips: [
          {
          	spellName: "Sear",
            desc: "Instant unavoidable AoE damage.",
            icon: "heal"
          },
          {
          	spellName: "Radiant plume",
            desc: "Avoid standing in circle AoE",
            icon: "avoid"
          },
          {
          	desc: "Kill nail adds asap.",
            icon: "dps"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Chrysalis",
    mainStoryQuest: true,
    dungeonTips: [
      "Collect all Magitek Photocells including the ones that spawn from killing trash mobs.",
      "Use ranged attacks to kill Fleshy pods that poison melee range targets.",
      "Destroy spider webs that will close and split the party."
    ],
    bossList: [
      {
        bossName: "Coeurl O’Nine Tails",
        bossTips: [
          {
            desc: "Avoid poison AoE attack.",
            icon: "avoid"
          },
          {
            desc: "On second encounter, adds will spawns that need to be killed immediately.",
            icon: "dps"
          }
        ]
      },
      {
        bossName: "Graffias",
        bossTips: [
          {
            desc: "Range attack and destroy fleshy pods immediately at start of fight.",
            icon: "general"
          },
          {
            desc: "Destroy the tail immediately when it becomes targetable.",
            icon: "dps"
          },
          {
            desc: "Kill adds that spawn",
            icon: "dps"
          },
          {
            desc: "Avoid silkscreen and move out of green poison puddle.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Steps of Faith",
    mainStoryQuest: true,
    dungeonTips: ["Be wary of the Manor Maidservants, avoid their stun circle AoE."],
    bossList: [
      {
        bossName: "Manor Claviger",
        bossTips: [
          {
            desc: "Only tank should stand in front of boss for Frontal cleave attack.",
            icon: "tank"
          },
          {
            desc: "Avoid AoE circle attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Manor Jester & Manor Steward",
        bossTips: [
          {
            desc: "Kill Jetser first.",
            icon: "general"
          },
          {
            desc: "Avoid AoE circle attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Lady Amandine",
        bossTips: [
          {
            desc: "Interact with lit lanterns to stop room wide AoE.",
            icon: "mechanic"
          },
          {
            desc: "Boss will cast Void Fire and Void Thunder on tank which can be avoided by running behind her.",
            icon: "general"
          },
          {
            desc: "Kill bomb adds that spawn asap.",
            icon: "dps"
          },
          {
            desc: "Avoid bomb self-destruct circle AoE.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "A Relic Reborn: The Chimera",
    mainStoryQuest: true,
    dungeonTips: ["Save goblins from trash mobs for extra loot chests."],
    bossList: [
      {
        bossName: "Great Yellow Pelican",
        bossTips: [
          {
            desc: "Tank should face the boss away from party.",
            icon: "tank"
          },
          {
            desc: "Avoid frontal cone AoE attacks.",
            icon: "tank"
          },
          {
            desc: "Kill adds that spawn immediately.",
            icon: "dps"
          },
          {
            desc: "Esuna when players is poisoned.",
            icon: "heal"
          }
        ]
      },
      {
        bossName: "Inferno Drake",
        bossTips: [
          {
            desc: "Avoid AoE cone attack.",
            icon: "avoid"
          },
          {
            desc: "Kill the smaller drake that appears in the fight midway.",
            icon: "dps"
          }
        ]
      },
      {
        bossName: "Hellbender",
        bossTips: [
          {
            desc: "Avoid standing in large circle AoE.",
            icon: "avoid"
          },
          {
            desc: "Boss will trap random player in BUBBLE, destroy BUBBLE asap.",
            icon: "avoid"
          },
          {
            desc: "Do not stand in Dragon breathe line AoE.",
            icon: "avoid"
          }
        ]
      },
       {
        bossName: "Deep Jungle Coeurl",
        bossTips: [
          {
            desc: "Avoid Circle AoE.",
            icon: "avoid"
          }
        ]
      },
       {
        bossName: "Aiatar",
        bossTips: [
          {
            desc: "Avoid AoE cone attack",
            icon: "avoid"
          },
          {
            desc: "Boss will randomly turn and spit poison goo and damage on player.",
            icon: "heal"
          },
          {
            desc: "Do not stand inside poison pool and move dragon away from it as well.",
            icon: "avoid"
          },
          {
            desc: "Healers should esuna poisoned party members.",
            icon: "heal"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "A Relic Reborn: The Hydra",
    mainStoryQuest: false,
    dungeonTips: ["Scales of Judgement: LEFT - Flame of Magic, RIGHT - Fruit of Knowledge"],
    bossList: [
      {
        bossName: "Terotaur",
        bossTips: [
          {
            desc: "Kill bee adds that spawn.",
            icon: "dps"
          },
          {
            spellName: "DOOM",
            desc: " - players must run to glowing platform to remove 'doom' debuff or will cause instant death.",
            icon: "mechanic"
          }
        ]
      },
      {
        bossName: "Temple Guardian",
        bossTips: [
          {
            desc: "Kill Golem Soulstones then attack boss.",
            icon: "mechanic"
          },
          {
            desc: "Healers be ready to heal random party member targeted by boss when golem soulstone respawns.",
            icon: "general"
          }
        ]
      },
      {
        bossName: 'The Adjudicator',
        bossTips: [
          {
            desc: "Stun boss to interupt Paralyze cast or esuna affected member.",
            icon: "general"
          },
          {
            desc: "Kill Sun Juror adds on the square platform to prevent respawn.",
            icon: "mechanic"
          },
          {
            desc: "One DPS should enter black square to quickly take out Mythril Verge that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid Laser beams.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  {
    dungeonName: "Battle on the Big Bridge",
    mainStoryQuest: false,
    dungeonTips: ["Avoid standing in erupting sand and blue puddles."],
    bossList: [
      {
        bossName: "Myrmidon Princess",
        bossTips: [
          {
            desc: "Face away boss from party.",
            icon: "tank"
          },
          {
            desc: "Kill Myrmidon Marshal immediately.",
            icon: "dps"
          },
          {
            desc: "Healers should run around perimeter when all other adds spawn and everyone else should focus attacking the boss.",
            icon: "general"
          }
        ]
      },
      {
        bossName: "Giant Tunnel Worm",
        bossTips: [
          {
            desc: "When boss burrows, run to the outer wall.",
            icon: "avoid"
          },
          {
            desc: "When pulled towards the sandpit in the middle, run out again.",
            icon: "avoid"
          },
          {
            desc: "Healers should esuna DoT debuff casted on random player.",
            icon: "heal"
          },
          {
            desc: "Try not to stand in path of boss when boss burrows under the sand.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Chimera",
        bossTips: [
          {
            desc: "Run away from boss when EYES turn BLUE.",
            icon: "avoid"
          },
          {
            desc: "Run and stack on boss when EYES turn VIOLET.",
            icon: "avoid"
          },
          {
            desc: "Run away from BALL when EYES focus on TARGET.",
            icon: "avoid"
          },
          {
            desc: "Avoid cone AoE attacks.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Dragon's Neck",
    mainStoryQuest: true,
    dungeonTips: [
      "Be careful of Dragon Aevis, if possible single pull them.",
      "Ice Sprites will spawn in long icy hallways."
    ],
    bossList: [
      {
        bossName: "Chudo-Yudo",
        bossTips: [
          {
            desc: "Always stand behind or to the side of him.",
            icon: "general"
          },
          {
            desc: "Follow him to the wall when he moves.",
            icon: "general"
          }
        ]
      },
      {
        bossName: "Koshchei",
        bossTips: [
          {
            desc: "Tank boss away from the canons.",
            icon: "tank"
          },
          {
            spellName: "TYPHOON",
            desc: "Avoid the tornado AoE.",
            icon: "avoid"
          },
          {
            desc: "Use the cannon where the other dragon descends.",
            icon: "mechanic"
          }
        ]
      },
      {
        bossName: "Isgebind",
        bossTips: [
          {
            desc: "When boss flies away, avoid the ice ground AoE he casts.",
            icon: "avoid"
          },
          {
            desc: "Avoid consecutive circle orange AoEs.",
            icon: "avoid"
          },
          {
            spellName: "RIME WREATH",
            desc: " - Unavoidable room-wide AoE.",
            icon: "heal"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "Battle in the Big Keep",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Bowl of Embers (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Howling Eye (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Navel (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "Thornmarch (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Whorleater (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "The Striking Tree (Hard)",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "Akh Afah Amphitheatre (Hard",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  },
  <Dungeon>{
    dungeonName: "Urth's Fount",
    mainStoryQuest: false,
    dungeonTips: ["Avoid large exploding orange crystals."],
    bossList: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          {
            desc: "Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
            icon: "mechanic"
          },
          {
            desc: "Ignore / kill the adds that spawn.",
            icon: "dps"
          },
          {
            desc: "Avoid frontal cone AoE attacks from boss and adds.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          {
            spellName: "DOUBLE SMASH / ELBOW DROP",
            desc: " - Dodge boss cone AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Occasional ground circle AoE attacks.",
            icon: "avoid"
          }
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          {
            desc: "Destroy the corrupted crystals that tether to the boss immediately.",
            icon: "dps"
          },
          {
            desc: "Column line AoE attacks.",
            icon: "avoid"
          },
          {
            desc: "Move out of black pools.",
            icon: "avoid"
          }
        ]
      }
    ]
  }
]
