export default [
  {
  dungeonName: "Ala Mhigo",
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
,
{
  dungeonName: "The Tam-Tara Deepcroft",
  dungeonTips: [],
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
  dungeonTips: [],
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
          icon: "mech"
        },
        {
          desc: "Red circle AoE when the Bomb explodes.",
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
  dungeonTips: ["Kill 'Bombs' first and avoid AoE self-destruct."],
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
          desc: "Kill lighting sprites that spawn ",
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
          icon: "mech"
        }
      ]
    }
  ]
},
{
  dungeonName: "The Thousand Maws of Toto-Rak",
  dungeonList: [
    "Collect all Magitek Photocells including the ones that spawn from killing trash mobs.",
    "Use ranged attacks to kill Fleshy pods that poison melee range targets.",
    "Destroy spider webs that will close and split the party."
  ],
  bossTips: [
    {
      bossName: "Coeurl O’Nine Tails",
      bossTips: [
        {
          desc: "Avoid poison AoE attack.",
          icon: "avoid"
        },
        {
          desc: "[ADSS] On second encounter, adds will spawns that need to be killed immediately.",
          icon: "dps"
        }

      ]
    },
    {
      bossName: "Graffias",
      bossTips: [
        "[GENERAL] Range attack and destroy fleshy pods immediately at start of fight.",
        "[ADDS] Destroy the tail immediately when it becomes targetable.",
        "[ADDS] Kill the adds that spawn.",
        "[AVOID] Avoid silkscreen and move out of green poison puddle."
      ]
    }
  ]
},
{
  dungeonName: "Haukke Manor",
  dungeonList: ["Be wary of the Manor Maidservants, avoid their stun circle AoE."],
  bossTips: [
    {
      bossName: "Manor Claviger",
      bossTips: [
        "[TANK] Only tank should stand in front of boss for Frontal cleave attack.",
        "[AVOID] Avoid AoE circle attacks."
      ]
    },
    {
      bossName: "Manor Jester & Manor Steward",
      bossTips: [
        "[GENERAL] Kill Jester first.",
        "[AVOID] Avoid AoE circle attacks."
      ]
    },
    {
      bossName: "Lady Amandine",
      bossTips: [
        "[MECHANIC] Interact with lit lanterns to stop room wide AoE.",
        "[GENERAL] Boss will cast Void Fire and Void Thunder on tank which can be avoided by running behind her.",
        "[ADDS] Kill Bomb adds that spawn immediately.",
        "[AVOID] Avoid Bomb self-destruct circle AoE."
      ]
    }
  ]
},
{
  dungeonName: "Brayflox's longstop",
  dungeonList: [],
  bossTips: [
    {
      bossName: "Great Yellow Pelican",
      bossTips: [
        "[TANK] Tank should face the boss away from the party.",
        "[AVOID] Avoid frontal cone attacks",
        "[ADDS] Kill adds that spawn immediately.",
        "[HEAL] Healers should esuna if the tank is poisoned."
      ]
    },
    {
      bossName: "Inferno Drake",
      bossTips: [
        "[AVOID] Avoid AoE cone attack.",
        "[ADDS] Kill the smaller drake that appears in the fight midway."
      ]
    },
    {
      bossName: "Hellbender",
      bossTips: [
        "[AVOID] Avoid standing in large circle AoE.",
        "[MECHANIC] Boss will trap random player in BUBBLE, destroy BUBBLE asap.",
        "[AVOID] Do not stand in dragon's fire breath line AoE."
      ]
    },
     {
      bossName: "Deep Jungle Coeurl",
      bossTips: [
        "[AVOID] Avoid circle AoE."
      ]
    },
     {
      bossName: "Aiatar",
      bossTips: [
        "[AVOID] Avoid AoE cone attack.",
        "[HEAL] Boss will randomly turn and spit damage poison goo on player.",
        "[AVOID] - Do not stand inside poison goo area and move the dragon away from it as well.",
        "[HEAL] - Healers should esuna poisoned party members."
      ]
    }
  ]
},
  {
    dungeonName: "The Sunken Temple of Qarn",
    dungeonList: ["Scales of Judgement: LEFT - Flame of Magic, RIGHT - Fruit of Knowledge"],
    bossTips: [
      {
        bossName: "Terotaur",
        bossTips: [
          "[ADDS] Kill bees adds that spawn.",
          "[MECHANIC] 'Doom' - room wide AoE , run to the GLOWING platform to REMOVE doom."
        ]
      },
      {
        bossName: "Temple Guardian",
        bossTips: [
          "[MECHANIC] Kill Golem Soulstone then attack the boss.",
          "[GENERAL TIP] Healers be ready to heal a random party member targeted by boss when golem soulstone respawns."
        ]
      },
      {
        bossName: 'The Adjudicator',
        bossTips: [
          "[GENERAL TIP] Stun boss to interupt Paralyze cast or esuna affected member,",
          "[MECHANIC] Kill Sun Juror adds on the square platform to prevent respawn.",
          "[ADDS] One DPS should enter black square to quickly take out Mythril Verge that spawn.",
          "[AVOID] Avoid Laser beams.",
        ]
      }
    ]
  },
  {
    dungeonName: "Cutter's Cry",
    dungeonList: [],
    bossTips: [
      {
        bossName: "Myrmidon Princess",
        bossTips: [
          "[TANK] Face away boss from party.",
          "[ADDS] Kill Myrmidon Marshal immediately.",
          "[GENERAL TIP] Healers should run around perimeter when all other adds spawn and everyone else should focus attacking the boss."
        ]
      },
      {
        bossName: "Giant Tunnel Worm",
        bossTips: [
          "[MECHANIC] When boss burrows, run to the outer wall.",
          "[MECHANIC] When pulled towards the sandpit in the middle, run out again.",
          "[HEAL] Healers should esuna DoT debuff casted on random player.",
          "[AVOID] Try not to stand in path of boss when boss burrows under the sand."
        ]
      },
      {
        bossName: "Chimera",
        bossTips: [
          "[AVOID] Run away from boss when EYES turn BLUE.",
          "[AVOID] Run and stack on boss when EYES turn VIOLET.",
          "[AVOID] Run away from BALL when EYES focus on TARGET.",
          "[AVOID] Avoid cone AoE attacks."
        ]
      }
    ]
  },
  {
    dungeonName: "The Stone Vigil",
    dungeonList: [
      "Be careful of Dragon Aevis, if possible single pull them.",
      "Ice Sprites will spawn in long icy hallways."
    ],
    bossTips: [
      {
        bossName: "Chudo-Yudo",
        bossTips: [
          "[MECHANIC] Always stand behind or to the side of him.",
          "[MECHANIC] Follow him to the wall when he moves."
        ]
      },
      {
        bossName: "Koshchei",
        bossTips: [
          "[TANK] Tank boss away from the canons.",
          "[AVOID] Avoid the tornado he casts.",
          "[MECHANIC] Use the cannon where the other dragon descends."
        ]
      },
      {
        bossName: "Isgebind",
        bossTips: [
          "[AVOID] When boss flies away, avoid the ice ground AoE he casts.",
          "[AVOID] Avoid consecutive circle orange AoEs.",
          "[HEAL] 'Rime Wreath'- Unavoidable room-wide AoE."
        ]
      }
    ]
  },
  {
    dungeonName: "Dzemael Darkhold",
    dungeonList: ["Avoid large exploding orange crystals."],
    bossTips: [
      {
        bossName: "All-Seing Eye",
        bossTips: [
          "[MECHANIC] Always stand in purple areas near crystal to damage boss, move to another crystal when it dims.",
          "[ADDS] Ignore / kill the adds that spawn.",
          "[AVOID] Avoid frontal cone AoE attacks from boss and adds."
        ]
      },
      {
        bossName: "Taulurd",
        bossTips: [
          "[AVOID] 'Double Smash/Elbow Drop' - Dodge boss cone AoE attacks.",
          "[AVOID] occasional ground circle AoE attacks."
        ]
      },
      {
        bossName: "Batraal",
        bossTips: [
          "[ADDS] Destroy the corrupted crystals that tether to the boss immediately.",
          "[AVOID] Column line AoE attacks.",
          "[AVOID] Move out of black pools."
        ]
      }
    ]
  },
  {
    dungeonName: "The Dusk Vigil",
    dungeonList: [],
    bossTips: [
      {
        bossName: "Towering Oliphaunt",
        bossTips: [
          "[HEAL] 'Down for the count' - target and stun random player.",
          "[HEAL] 'Prehistoric trumpet' - Room wide AoE."

        ]
      },
      {
        bossName: "Ser Yuhelmeric",
        bossTips: [
          "[HEAL] 'Brain Drain' - Room wide AoE.",
          "[ADDS] Kill adds asap.",
          "[AVOID] 'Death spiral' - Donut AoE , stack near boss."
        ]
      },
      {
        bossName: "Opinicus",
        bossTips: [
          "[HEAL] Boss will cast 'Free fall' to damage random player.",
          "[MECHANIC] 'Whirling Gaol' - stand behind rock pillar.",
          "[MECHANIC] 'Words of Winter' - stand behind rock pillar."
        ]
      }
    ]
  },
  {
    dungeonName: 'Sohm Al',
    dungeonList: ['Sample Data'],
    bossTips: [
      {
        bossName: "Raskovnik",
        bossTips: [
          "[AVOID] 'Acid Rain' - circle AoEs on all players.",
          "[ADDS] 'Sweet Scent' - kill bee adds asap.",
          "[AVOID] 'Devour' -  boss will target random player and suck them in then stun and cast circle AoE.",
          "[HEAL] 'SPIT' - unavoidable room-wide AoE"
        ]
      },
      {
        bossName: "Myath",
        bossTips: [
          "[HEAL] 'Primordial Roar' - unavoidable room-wide AoE that also spawn adds.",
          "[ADDS] Kill big green add (CHYME OF THE MOUNTAIN) asap.",
          "[HEAL] 'Mad Dash' - targeted players should STACK together on RED marker ; SPREAD on Blue marker."
        ]
      },
      {
        bossName: "Tioman",
        bossTips: [
          "[AVOID] 'Abyssic Buster' - Tanks should keep the boss facing away from the party.",
          "[AVOID] 'Chaos Blast' - a column and circle AoE on every player.",
          "[MECHANIC] 'Comet' - two players will be marked with green markers, spread apart and run as far to the edge as possible; dodge meteor AoE and drop proximity AoE that will spawn.",
          "[ADDS] Destroy his wings when they become targetable asap.",
          "[MECHANIC] 'Heavensfall' - random player targeted with red/orange marker ; run away from party for AoE damage.",
          "[HEAL] 'Dark Star' - unavoidable room-wide AoE."
        ]
      }
    ]
  },
  {
    dungeonName: "The Aery",
    dungeonList: [],
    bossTips: [
      {
        bossName: "Rangda",
        bossTips: [
          "[MECHANIC] 'Electric Cachexis' - stand inside melee range of boss.",
          "[HEAL] 'Electrocution' - boss will damage and knock back 3 random players.",
          "[MECHANIC] 'Ionospheric Charge' -  tethered player run to tower pillar on side, other players dodge circle AoE.",
          "[ADDS] Kill adds asap."
        ]
      },
      {
        bossName: "Gyascutus",
        bossTips: [
          "[AVOID] 'Fall of man' - boss will spit poison orb on ground.",
          "[ADDS] Mustard Gas - allow mustard gas to consume 2-3 poison orbs before killing it."
        ]
      },
      {
        bossName: "Nidhogg",
        bossTips: [
          "[HEAL] Boss will ocassionally do an Unavoidable room wide AoE.",
          "[AVOID] 'Scarlet Price' - Fire ball that becomes straight line AoE.",
          "[MECHANIC] 'The Sable Price' - random player will be trapped, destroy trap asap; ",
          "[MECHANIC] Kill Adds asap and Keep Eistien Alive!",
          "[MECHANIC] 'Massacre' -  stand inside shield that Einstein casts to stay alive."
        ]
      }
    ]
  },
  {
    dungeonName: "The Vault",
    dungeonList: ['Sample Data'],
    bossTips: [
      {
        bossName: "Ser Adelphel Brightblade",
        bossTips: [
          "[HEAL] - 'Holy shield bash', targetted player should run away from party.",
          "[AVOID] - Boss will spawn orbs of light that will explode."
        ]
      },
      {
        bossName: "Ser Grinnaux The Bull",
        bossTips: [
          "[AVOID] 'Hyperdimensional Slash' - Avoid line AoE attack that will leave behind an Aetherial Tear.",
          "[AVOID] - DO NOT touch Aetherial tear.",
          "[AVOID] - DO NOT have back facing Aetherial tear.",
        ]
      },
      {
        bossName: "Ser Charibert",
        bossTips: [
          "[HEAL] 'Altar Pyre' - Unavoidable room wide AoE.",
          "[MECHANIC] If you are chained to another player, run in opposite directions to break chain.",
          "[AVOID] Avoid standing in path of marching knights that are summoned.",
          "[ADDS] Kill Holy flames add asap when they spawn."
        ]
      }
    ]
  },
  {
    dungeonName: "The Great Grubal Library",
    dungeonList: [],
    bossTips: [
      {
        bossName: "Demon Tome",
        bossTips: [
          "[AVOID] - Dodge line shadow AoEs.",
          "[MECHANIC] - 'Disclosure' ; move to the opposite side of book asap.",
          "[MECHANIC] - 'Words of Winter' - Beware slippery floor when ice appears."
        ]
      },
      {
        bossName: "Byblos",
        bossTips: [
          "[MECHANIC] When boss become invulnerable; kill adds, and drag the tether to the boss ; AVOID the gas clouds that destroy tether.",
          "[HEAl] 'Head Down' - Randomly target party members with an AoE where he will charge towards them.",
          "[AVOID] 'Tail Swipe' - Standing behind boss will cause AoE circle attack."
        ]
      },
      {
        bossName: "The Everliving Bibliotaph",
        bossTips: [
          "[AVOID] Targeted (green marker) party members should drop an orb in between the platforms as close to the wall as possible.",
          "[MECHANIC] 'Void Summon' - When the platforms glow , equal number of party members should step onto the plates in light circles in all platforms to avoid adds being spawned.",
          "[AVOID] 'Deep Darkness' and 'Magic Burst' - Huge ground AoE."
        ]
      }
    ]
  },
  {
    dungeonName: "The Sirensong Sea",
    dungeonTips: [],
    bossList: [
      {
        bossName: "Lugat",
        bossTips: [
          "[AVOID] 'Amorphous Applause' - huge directional AOE.; keep closeby to boss.",
          "[HEAL] 'Hydroball' - One party member is targeted; STACK to split the damage.",
          "[HEAL] 'Sea Swallows All' -> 'Concussive Oscillation' - Boss sucks and damages everyone then immediately casts AoE."
        ]
      },
      {
        bossName: "The Governor",
        bossTips: [
          "[HEAL] 'Bloodyburst' - Unavoidable Room wide AoE.",
          "[AVOID] 'Shadowflow' - Do not stand inside shadow pool.",
          "[MECHANIC] 'Enter Night' - Random player will be targeted, drawn in and tehered; Run away from boss to avoid Debuff.",
          "[AVOID] 'Shadowsplit' - Boss will summon a bunch of small versions of himself for a mass ground-covering AoE; Stand in safe spot."
        ]
      },
      {
        bossName: "Lorelei",
        bossTips: [
          "[AVOID] 'Virgin tears' - Ground AoE.",
          "[MECHANIC] 'Morbid advance' and 'Morbid retreat' - Position character so when being forced march or retreat will not run into ground AoE.",
          "[HEAL] - 'Summer Melody' - Unavoiable room wide AoE."
        ]
      }
    ]
  },
  {
    dungeonName: "Shisui of the Violet Tides",
    dungeonTips: [],
    bossList: [
      {
        bossName: "Amikiri",
        bossTips: [
          "[HEAL] - 'Prey'; Random player will be targetted for damage and bound; Kill tail asap to free player.",
          "[ADDS] - 'Kamikiri Emerges'; Kill adds asap.",
          "[HEAL]- 'Digestive Fluid'; blue marker on targeted players - split and run to wall."
        ]
      },
      {
        bossName: "Ruby Princess",
        bossTips: [
          "[MECHANIC] 'Seduce'; Run to chest",
          "[AVOID] 'Abyssal Volcano'; AOE from boss and targeted players. Targeted players should drop away from group, then kite away from group."
        ]
      },
      {
        bossName: "Shisui Yohi",
        bossTips: [
          "[AVOID] 'Mad stare'; Face away from boss.",
          "[HEAL] 'Thick Fog'; Unavoidable Room-wide AoE.",
          "[ADDS] Kill Sharks that spawn asap.",
          "[ADDS] Destroy orbs asap.",
          "[AVOID] Do not stand under boss when she goes underwater."
        ]
      }
    ]
  },
  {
    dungeonName: "Bardam's Mettle",
    dungeonTips: [],
    bossList: [
      {
        bossName: "Galura",
        bossTips: [
          "[AVOID] Heave Frontal cone AOE.",
          "[HEAL] 'Rush Galura' - boss will mark an off-aggro target and channel a straight line charge; Marked players should distances themselves from Galura. Other players should move out of Galura's path.",
          "[HEAL] Earthquake Occurs immediately after Rush, stunning all players. Animals marked with a '!' symbol in the pen will begin charging up their AoE attacks"
        ]
      },
      {
        bossName: "Bardam",
        bossTips: [
          "Dodge AOES!"
        ]
      },
      {
        bossName: "Yol",
        bossTips: [
          "[HEAL] 'Feathercut' - Frontal cleave tank-buster.",
          "[AVOID]'Wind Unbound' - Group wide AoE damage that also spawns line AoE.",
          "[HEAL] 'Flutterfall' - Marks all players with orange markers. Spread out to split damage.",
          "[AVOID] 'Eye of the Fierce' - Face character away from boss.",
          "[ADDS] Kill the birds that spawn when boss flies away.",
          "[AVOID] Avoid standing in path of Yol as he flies across the room during adds phase.",
          "[AVOID] When his wings become targetable, stay close to boss to avoid outside circle AoE attacks",
          "[AVOID] When targetted by green marker, make sure no AoE is behind character."
        ]
      }
    ]
  },
  {
    dungeonName: "Castrum Abania",
    dungeonTips: ['Sample Data'],
    bossList: [
      {
        bossName: "Magna Roader",
        bossTips: [
          "[HEAL] 'Magitek Fire III' - This one is a party wide AoE that cannot be avoided. Simply heal through it.",
          `[MECHANIC] 'Wild Speed/Cannons' - The boss will charge around the arena; Kill soldiers and use cannons on boss.`
        ]
      },
      {
        bossName: "NUMBER XXIV",
        bossTips: [
          "[HEAL] 'Stab' - This is a tank buster.",
          "[AVOID] 'Gale Cut' - Straightforward AoE.",
          `[MECHANIC] 'Barrier Shift' - Boss will summon 3 pillars, go into the pillar of elements that he did not say or is not immune to in his status bar.`
        ]
      },
      {
        bossName: "Inferno",
        bossTips: [
          "[AVOID]'Rahu Blaster' - Straight line AoE.",
          "[AVOID]'Ketu & Rahu' - Series of AoE attacks.",
          "[HEAL] 'Arm Buffs' - Esuna debuff on affected player.",
          "[HEAL] 'Ketu Slash' - Tank buster.",
          "[ADDS] 'Magitek Hands' - Avoid and kill hands that spawn asap."
        ]
      }
    ]
  }
]
