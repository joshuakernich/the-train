MYSTERY = {
  "title": "Murder on the Blackglass Line",
  "setting": "A luxury overnight train trapped in a mountain storm after a sudden blackout.",
  "objective": {
    "solve": [
      "Determine the murderer",
      "Determine the true murder weapon"
    ],
    "solution": {
      "murderer": "Dr. Mirelle Vale",
      "murder_weapon": "Silver Fountain Pen with concealed toxin injector"
    }
  },
  "starting_carriage": "Passenger Sleeper C",
  "body_location": "Maintenance Vault",
  "carriages": [
    {
      "id": "car_01",
      "name": "Passenger Sleeper C",
      "type": "Sleeper",
      "starting_carriage": true,
      "grid_size": {
        "width": 8,
        "height": 6
      },
      "characters": [
        {
          "name": "Nina Bell",
          "x": 2,
          "y": 2,
          "free_information": "\"I swear I heard people arguing near the dining car before the blackout... and someone in a dark coat rushed past my cabin. My nerves are shot. If you can find me something calming to drink, maybe I can remember more clearly.\"",
          "needs": "Tea Tin",
          "reveals_after_requirement": "\"Thank you... yes, now I remember. The person wore polished silver shoes, and there was this strange little metallic click every time they moved.\"",
          "secrets": [
            "She stole another passenger's wallet earlier that night."
          ]
        }
      ],
      "objects": [
        {
          "name": "Abandoned Suitcase",
          "x": 5,
          "y": 1,
          "description": "A battered leather suitcase with faded travel stickers.",
          "relevance": "Contains forged travel documents unrelated to the murder.",
          "collectible": false
        },
        {
          "name": "Silver Wallet",
          "x": 1,
          "y": 4,
          "description": "An expensive wallet hidden beneath a lower bunk.",
          "relevance": "Can be returned to another passenger to gain trust.",
          "collectible": true
        },
        {
          "name": "Train Route Pamphlet",
          "x": 6,
          "y": 5,
          "description": "A folded route map of the Blackglass Line.",
          "relevance": "Reveals the hidden Maintenance Vault access corridor.",
          "collectible": true
        }
      ]
    },
    {
      "id": "car_02",
      "name": "Velvet Dining Car",
      "type": "Dining",
      "grid_size": {
        "width": 10,
        "height": 7
      },
      "characters": [
        {
          "name": "Sebastian Rook",
          "x": 3,
          "y": 2,
          "free_information": "\"Everyone on this train knows Elias Vane ruined me. That doesn't make me a killer. I was drinking here during the blackout, though someone clearly tampered with my wine. Bring me proof and maybe I'll help you.\"",
          "needs": "Evidence of drink tampering",
          "reveals_after_requirement": "\"Fine. I saw Dr. Mirelle Vale leaving the Observatory Lounge just before the lights went out.\"",
          "motives": [
            "Elias destroyed his business empire."
          ],
          "red_herring": true
        },
        {
          "name": "Conductor Hale",
          "x": 8,
          "y": 1,
          "free_information": "\"The blackout disrupted several secured systems. Someone got into a restricted area during the confusion. If you happen to recover the missing brass control key, I'll tell you what I know.\"",
          "needs": "Brass Control Key",
          "reveals_after_requirement": "\"The Maintenance Vault was opened during the blackout. Only crew members and Elias knew it existed.\"",
          "secrets": [
            "He has been smuggling luxury goods aboard the train."
          ]
        }
      ],
      "objects": [
        {
          "name": "Broken Wine Glass",
          "x": 4,
          "y": 3,
          "description": "A shattered crystal wine glass.",
          "relevance": "Contains sleeping powder, but not the murder toxin.",
          "collectible": true
        },
        {
          "name": "Receipt Stub",
          "x": 2,
          "y": 5,
          "description": "Receipt for an expensive bottle of wine.",
          "relevance": "Places Sebastian in the dining car during the murder window.",
          "collectible": true
        },
        {
          "name": "Brass Control Key",
          "x": 7,
          "y": 6,
          "description": "A heavy brass key lodged beneath a booth.",
          "relevance": "Unlocks the hidden Maintenance Vault.",
          "collectible": true
        }
      ]
    },
    {
      "id": "car_03",
      "name": "Galley Car",
      "type": "Kitchen",
      "grid_size": {
        "width": 7,
        "height": 5
      },
      "characters": [
        {
          "name": "Chef Orlov",
          "x": 2,
          "y": 1,
          "free_information": "\"Someone stole one of my carving knives tonight, and now everyone's staring at me like I'm the murderer. I also saw Dr. Vale washing her hands over and over. Hmph. Find my missing recipe notebook and perhaps I'll speak more carefully.\"",
          "needs": "Recipe Notebook",
          "reveals_after_requirement": "\"The knife was returned clean. Too clean. Someone planted it to mislead you.\"",
          "red_herring": true
        },
        {
          "name": "Marta Quinn",
          "x": 5,
          "y": 3,
          "free_information": "\"Elias threatened somebody earlier tonight. I heard enough to know it was serious. But I'm not saying another word unless you promise Hale won't hear about it.\"",
          "needs": "Protection from Conductor Hale",
          "reveals_after_requirement": "\"Elias was meeting privately with Dr. Vale before the blackout.\""
        }
      ],
      "objects": [
        {
          "name": "Bloody Carving Knife",
          "x": 1,
          "y": 4,
          "description": "A kitchen carving knife hidden behind flour sacks.",
          "relevance": "Covered in animal blood only. Deliberate red herring.",
          "collectible": true
        },
        {
          "name": "Recipe Notebook",
          "x": 6,
          "y": 1,
          "description": "A grease-stained notebook full of recipes.",
          "relevance": "Can be returned to Chef Orlov.",
          "collectible": true
        },
        {
          "name": "Tea Tin",
          "x": 3,
          "y": 4,
          "description": "Decorative tin filled with calming herbal tea.",
          "relevance": "Can calm Nina Bell enough to remember additional details.",
          "collectible": true
        }
      ]
    },
    {
      "id": "car_04",
      "name": "Observatory Lounge",
      "type": "Lounge",
      "grid_size": {
        "width": 9,
        "height": 7
      },
      "characters": [
        {
          "name": "Dr. Mirelle Vale",
          "x": 6,
          "y": 2,
          "free_information": "\"This whole affair is tragic, but clearly accidental. Sebastian Rook was furious enough to kill Elias if you ask me. I've also misplaced my medical case. Recover it and I'll answer a few more questions.\"",
          "needs": "Medical Case",
          "reveals_after_requirement": "\"Elias came to me for medical treatment in private. He was desperate to keep it secret.\"",
          "motives": [
            "Elias discovered she forged medical licenses."
          ]
        },
        {
          "name": "Professor Lucien Ward",
          "x": 2,
          "y": 5,
          "free_information": "\"The victim looked dizzy before he vanished. Curious symptoms. I'd think harder on it if I had one of those imported cigarettes from the smoking cabin.\"",
          "needs": "Imported Cigarettes",
          "reveals_after_requirement": "\"Those symptoms resemble paralysis, not electrocution. Quite different causes entirely.\"",
          "red_herring": true
        }
      ],
      "objects": [
        {
          "name": "Medical Case",
          "x": 7,
          "y": 4,
          "description": "A locked leather physician's case.",
          "relevance": "Contains syringes but not the real murder weapon.",
          "collectible": true
        },
        {
          "name": "Silver Fountain Pen",
          "x": 4,
          "y": 1,
          "description": "Elegant silver pen with a cracked nib.",
          "relevance": "The true murder weapon containing a concealed injector.",
          "collectible": true
        },
        {
          "name": "Burned Matchbook",
          "x": 1,
          "y": 6,
          "description": "Luxury hotel matchbook with scorch marks.",
          "relevance": "Links Elias and Dr. Vale to a shared past scandal.",
          "collectible": true
        }
      ]
    },
    {
      "id": "car_05",
      "name": "Smoking Cabin",
      "type": "Private Lounge",
      "grid_size": {
        "width": 6,
        "height": 5
      },
      "characters": [
        {
          "name": "Edgar Flint",
          "x": 3,
          "y": 2,
          "free_information": "\"During the blackout I saw somebody carrying a lantern toward the rear of the train. Couldn't see their face. Lost my lucky coin tonight too. Bring it back and maybe I'll remember more.\"",
          "needs": "Lucky Coin",
          "reveals_after_requirement": "\"The lantern carrier was definitely heading toward the maintenance section.\"",
          "secrets": [
            "He owes money to dangerous creditors."
          ]
        }
      ],
      "objects": [
        {
          "name": "Imported Cigarettes",
          "x": 5,
          "y": 1,
          "description": "A rare imported cigarette pack.",
          "relevance": "Can be traded to Professor Ward.",
          "collectible": true
        },
        {
          "name": "Lucky Coin",
          "x": 1,
          "y": 4,
          "description": "An engraved silver gambling coin.",
          "relevance": "Can be returned to Edgar Flint.",
          "collectible": true
        },
        {
          "name": "Lantern",
          "x": 4,
          "y": 4,
          "description": "An oil lantern covered in soot.",
          "relevance": "Matches witness descriptions but lacks fingerprints.",
          "collectible": false
        }
      ]
    },
    {
      "id": "car_06",
      "name": "Maintenance Vault",
      "type": "Hidden Service Compartment",
      "hidden": true,
      "contains_body": true,
      "grid_size": {
        "width": 8,
        "height": 6
      },
      "characters": [],
      "entry_requirements": [
        "Brass Control Key",
        "Train Route Pamphlet"
      ],
      "objects": [
        {
          "name": "Body of Elias Vane",
          "x": 4,
          "y": 3,
          "description": "The victim lies beside damaged electrical equipment.",
          "relevance": "Appears electrocuted at first glance, but there are no electrical burns.",
          "collectible": false
        },
        {
          "name": "Scorched Fuse Box",
          "x": 6,
          "y": 2,
          "description": "A sabotaged electrical panel.",
          "relevance": "Used to stage the crime scene after the murder.",
          "collectible": false
        },
        {
          "name": "Hidden Injector Needle",
          "x": 2,
          "y": 5,
          "description": "A toxin-coated injector needle beneath a floor grate.",
          "relevance": "Matches the concealed mechanism in the fountain pen.",
          "collectible": true
        },
        {
          "name": "Oil-Stained Cloak",
          "x": 1,
          "y": 1,
          "description": "A dark maintenance cloak dusted with silver residue.",
          "relevance": "Matches Nina Bell's description of the mysterious figure.",
          "collectible": true
        }
      ]
    }
  ],
  "critical_clues": [
    "Professor Ward identifies paralysis symptoms.",
    "The victim lacks electrical burns.",
    "The injector needle matches the mechanism inside the silver fountain pen.",
    "Nina Bell remembers the silver shoes and metallic clicking.",
    "Chef Orlov confirms the carving knife was planted.",
    "The fuse box sabotage happened after death."
  ],
  "red_herrings": [
    "Sebastian Rook's public hatred of Elias",
    "The bloody carving knife",
    "The blackout and apparent electrocution",
    "The syringes in Dr. Vale's medical case"
  ]
}