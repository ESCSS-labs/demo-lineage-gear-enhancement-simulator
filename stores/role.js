import { useKnightStore } from "./knight";

export const useRoleStore = defineStore("role", () => {
  const knightStore = useKnightStore();
  const data = reactive({
    data: {},
    currentRole: "knight", // depends on the VueRouter in RolesPage.vue Component
  });
  function getTotalEquipsAC() {
    {
      ESTest(currentData().equips, "array");
    }

    const roleEquips = currentData().equips;
    let totalEquipsAC = 0;

    roleEquips.forEach((roleEquip) => {
      const isArmor = computed(() => /armor/g.test(roleEquip.category));
      const calcTotalEquipAC = computed(
        () => (totalEquipsAC += roleEquip.armor + roleEquip.value),
      );

      if (isArmor.value) {
        calcTotalEquipAC.value;
      }
    });

    return totalEquipsAC;
  }
  function currentData() {
    {
      ESTest(data.data[data.currentRole], "object");
    }

    return data.data[data.currentRole];
  }

  function getAC() {
    {
      ESTest(currentData().basic.ac, "number");
      ESTest(getTotalEquipsAC(), "number");
    }

    const roleAC = currentData().basic.ac;
    const totalEquipsAC = getTotalEquipsAC();

    if (roleAC - totalEquipsAC === -40) {
      knightStore.getGameChatEvent("armor1");
    }
    if (roleAC - totalEquipsAC === -45) {
      knightStore.getGameChatEvent("armor2");
    }

    return roleAC - totalEquipsAC;
  }

  function calcEquipAttribute(string, equip) {
    {
      ESTest(string, "string");
      ESTest(equip, "object");
    }

    const equipToAttr = {
      力量手套: "str",
    };

    if (equip.isAttrEquip) {
      const attr = equipToAttr[equip.name];
      const plusAttr = computed(
        () => (currentData().basic[attr] += equip.attribute[attr]),
      );
      const minusAttr = computed(
        () => (currentData().basic[attr] -= equip.attribute[attr]),
      );

      if (string === "plusAttribute") plusAttr.value;
      else if (string === "minusAttribute") minusAttr.value;
    }
  }

  return {
    data,
    currentData,
    getAC,
    calcEquipAttribute,
  };
});
