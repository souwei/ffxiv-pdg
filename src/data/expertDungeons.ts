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
    dungeonName: "The Temple of the Fist",
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
    dungeonName: "The Drowned City of Skalla",
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
  }
]
