export default [
  {
    dungeonSeries: "a realm reborn",
    dungeons: [
      {
        dungeonName: "Satasha Seagrot",
        mainStoryQuest: true,
        dungeonTips: [
          "The ‘Bloody memo’ will indicate which colour of coral you will need to interact with.",
          "Kill Clams first that spawn shade seekers."
        ],
        bossList: [
          {
            bossName: "Chopper",
            bossTips: [
              {
                desc: "Avoid red circle AoE atttack." ,
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Captain Madison" ,
            bossTips: [
              {
                desc: "Kill adds first in first encounter.",
                icon: "dps"
              },
              {
                desc: "Kill adds first as well in second encounter including the dogs that spawn at 50% hp.",
                icon: "dps"
              }
            ]
          },
          {
            bossName: "Denn the Orcatoothed",
            bossTips: [
              {
                desc: "When unnatural ripples appear, interact with it to prevent adds from spawning.",
                icon: "general"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "The Tam-Tara Deepcroft",
        mainStoryQuest: true,
        dungeonTips: ["Break the barriers.","Destroy the Orbs.","Find the Rosary."],
        bossList: [
          {
            bossName: "Void Soulcounter x 3" ,
            bossTips: [
              {
                desc: "Boss will spawn after adds are killed." ,
                icon: "general"
              }
            ]
          },
          {
            bossName: "Galvanth the Dominator",
            bossTips: [
              {
                desc: "Avoid red circle AoE that will paralyze.",
                icon: "avoid"
              },
              {
                desc: "Kill the adds first that the boss will summon 3 times at 75%, 50% and 25% hp.",
                icon: "dps"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "Copperbell Mines",
        mainStoryQuest: true,
        dungeonTips: ["Let tank lead the way."],
        bossList: [
          {
            bossName: "Kottos the Gigas",
            bossTips: [
              {
                desc: "Waves of spriggan will spawn before boss appears.",
                icon: "general"
              }

            ]
          },
          {
            bossName: "Ichorous Ire",
            bossTips: [
              {
                desc: "Interact with 'Improved Blasting Device to spawn a Bomb and allow it to self-destruct on the boss, repeat this for 3 times then kill the boss.",
                icon: "mechanic"
              },
              {
                desc: "Avoid Red circle AoE when the Bomb explodes.",
                icon: "avoid"
              },
              {
                desc: "Kill spriggans that spawn immediately.",
                icon: "dps"
              }
            ]
          },
          {
            bossName: "Gyges the Great",
            bossTips: [
              {
                desc: "Avoid cone AoE 'Colossal Slam'.",
                icon: "avoid"
              },
              {
                desc: "Boss will spawn adds that will try to summon more adds, focus on the boss unless party is undergeared, then quickly kill the adds.",
                icon: "general"
              }

            ]
          }
        ]
      },
      {
        dungeonName: "Halatali",
        mainStoryQuest: true,
        dungeonTips: ["Always kill 'Bombs' first and avoid AoE self-destruct."],
        bossList: [
          {
            bossName: "Firemane",
            bossTips: [
              {
                desc: "Kill wisps before they reach the fire pit in middle of room.",
                icon: "general"
              }
            ]
          },
          {
            bossName: "Thunderclap Guivre",
            bossTips: [
              {
                desc: "Fight boss on the ramp.",
                icon: "tank"
              },
              {
                desc: "Kill lightning sprites that spawn.",
                icon: "dps"
              },
              {
                desc: "Avoid boss frontal cone AoE.",
                icon: "general"
              },
              {
                desc: "When boss runs to middle of room and becomes invulnerable, do not stay in shallow water to avoid taking damage.",
                icon: "general"
              }
            ]
          },
          {
            bossName: "Tangata",
            bossTips: [
              {
                desc: "Avoid frontal AoE cone attack.",
                icon: "avoid"
              },
              {
                desc: "Boss will cast a pool of lava that makes him invulnerable.",
                icon: "general"
              },
              {
                desc: "Do not stand in lava",
                icon: "avoid"
              },
              {
                desc: "Kill wisps and fire sprites that spawn immediately to make him vulnerable.",
                icon: "mechanic"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "The Thousand Maws of Toto-Rak",
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
      {
        dungeonName: "Haukke Manor",
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
      {
        dungeonName: "Brayflox's longstop",
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
      {
        dungeonName: "The Sunken Temple of Qarn",
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
        dungeonName: "Cutter's Cry",
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
      {
        dungeonName: "The Stone Vigil",
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
      {
        dungeonName: "Dzemael Darkhold",
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
    ]
  },
  {
    dungeonSeries: "heavensward",
    dungeons: [
      {
        dungeonName: "The Dusk Vigil",
        mainStoryQuest: true,
        dungeonTips: ["Tanks shoud quickly pick up Mylodons."],
        bossList: [
          {
            bossName: "Towering Oliphaunt",
            bossTips: [
              {
                spellName: "DOWN FOR THE COUNT",
                desc: " - target and stun random player.",
                icon: "heal"
              },
              {
                spellName: "PREHISTORIC TRUMPET",
                desc: " - Room wide AoE.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Ser Yuhelmeric",
            bossTips: [
              {
                spellName: "BRAIN DRAIN",
                desc: " - Room wide AoE.",
                icon: "heal"
              },
              {
                desc: "Kill adds asap.",
                icon: "dps"
              },
              {
                spellName: "DEATH SPIRAL",
                desc: " - Donut AoE , stack near boss.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Opinicus",
            bossTips: [
              {
                spellName: "FREE FALL",
                desc: "Random targeted player will be hit by boss for dmg.",
                icon: "heal"
              },
              {
                spellName: "WHIRLING GAOL",
                desc: " - stand behind rock pillar.",
                icon: "mechanic"
              },
              {
                spellName: "WINDS OF WINTER",
                desc: " - Allow a rock pillar to stand between you and boss.",
                icon: "mechanic"
              }
            ]
          }
        ]
      },
      {
        dungeonName: 'Sohm Al',
        mainStoryQuest: true,
        dungeonTips: ['Range attack and destroy Pollen Clusters asap.'],
        bossList: [
          {
            bossName: "Raskovnik",
            bossTips: [
              {
                spellName: "ACID RAIN",
                desc: " - Circle AoEs on all players.",
                icon: "avoid"
              },
              {
                spellName: "SWEET SCENT",
                desc: " - Kill bee adds asap.",
                icon: "dps"
              },
              {
                spellName: "DEVOUR",
                desc: " - Boss will target random player and suck them in then stun and cast circle AoE.",
                icon: "avoid"
              },
              {
                spellName: "SPIT",
                desc: " - Unavoidable room-wide AoE.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Myath",
            bossTips: [
              {
                spellName: "PRIMORDIAL ROAR",
                desc: " - Unavoidable room-wide AoE that also spawn adds.",
                icon: "heal"
              },
              {
                desc: "Kill big green add (CHYME OF THE MOUNTAIN) asap.",
                icon: "dps"
              },
              {
                spellName: "MAD DASH",
                desc: " - Targeted players should STACK together on RED marker ; SPREAD on Blue marker.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Tioman",
            bossTips: [
              {
                spellName: "ABYSSIC BUSTER",
                desc: " - Tanks should keep the boss facing away from the party.",
                icon: "avoid"
              },
              {
                spellName: "CHAOS BLAST",
                desc: " - A column and circle AoE on every player.",
                icon: "avoid"
              },
              {
                spellName: "COMET",
                desc: " - Two players will be marked with green markers, spread apart and run as far to the edge as possible; dodge meteor AoE and drop proximity AoE and run away.",
                icon: "mechanic"
              },
              {
                desc: "Destroy his wings when they become targetable asap.",
                icon: "dps"
              },
              {
                spellName: "HEAVENSFALL",
                desc: " - Random player targeted with red/orange marker ; run away from party for AoE damage.",
                icon: "mechanic"
              },
              {
                spellName: "DARK STAR",
                desc: " - Unavoidable room-wide AoE.",
                icon: "heal"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "The Aery",
        mainStoryQuest: true,
        dungeonTips: ["The slumbering dragon trash mobs can be avoided by running past them."],
        bossList: [
          {
            bossName: "Rangda",
            bossTips: [
              {
                spellName: "ELECTRIC CACHEXIS",
                desc: " - stand inside melee range of boss.",
                icon: "avoid"
              },
              {
                spellName: "ELECTROCUTION",
                desc: " - boss will damage and knock back 3 random players.",
                icon: "heal"
              },
              {
                spellName: "IONOSPHERIC CHARGE",
                desc: " -  tethered player run to tower pillar on side, other players dodge circle AoE.",
                icon: "mechanic"
              },
              {
                desc: "Kill adds asap.",
                icon: "dps"
              }
            ]
          },
          {
            bossName: "Gyascutus",
            bossTips: [
              {
                spellName: "FALL OF MAN",
                desc: " - boss will spit poison orb on ground.",
                icon: "avoid"
              },
              {
                desc: "Mustard Gas - allow mustard gas to consume 2-3 poison orbs before killing it.",
                icon: "dps"
              }
            ]
          },
          {
            bossName: "Nidhogg",
            bossTips: [
              {
                desc: "Boss will ocassionally do an Unavoidable room wide AoE.",
                icon: "heal"
              },
              {
                spellName: "SCARLET PRICE",
                desc: " - Boss will spit Fire ball(s) that becomes straight line AoE.",
                icon: "avoid"
              },
              {
                spellName: "THE SABLE PRICE",
                desc: " - random player will be trapped, destroy trap asap; ",
                icon: "mechanic"
              },
              {
                desc: "Kill Adds asap and Keep Eistien Alive!",
                icon: "mechanic"
              },
              {
                desc: "'Massacre' -  stand inside shield that Einstein casts to stay alive.",
                icon: "mechanic"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "The Vault",
        mainStoryQuest: true,
        dungeonTips: ['Always let tank lead the way.'],
        bossList: [
          {
            bossName: "Ser Adelphel Brightblade",
            bossTips: [
              {
                spellName: "HOLY SHIELD BASH",
                desc: " - targetted player should run away from party.",
                icon: "heal"
              },
              {
                desc: "Boss will spawn orbs of light that will explode.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Ser Grinnaux The Bull",
            bossTips: [
              {
                spellName: "HYPERDIMENSIONAL SLASH",
                desc: " - Avoid line AoE attack that will leave behind an Aetherial Tear.",
                icon: "avoid"
              },
              {
                desc: "DO NOT touch Aetherial tear.",
                icon: "avoid"
              },
              {
                desc: "DO NOT have back facing Aetherial tear.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Ser Charibert",
            bossTips: [
              {
                spellName: "ALTAR PYRE",
                desc: " - Unavoidable room wide AoE.",
                icon: "heal"
              },
              {
                spellName: "HOLY CHAIN",
                desc: "If you are chained to another player, run in opposite directions to break chain.",
                icon: "mechanic"
              },
              {
                desc: "Avoid standing in path of marching knights that are summoned.",
                icon: "avoid"
              },
              {
                spellName: "HOLY FLAMES",
                desc: "- Kill Holy flames asap when they spawn.",
                icon: "dps"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "The Great Grubal Library",
        mainStoryQuest: true,
        dungeonTips: ["Page64 adds will target and tether to random party member, stay away from party members."],
        bossList: [
          {
            bossName: "Demon Tome",
            bossTips: [
              {
                desc: "Dodge line shadow AoEs.",
                icon: "avoid"
              },
              {
                spellName: "DISCLOSURE",
                desc: " - move to the opposite side of book asap.",
                icon: "mechanic"
              },
              {
                spellName: "WORDS OF WINTER",
                desc: "- Beware slippery floor when ice appears.",
                icon: "general"
              }
            ]
          },
          {
            bossName: "Byblos",
            bossTips: [
              {
                desc: "When boss become invulnerable; kill adds, and drag the tether to the boss ; AVOID the gas clouds that destroy tether.",
                icon: "mechanic"
              },
              {
                spellName: "HEAD DOWN",
                desc: " - Randomly target party members and charge towards them and damage.",
                icon: "heal"
              },
              {
                spellName: "TAIL SWIPE",
                desc: " - Standing behind boss will cause AoE circle attack.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "The Everliving Bibliotaph",
            mainStoryQuest: true,
            bossTips: [
              {
                desc: "Targeted (green marker) party members should drop an orb in between the platforms as close to the wall as possible.",
                icon: "avoid"
              },
              {
                spellName: "VOID SUMMON",
                desc: " - When the platforms glow , equal number of party members should step onto the plates in light circles in all platforms to avoid adds being spawned.",
                icon: "mechanic"
              },
              {
                spellName: "DEEP DARKNESS & MAGIC BURST",
                desc: " - Huge ground AoE.",
                icon: "avoid"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    dungeonSeries: "stormblood",
    mainStoryQuest: true,
    dungeons: [
      {
        dungeonName: "The Sirensong Sea",
        dungeonTips: ["Be careful of 'Fleshless captive' mini-boss who has an unavoidable room wide AoE stun, prepare to interrupt or heal through."],
        bossList: [
          {
            bossName: "Lugat",
            bossTips: [
              {
                spellName: "AMORPHOUS APPLAUSE",
                desc: " - huge directional AOE ; keep closeby to boss.",
                icon: "avoid"
              },
              {
                spellName: "HYDROBALL",
                desc: " - One party member is targeted; STACK to split the damage.",
                icon: "heal"
              },
              {
                spellName: "SEA SWALLOWS ALL --> CONCUSSIVE OSCILLATION",
                desc: " - Boss sucks and damages everyone then immediately casts AoE.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "The Governor",
            bossTips: [
              {
                spellName: "BLOOD BURST",
                desc: " - Unavoidable Room wide AoE.",
                icon: "heal"
              },
              {
                spellName: "SHADOWFLOW",
                desc: " - Do not stand inside shadow pool.",
                icon: "avoid"
              },
              {
                spellName: "ENTER NIGHT",
                desc: " - Random player will be targeted, drawn in and tehered; Run away from boss to avoid Debuff.",
                icon: "mechanic"
              },
              {
                spellName: "SHADOWSPLIT",
                desc: " - Boss will summon a bunch of small versions of himself for a mass ground-covering AoE; Stand in safe spot.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Lorelei",
            bossTips: [
              {
                spellName: "VIRGIN TEARS",
                desc: " - Avoid Ground AoE.",
                icon: "avoid"
              },
              {
                spellName: "MORBID ADVANCE & MORBID RETREAT",
                desc: " - Position character so when being forced march or retreat will not run into ground AoE.",
                icon: "mechanic"
              },
              {
                spellName: "SUMMER MELODY",
                desc: " - Unavoidable room wide AoE.",
                icon: "heal"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "Shisui of the Violet Tides",
        mainStoryQuest: false,
        dungeonTips: ["Avoid running or stepping into sand with eye tentacles potruding out of sand."],
        bossList: [
          {
            bossName: "Amikiri",
            bossTips: [
              {
                spellName: "PREY",
                desc: " - Random player will be targetted for damage and bound; Kill tail asap to free player.",
                icon: "heal"
              },
              {
                spellName: "KAMIKIRI EMERGES",
                desc: " - Kill adds asap.",
                icon: "dps"
              },
              {
                spellName: "DIGESTIVE FLUID",
                desc: " - blue marker on targeted players - split and run to wall.",
                icon: "heal"
              }
            ]
          },
          {
            bossName: "Ruby Princess",
            bossTips: [
              {
                spellName: "SEDUCE",
                desc: " - Run to chest",
                icon: "mechanic"
              },
              {
                spellName: "ABYSSAL VOLCANO",
                desc: " - AOE from boss and targeted players. Targeted players should drop away from group, then kite away from group.",
                icon: "avoid"
              }
            ]
          },
          {
            bossName: "Shisui Yohi",
            bossTips: [
              {
                spellName: "MAD STARE",
                desc: " - gaze attack ; Face away from boss.",
                icon: "avoid"
              },
              {
                spellName: "THICK FOG",
                desc: "Unavoidable Room-wide AoE.",
                icon: "heal"
              },
              {
                desc: "Kill Sharks that spawn asap.",
                icon: "dps"
              },
              {
                desc: "Destroy orbs asap.",
                icon: "dps"
              },
              {
                desc: "Do not stand under boss when she goes underwater.",
                icon: "avoid"
              },
            ]
          }
        ]
      },
      {
        dungeonName: "Bardam's Mettle",
        mainStoryQuest: true,
        dungeonTips: ["Be careful of bigger pulls, trash mobs hit harder in this dungeon."],
        bossList: [
          {
            bossName: "Galura",
            bossTips: [
              {
                desc: "Heave Frontal cone AOE.",
                icon: "avoid"
              },
              {
                spellName: "RUSH GALURA",
                desc: " - boss will mark an off-aggro target and channel a straight line charge; Marked players should distances themselves from Galura. Other players should move out of Galura's path.",
                icon: "heal"
              },
              {
                desc: "Earthquake Occurs immediately after Rush, stunning all players. Animals marked with a '!' symbol in the pen will begin charging up their AoE attacks.",
                icon: "heal"
              },
            ]
          },
          {
            bossName: "Bardam",
            bossTips: [
              {
                desc: "Avoid circle AoEs.",
                icon: "avoid"
              },
              {
                desc: "Face character away from gaze attack.",
                icon: "avoid"
              },
              {
                desc: "1 player must stand in each of 3 pillars when they are summoned.",
                icon: "mechanic"
              },
              {
                desc: "hide behind rock before meteor strikes the center of the room",
                icon: "mechanic"
              }
            ]
          },
          {
            bossName: "Yol",
            bossTips: [
              {
                spellName: "FEATHERCUT",
                desc: " - Frontal cleave tank-buster.",
                icon: "heal"
              },
              {
                spellName : "WIND UNBOUND",
                desc: " - Group wide AoE damage that also spawns line AoE.",
                icon: "avoid"
              },
              {
                spellName: "FLUTTERFALL",
                desc: "' - Marks all players with orange markers. Spread out to split damage.",
                icon: "heal"
              },
              {
                spellName: "EYE OF THE FIERCE",
                desc: " - Gaze attack; Face character away from boss.",
                icon: "avoid"
              },
              {
                desc: "Kill the birds that spawn when boss flies away.",
                icon: "dps"
              },
              {
                desc: "Avoid standing in path of Yol as he flies across the room during adds phase.",
                icon: "avoid"
              },
              {
                desc: "When his wings become targetable, stay close to boss to avoid outside circle AoE attacks",
                icon: "avoid"
              },
              {
                desc: "When targetted by green marker, make sure no AoE is behind character.",
                icon: "avoid"
              }
            ]
          }
        ]
      },
      {
        dungeonName: "Castrum Abania",
        mainStoryQuest: true,
        dungeonTips: ['Tanks should be quick to pick up trash mobs that spawn in different spots.'],
        bossList: [
          {
            bossName: "Magna Roader",
            bossTips: [
              {
                spellName: "MAGITEK FIRE III",
                desc: " - Unavoidable roomwide AoE dmg.",
                icon: "heal"
              },
              {
                desc: "'Wild Speed/Cannons' - The boss will charge around the arena; Kill soldiers and use cannons on boss.",
                icon: "mechanic"
              }
            ]
          },
          {
            bossName: "NUMBER XXIV",
            bossTips: [
              {
                spellName: "STAB",
                desc: " - This is a tank buster.",
                icon: "heal"
              },
              {
                spellName: "GALE CUT",
                desc: " - Straightforward AoE.",
                icon: "dps"
              },
              {
                spellName: "BARRIER SHIFT",
                desc: " - Boss will summon 3 pillars, go into the pillar of elements that he did not say or is not immune to in his status bar.",
                icon: "mechanic"
              }
            ]
          },
          {
            bossName: "Inferno",
            bossTips: [
              {
                spellName: "RAHU BLASTER",
                desc: " - Straight line AoE.",
                icon: "avoid"
              },
              {
                spellName: "KETU & RAHU",
                desc: " - Series of AoE attacks.",
                icon: "avoid"
              },
              {
                spellName: "ARMS BUFF",
                desc: " - Esuna debuff on affected player.",
                icon: "heal"
              },
              {
                spellName: "KETU SLASH",
                desc: " - Tank buster.",
                icon: "heal"
              },
              {
                spellName: "MAGITEK HANDS",
                desc: " - Avoid and kill hands that spawn asap.",
                icon: "dps"
              }
            ]
          }
        ]
      }
    ]
  }
]
