export default defineEventHandler(() => ({
  knight: {
    basic: {
      lv: 1,
      exp: "0.00%",
      hp: 86,
      mp: 1,
      ac: 10,
      mr: 0,
      er: 2,
      str: 22,
      dex: 12,
      con: 14,
      int: 9,
      wis: 8,
      cha: 12,
    },

    equips: [
      {
        id: 0,
        name: "瑟魯基之劍",
        src: "knight/equip_weapon.webp",
        category: "weapon",
        attack: {
          small: 16,
          large: 10,
        },
        grip: "單手武器",
        value: 0,
        safetyValue: 6,
        material: "金屬",
        weight: 120,
        occupation: "[騎士]",
        feature: "近距離命中+2",
      },
      {
        id: 1,
        name: "騎士面甲",
        src: "knight/equip_helmet.webp",
        category: "armor helmet",
        armor: 3,
        value: 0,
        safetyValue: 4,
        material: "鐵",
        weight: 40,
        occupation: "[騎士]",
        feature: null,
      },
      {
        id: 2,
        name: "妖魔戰士護身符",
        src: "knight/equip_amulet.webp",
        category: "jewelry amulet",
        armor: 0,
        value: 0,
        safetyValue: 0,
        material: "寶石",
        weight: 5,
        occupation: "[所有職業]",
        feature: "體力上限+20",
      },
      {
        id: 3,
        name: "T恤",
        src: "knight/equip_shirt.webp",
        category: "armor shirt",
        armor: 0,
        value: 0,
        safetyValue: 4,
        material: "布",
        weight: 5,
        occupation: "[所有職業]",
        feature: null,
      },
      {
        id: 4,
        name: "精靈金屬盔甲",
        src: "knight/equip_bodyArmor.webp",
        category: "armor bodyArmor",
        armor: 6,
        value: 0,
        safetyValue: 6,
        material: "奧里哈魯根",
        weight: 250,
        occupation: "[騎士][妖精][黑暗妖精]",
        feature: null,
      },
      {
        id: 5,
        name: "保護者斗篷",
        src: "knight/equip_cloak.webp",
        category: "armor cloak",
        armor: 3,
        value: 0,
        safetyValue: 4,
        material: "布",
        weight: 10,
        occupation: "[所有職業]",
        feature: null,
      },
      {
        id: 6,
        name: "瞬間移動控制戒指",
        src: "knight/equip_ring.webp",
        category: "jewelry left-ring",
        armor: 0,
        value: 0,
        safetyValue: 0,
        material: "金",
        weight: 3,
        occupation: "[所有職業]",
        feature: "使用傳送術或傳送道具時，可以指定傳送到曾經記憶過的地點",
      },
      {
        id: 7,
        name: "身體腰帶",
        src: "knight/equip_belt.webp",
        category: "jewelry belt",
        armor: 0,
        value: 0,
        safetyValue: 0,
        material: "皮",
        weight: 50,
        occupation: "[所有職業]",
        feature: "體力上限+50",
      },
      {
        id: 8,
        name: "精靈盾牌",
        src: "knight/equip_shield.webp",
        category: "armor shield",
        armor: 2,
        value: 0,
        safetyValue: 6,
        material: "銀",
        weight: 50,
        occupation: "[騎士][妖精][法師][黑暗妖精]",
        feature: null,
      },
      {
        id: 9,
        name: "力量手套",
        src: "knight/equip_gloves.webp",
        category: "armor gloves",
        armor: 0,
        value: 0,
        safetyValue: 4,
        material: "皮",
        weight: 18,
        occupation: "[所有職業]",
        isAttrEquip: true,
        attribute: {
          str: 2,
        },
        feature: "力量 +2",
      },
      {
        id: 10,
        name: "形體控制戒指",
        src: "knight/equip_ring.webp",
        category: "jewelry right-ring",
        armor: 0,
        value: 0,
        safetyValue: 0,
        material: "金",
        weight: 3,
        occupation: "[所有職業]",
        feature: "使用變身術或變身道具時，可以指定要變身的怪物",
      },
      {
        id: 11,
        name: "鋼鐵長靴",
        src: "knight/equip_boots.webp",
        category: "armor boots",
        armor: 3,
        value: 0,
        safetyValue: 4,
        material: "鐵",
        weight: 50,
        occupation: "[所有職業]",
        feature: null,
      },
    ],
  },
}));
