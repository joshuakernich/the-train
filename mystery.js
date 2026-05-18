MYSTERY = {
  "title": "The Last Crossing of the Obsidian Comet",
  "setting": {
    "trainName": "Obsidian Comet",
    "route": "Frozen mountain pass to coastal capital",
    "timePeriod": "Retro-futuristic dieselpunk",
    "timeOfDeath": "23:47"
  },
  "solution": {
    "killer": "Sister Agnes Wren",
    "victim": "Magnus Vale",
    "weapon": "Industrial ice hook hidden inside a ceremonial candle staff",
    "murderLocation": "Observation Dome",
    "method": "Agnes stabbed Vale during the tunnel blackout, then remotely triggered the rotating dome mechanism from the Projection Booth to create a false locked-room scenario."
  },
  "carriages": [
    {
      "id": "car_01",
      "name": "Engine",
      "type": "locomotive",
      "size": {
        "width": 9,
        "height": 5
      },
      "connections": {
        "east": "car_02"
      },
      "grid": [
        "WWWWWWWWW",
        "WBB...FFW",
        "W....L..W",
        "WTT...VVW",
        "WWWDWWWWW"
      ],
      "legend": {
        "W": "wall",
        "B": "boiler",
        "F": "furnace",
        "L": "tool locker",
        "T": "coal trolley",
        "V": "steam valve",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_engine_edgar_flint",
          "type": "character",
          "name": "Edgar Flint",
          "position": [3, 2],
          "relevance": "minor",
          "description": "The chief engineer with ash-covered gloves and a permanent squint.",
          "quote": "The blackout was scheduled, but someone pulled extra current from the projection systems."
        },
        {
          "id": "obj_engine_revolver",
          "type": "weapon",
          "name": "Rusty Revolver",
          "position": [3, 1],
          "relevance": "red_herring",
          "description": "An unloaded revolver wrapped in oily cloth."
        },
        {
          "id": "obj_engine_log",
          "type": "document",
          "name": "Maintenance Log",
          "position": [5, 2],
          "relevance": "major",
          "description": "Confirms power fluctuations during Blackglass Tunnel."
        }
      ]
    },
    {
      "id": "car_02",
      "name": "Coal Tender",
      "type": "storage",
      "size": {
        "width": 10,
        "height": 5
      },
      "connections": {
        "west": "car_01",
        "east": "car_03"
      },
      "grid": [
        "WWWWWWWWWW",
        "WCCCCCC..W",
        "WCC..CCS.W",
        "WCC..CC..W",
        "WWWWDWWWWW"
      ],
      "legend": {
        "W": "wall",
        "C": "coal pile",
        "S": "secret hatch",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_tender_footprint",
          "type": "clue",
          "name": "Ash Footprint",
          "position": [7, 2],
          "relevance": "major",
          "description": "A partial footprint dusted with silver projection ash."
        }
      ]
    },
    {
      "id": "car_03",
      "name": "Galley",
      "type": "kitchen",
      "size": {
        "width": 10,
        "height": 6
      },
      "connections": {
        "west": "car_02",
        "east": "car_04"
      },
      "grid": [
        "WWWWWWWWWW",
        "WSS..PP..W",
        "WKK..TT..W",
        "W........W",
        "WFF....D.W",
        "WWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "S": "shelf",
        "P": "pantry",
        "K": "kitchen range",
        "T": "table",
        "F": "freezer",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_galley_calder",
          "type": "character",
          "name": "Mrs. Calder",
          "position": [5, 3],
          "relevance": "major",
          "description": "A stern cook sharpening knives with terrifying precision.",
          "quote": "Sister Agnes left the kitchen at half past eleven. Said she had a private blessing to perform."
        },
        {
          "id": "obj_galley_teacup",
          "type": "clue",
          "name": "Drugged Teacup",
          "position": [5, 1],
          "relevance": "red_herring",
          "description": "Contains sleeping medication, not poison."
        }
      ]
    },
    {
      "id": "car_04",
      "name": "Passenger Carriage",
      "type": "luxury_seating",
      "size": {
        "width": 12,
        "height": 6
      },
      "connections": {
        "west": "car_03",
        "east": "car_05"
      },
      "grid": [
        "WWWWWWWWWWWW",
        "WB.B..B.B..W",
        "W..........W",
        "WB.B..B.B..W",
        "W..........W",
        "WWWWWDWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "B": "booth",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_passenger_otto",
          "type": "character",
          "name": "Otto Crane",
          "position": [3, 4],
          "relevance": "red_herring",
          "description": "The nervous conductor clutching a stained jacket.",
          "quote": "The blood isn't Vale's. Check the galley freezer if you think I'm lying."
        },
        {
          "id": "obj_passenger_miriam",
          "type": "character",
          "name": "Miriam Vale",
          "position": [9, 4],
          "relevance": "minor",
          "description": "The victim's estranged daughter, exhausted and defensive.",
          "quote": "I searched my father's cabin, yes. But by then he was already dead."
        },
        {
          "id": "obj_passenger_jacket",
          "type": "clue",
          "name": "Bloody Jacket",
          "position": [2, 3],
          "relevance": "red_herring",
          "description": "Pig blood from kitchen stock."
        }
      ]
    },
    {
      "id": "car_05",
      "name": "Chapel of Motion",
      "type": "surreal_chapel",
      "size": {
        "width": 11,
        "height": 7
      },
      "connections": {
        "west": "car_04",
        "east": "car_06"
      },
      "grid": [
        "WWWWWWWWWWW",
        "W....A....W",
        "W.LLLLLLL.W",
        "W....S....W",
        "W........W",
        "W....D....W",
        "WWWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "A": "altar",
        "L": "lantern row",
        "S": "speaker podium",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_chapel_agnes",
          "type": "character",
          "name": "Sister Agnes Wren",
          "position": [2, 4],
          "relevance": "critical",
          "description": "A composed caretaker holding a brass candle staff.",
          "quote": "Magnus wanted forgiveness. Some sins cannot be forgiven."
        },
        {
          "id": "obj_chapel_staff",
          "type": "weapon",
          "name": "Ceremonial Candle Staff",
          "position": [5, 3],
          "relevance": "critical",
          "description": "A hollow brass staff concealing a retractable ice hook."
        },
        {
          "id": "obj_chapel_letter",
          "type": "document",
          "name": "Burned Letter Fragment",
          "position": [2, 2],
          "relevance": "major",
          "description": "References Vale blackmailing Agnes over an old derailment."
        }
      ]
    },
    {
      "id": "car_06",
      "name": "Projection Booth",
      "type": "mechanical_projection",
      "size": {
        "width": 10,
        "height": 6
      },
      "connections": {
        "west": "car_05",
        "east": "car_07"
      },
      "grid": [
        "WWWWWWWWWW",
        "WPPPP....W",
        "W.GG..R.W",
        "W.....L.W",
        "W....D..W",
        "WWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "P": "projector",
        "G": "gear assembly",
        "R": "remote lock controls",
        "L": "ladder",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_projection_lucien",
          "type": "character",
          "name": "Lucien Rowe",
          "position": [3, 3],
          "relevance": "major",
          "description": "An anxious projectionist smelling of machine oil.",
          "quote": "Someone used the remote dome controls after I stepped away. They knew exactly how the lock worked."
        },
        {
          "id": "obj_projection_grease",
          "type": "clue",
          "name": "Silver Machine Grease",
          "position": [3, 2],
          "relevance": "major",
          "description": "Matches residue found on the candle staff."
        },
        {
          "id": "obj_projection_log",
          "type": "document",
          "name": "Projection Timing Log",
          "position": [7, 2],
          "relevance": "critical",
          "description": "Shows the dome blackout occurred precisely at 23:47."
        }
      ]
    },
    {
      "id": "car_07",
      "name": "Observation Dome",
      "type": "crime_scene",
      "size": {
        "width": 12,
        "height": 7
      },
      "connections": {
        "west": "car_06",
        "east": "car_08"
      },
      "grid": [
        "WWWWWWWWWWWW",
        "W....T.....W",
        "W..S...S...W",
        "W..........W",
        "W..B.....C.W",
        "W.....D....W",
        "WWWWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "T": "telescope",
        "S": "seat",
        "B": "blood stain",
        "C": "cracked glass",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_dome_corpse",
          "type": "corpse",
          "name": "Magnus Vale",
          "position": [6, 3],
          "relevance": "critical",
          "description": "The corpse of Magnus Vale lies beneath the artificial stars. His expensive coat hides a thin puncture wound beneath the ribs.",
          "quote": null,
          "forensicFindings": [
            "Death occurred before the train entered Blackglass Tunnel.",
            "Wound caused by a narrow hooked weapon.",
            "Minimal defensive wounds suggest the victim trusted the killer.",
            "Blood spray pattern implies the dome rotated after the attack."
          ]
        },
        {
          "id": "obj_dome_blood_pattern",
          "type": "clue",
          "name": "Circular Blood Spray",
          "position": [3, 4],
          "relevance": "major",
          "description": "The blood arc curves unnaturally around the rotating floor."
        },
        {
          "id": "obj_dome_glass",
          "type": "clue",
          "name": "Cracked Glass Panel",
          "position": [10, 4],
          "relevance": "red_herring",
          "description": "Old storm damage unrelated to the murder."
        }
      ]
    },
    {
      "id": "car_08",
      "name": "Greenhouse Car",
      "type": "surreal_greenhouse",
      "size": {
        "width": 11,
        "height": 7
      },
      "connections": {
        "west": "car_07",
        "east": "car_09"
      },
      "grid": [
        "WWWWWWWWWWW",
        "WVV..P..VVW",
        "WVV..T..VVW",
        "W....F....W",
        "WVV.....VVW",
        "W....D....W",
        "WWWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "V": "vine growth",
        "P": "planter",
        "T": "gardening table",
        "F": "fountain",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_greenhouse_passport",
          "type": "document",
          "name": "Missing Passport",
          "position": [5, 1],
          "relevance": "red_herring",
          "description": "Belongs to a gambler fleeing debt collectors."
        }
      ]
    },
    {
      "id": "car_09",
      "name": "Sleeping Car",
      "type": "private_cabins",
      "size": {
        "width": 12,
        "height": 7
      },
      "connections": {
        "west": "car_08",
        "east": "car_10"
      },
      "grid": [
        "WWWWWWWWWWWW",
        "W[]..[]..[]W",
        "W..........W",
        "W[]..[]..[]W",
        "W..........W",
        "W.....D....W",
        "WWWWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "[]": "sleep compartment",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_sleeping_porter",
          "type": "character",
          "name": "Insomniac Porter",
          "position": [5, 4],
          "relevance": "major",
          "description": "A sleepless porter listening through the thin cabin walls.",
          "quote": "I saw Sister Agnes enter the Projection Booth carrying her candle staff during the blackout."
        }
      ]
    },
    {
      "id": "car_10",
      "name": "Ghost Caboose",
      "type": "surreal_radio_room",
      "size": {
        "width": 10,
        "height": 6
      },
      "connections": {
        "west": "car_09"
      },
      "grid": [
        "WWWWWWWWWW",
        "WRR..RRR.W",
        "W....P...W",
        "W.RR..RR.W",
        "W....D...W",
        "WWWWWWWWWW"
      ],
      "legend": {
        "W": "wall",
        "R": "radio",
        "P": "phonograph",
        "D": "door"
      },
      "objects": [
        {
          "id": "obj_ghost_recording",
          "type": "audio_clue",
          "name": "Distorted Recording",
          "position": [5, 2],
          "relevance": "major",
          "description": "A damaged recording of Vale threatening Agnes with exposure.",
          "quote": "You should have let the dead stay buried, Magnus."
        }
      ]
    }
  ]
}