

const cards = [{
  name: 'Starter Decks',
  keycode: 'SD',
  cards: {
    SD1: {
      title: 'The Awakening',
      content: require('./cards/series/starter/SD1.json')
    },
    SD2: {
      title: 'The Extreme Evolution',
      content: require('./cards/series/starter/SD2.json')
    },
    SD3: {
      title: 'The Dark Invasion',
      content: require('./cards/series/starter/SD3.json')
    },
    SD4: {
      title: 'The Guardian of Namekians',
      content: require('./cards/series/starter/SD4.json')
    },
    SD5: {
      title: 'The Crimson Saiyan',
      content: require('./cards/series/starter/SD5.json')
    },
    SD6: {
      title: 'Resurrected Fusion',
      content: require('./cards/series/starter/SD6.json')
    },
    SD7: {
      title: 'Shenron\'s Advent',
      content: require('./cards/series/starter/SD7.json')
    },
    SD8: {
      title: 'Rising Broly',
      content: require('./cards/series/starter/SD8.json')
    },
    SD9: {
      title: 'Saiyan Legacy',
      content: require('./cards/series/starter/SD9.json')
    },
    SD10: {
      title: 'Parasitic Overlord',
      content: require('./cards/series/starter/SD10.json')
    },
    SD11: {
      title: 'Instinct Surpassed',
      content: require('./cards/series/starter/SD11.json')
    },
    SD12: {
      title: 'Spirit of Potara',
      content: require('./cards/series/starter/SD12.json')
    },
    SD13: {
      title: 'Clan Collusion',
      content: require('./cards/series/starter/SD13.json')
    },
    SD14: {
      title: 'Saiyan Wonder',
      content: require('./cards/series/starter/SD14.json')
    },
  }
}, {
  name: 'Boosters',
  keycode: 'BT',
  cards: {
    BT1: {
      title: 'Galactic Battle',
      content: require('./cards/series/booster/BT1.json')
    },
    BT2: {
      title: 'Union Force',
      content: require('./cards/series/booster/BT2.json')
    },
    BT3: {
      title: 'Cross Worlds',
      content: require('./cards/series/booster/BT3.json')
    },
    BT4: {
      title: 'Colossal Warfare',
      content: require('./cards/series/booster/BT4.json')
    },
    BT5: {
      title: 'Miraculous Revival',
      content: require('./cards/series/booster/BT5.json')
    },
    BT6: {
      title: 'Destroyer Kings',
      content: require('./cards/series/booster/BT6.json')
    },
    BT7: {
      title: 'Assault of the Saiyans',
      content: require('./cards/series/booster/BT7.json')
    },
    BT8: {
      title: 'Malicious Machinations',
      content: require('./cards/series/booster/BT8.json')
    },
    BT9: {
      title: 'Universal Onslaught',
      content: require('./cards/series/booster/BT9.json')
    },
    BT10: {
      title: 'Rise of the Unison Warrior',
      content: require('./cards/series/booster/BT10.json')
    },
  }
}, {
  name: 'Expansions',
  keycode: 'EX',
  cards: {
    EX_01: {
      title: 'Mighty Heroes',
      content: require('./cards/expansion-sets/EX_01.json')
    },
    EX_02: {
      title: 'Dark Demon\'s Villains',
      content: require('./cards/expansion-sets/EX_02.json')
    },
    EX_03: {
      title: 'Ultimate Box',
      content: require('./cards/expansion-sets/EX_03.json')
    },
    EX_04: {
      title: 'Unity of Saiyans',
      content: require('./cards/expansion-sets/EX_04.json')
    },
    EX_05: {
      title: 'Unity of Destruction',
      content: require('./cards/expansion-sets/EX_05.json')
    },
    EX_06: {
      title: 'Special Anniversary Box',
      content: require('./cards/expansion-sets/EX_06.json')
    },
    EX_07: {
      title: 'Magnificent Collection 1',
      content: require('./cards/expansion-sets/EX_07.json')
    },
    EX_08: {
      title: 'Magnificent Collection 2',
      content: require('./cards/expansion-sets/EX_08.json')
    },
    EX_09: {
      title: 'Saiyan Surge',
      content: require('./cards/expansion-sets/EX_09.json')
    },
    EX_10: {
      title: 'Namekian Surge',
      content: require('./cards/expansion-sets/EX_10.json')
    },
    EX_11: {
      title: 'Universe 7 Unison',
      content: require('./cards/expansion-sets/EX_11.json')
    },
    EX_12: {
      title: 'Universe 11 Unison',
      content: require('./cards/expansion-sets/EX_12.json')
    },
  }
}, {
  name: 'Draft Boxes',
  keycode: 'DB',
  cards: {
    DB1: {
      title: 'Dragon Brawl',
      content: require('./cards/draft-box/DB1.json')
    },
    DB2: {
      title: 'Divine Multiverse',
      content: require('./cards/draft-box/DB2.json')
    },
  }
}, {
  name: 'Expert Decks',
  keycode: 'XD',
  cards: {
    XD1: {
      title: 'Universe 6 Assailants',
      content: require('./cards/expert-decks/XD1.json')
    },
    XD2: {
      title: 'Android Duality',
      content: require('./cards/expert-decks/XD2.json')
    },
    XD3: {
      title: 'The Ultimate Life Form',
      content: require('./cards/expert-decks/XD3.json')
    }
  }
}, {
  name: 'Themed Boosters',
  keycode: 'TB',
  cards: {
    TB1: {
      title: 'The Tournament of Power',
      content: require('./cards/themed-booster/TB1.json')
    },
    TB2: {
      title: 'World Martial Arts Tournament',
      content: require('./cards/themed-booster/TB2.json')
    },
    TB3: {
      title: 'Clash of Fates',
      content: require('./cards/themed-booster/TB3.json')
    }
  }
}, {
  name: 'Promotional',
  keycode: 'PR',
  cards: {
    PR: {
      title: 'Promos',
      content: require('./cards/promotional.json')
    }
  }
}]

export default cards