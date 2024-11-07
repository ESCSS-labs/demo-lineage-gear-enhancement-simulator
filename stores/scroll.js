import { reactive } from "vue";
import { defineStore } from "pinia";

export const useScrollStore = defineStore("scroll", () => {
  const data = reactive({
    targetScroll: "none",
    clickTimerId: 0,
  })
  function changeScroll(string) {
    {
      ESTest(string, "string");
      ESTest(data.targetScroll, "string");
    }

    switch (string) {
      case "F6":
        data.targetScroll = "whiteArmor";
        break;

      case "F7":
        data.targetScroll = "blessedArmor";
        break;

      case "F8":
        data.targetScroll = "cursedArmor";
        break;
      case "F10":
        data.targetScroll = "whiteWeapon";
        break;

      case "F11":
        data.targetScroll = "blessedWeapon";
        break;

      case "F12":
        data.targetScroll = "cursedWeapon";
        break;

      default:
        data.targetScroll = "none";
        break;
    }
  }
  function getIsScrollType(type) {
    {
      ESTest(getScrollType() + type, "string");
    }
    return getScrollType() === type;
  }
  function getScrollType() {
    {
      ESTest(data.targetScroll, "string");
    }
    if (data.targetScroll === "none") return;

    return /(white)|(cursed)|(blessed)/g.exec(data.targetScroll)[0];
  }
  function getScrollEquipType() {
    {
      ESTest(data.targetScroll, "string");
    }

    if (data.targetScroll === "none") return;

    return /(Armor)|(Weapon)/g
      .exec(data.targetScroll)[0]
      .toLocaleLowerCase();
  }
  function clearClickScrollTimer() {
    {
      ESTest(data.clickTimerId, "number");
    }
    clearInterval(data.clickTimerId);
  }

  return {
    data,
    changeScroll,
    getIsScrollType,
    getScrollType,
    getScrollEquipType,
    clearClickScrollTimer
  };
});
