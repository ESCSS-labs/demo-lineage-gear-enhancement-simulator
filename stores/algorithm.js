import { reactive } from "vue";
import { defineStore } from "pinia";
import { useChatStore } from "./chat";
import { useRoleStore } from "./role";
import { useScrollStore } from "./scroll";
import { useKnightStore } from "./knight";

export const useAlgorithmStore = defineStore("algorithm", () => {
  const roleStore = useRoleStore();
  const chatStore = useChatStore();
  const scrollStore = useScrollStore();
  const knightStore = useKnightStore();

  const data = reactive({
    dice: {
      bonus: 0,
      state: 0,
      value: 0,
      successValue: 0,
    },
    target: {
      name: "",
      category: "",
      value: 0,
      safetyValue: 0,
    },
  });

  function getRandomStateOneTo(value) {
    {
      ESTest(value, "number");
      ESTest(data.dice.state, "number");
    }

    data.dice.state = Number(Math.floor(Math.random() * value) + 1);
  }
  function resetAtTheEnd() {
    {
      ESTest(data.dice.state, "number");
      ESTest(scrollStore.data.targetScroll, "string");
    }

    data.dice.state = 0;
    scrollStore.data.targetScroll = "none";
  }
  function handleUpdate() {
    chatStore.updateChatState();
    updateEquipValue();
    resetAtTheEnd();
  }
  function handleUpdateOver9() {
    {
      ESTest(data.target.value, "number");
      ESTest(data.dice.state, "number");
    }

    //white: 33% +1 66%: nothing happened message
    //cursed: 50% +1 50%: nothing happened message
    //blessed: 66% +1 33%: nothing happened message
    // data.dice.state:
    // -1: nothing happened msg
    //  1: +1 msg

    switch (true) {
      case scrollStore.getIsScrollType("white") && isSuccessIn([1, 2]):
        data.target.value++;
        data.dice.state = 1;
        knightStore.getGameChatEvent("weaponSuccess");
        break;

      case scrollStore.getIsScrollType("cursed") && isSuccessIn([1, 2, 3]):
        data.target.value--;
        data.dice.state = 1;
        knightStore.getGameChatEvent("weaponSuccess");
        break;

      case scrollStore.getIsScrollType("blessed") && isSuccessIn([1, 2, 3, 4]):
        data.target.value++;
        data.dice.state = 1;
        knightStore.getGameChatEvent("weaponSuccess");
        break;

      default:
        // failure situation
        data.dice.state = -1;
        knightStore.getGameChatEvent("weaponNope");
        break;
    }

    chatStore.updateChatState();
    resetAtTheEnd();

    function isSuccessIn(array) {
      return array.includes(data.dice.state);
    }
  }

  function getDiceValue() {
    {
      ESTest(data.dice.value, "number");
    }

    data.dice.value = Number((Math.random() * 100).toFixed(2));
  }
  function handleFailure(equip, event) {
    {
      ESTest(equip, "object");
      ESTest(event, "object");
      ESTest(data.target.value, "number");
      ESTest(data.dice.state, "number");
      ESTest(data.target.value, "number");
    }

    if (Math.abs(data.target.value) === 9) {
      knightStore.getGameChatEvent("weaponFailure");
    }

    data.dice.state = 0;
    data.target.value = 0;
    chatStore.updateChatState();
    getEquipGoneEffect();
    resetAtTheEnd();

    function getEquipGoneEffect() {
      let tempArmor = equip.armor;
      let tempMr = equip.mr;

      goneEffect();
      revertEffect();

      function goneEffect() {
        roleStore.calcEquipAttribute("minusAttribute", equip);
        toggleEquipHidden();
        equip.armor = 0;
      }
      function revertEffect() {
        setTimeout(function () {
          toggleEquipHidden();
          equip.armor = tempArmor;
          equip.mr = tempMr;
          roleStore.calcEquipAttribute("plusAttribute", equip);
        }, 3000);
      }
      function toggleEquipHidden() {
        event.target.classList.toggle("--hidden");
      }
    }
  }
  function updateEquipValue() {
    {
      ESTest(data.target.value, "number");
      ESTest(data.dice.state, "number");
    }

    if (scrollStore.getIsScrollType("cursed")) {
      data.target.value--;
    } else {
      data.target.value += data.dice.state;
    }
  }
  function getTargetCategoryEquipType() {
    {
      ESTest(data.target.category, "string");
    }

    return data.target.category.substring(0, 6).toLowerCase().trim();
  }
  function getDiceSuccessValue() {
    {
      ESTest(data.dice.successValue, "number");
      ESTest(data.target.value, "number");
      ESTest(data.target.safetyValue, "number");
    }

    if (getIsSpecialCases()) {
      data.dice.successValue = 100;
    } else if (getIsCategoryType("weapon")) {
      getWeaponSuccessValue();
    } else if (getIsCategoryType("armor")) {
      getArmorSuccessValue();
    }

    function getIsSpecialCases() {
      /* example with Weapon Formula */
      //white & blessed: -7 -8... successValue will be 33%, to prevent this situation happened return 100%
      //cursed: when +6 up use cursedScroll successValue will be 33%, to prevent this situation happened return 100%

      return (
        (scrollStore.getIsScrollType("white") && data.target.value < 0) ||
        (scrollStore.getIsScrollType("blessed") && data.target.value < 0) ||
        (scrollStore.getIsScrollType("cursed") &&
          data.target.value >= Math.abs(data.target.safetyValue))
      );
    }
  }
  function getArmorSuccessValue() {
    {
      ESTest(data.target.value, "number");
      ESTest(data.target.safetyValue, "number");
      ESTest(data.dice.bonus, "number");
      ESTest(data.dice.successValue, "number");
    }

    /* Armor Formula */
    //|underSafetyValue|:100%
    //|0~8|:1/n * 100% (if(n<4) 25%)
    //|9up|:10%

    if (Math.abs(data.target.value) < Math.abs(data.target.safetyValue)) {
      data.dice.successValue = 100 + data.dice.bonus;
    } else if (Math.abs(data.target.value) >= 9) {
      data.dice.successValue = 10 + data.dice.bonus;
    } else if (Math.abs(data.target.value) < 4) {
      data.dice.successValue = 25 + data.dice.bonus;
    } else {
      data.dice.successValue =
        (1 / Math.abs(data.target.value)) * 100 + data.dice.bonus;
    }
  }
  function getWeaponSuccessValue() {
    {
      ESTest(data.target.value, "number");
      ESTest(data.target.safetyValue, "number");
      ESTest(data.dice.successValue, "number");
      ESTest(data.dice.bonus, "number");
    }
    /* Weapon Formula */
    //|underSafetyValue|:100%
    //|0~8|:33.33%
    //|9up|:10%

    if (Math.abs(data.target.value) < Math.abs(data.target.safetyValue)) {
      data.dice.successValue = 100 + data.dice.bonus;
    } else if (Math.abs(data.target.value) >= 9) {
      data.dice.successValue = 10 + data.dice.bonus;
    } else {
      data.dice.successValue = 33.33 + data.dice.bonus;
    }
  }
  function getIsSuccess() {
    {
      ESTest(data.dice.successValue, "number");
      ESTest(data.dice.value, "number");
    }

    getDiceValue();
    getDiceSuccessValue();

    return data.dice.successValue >= data.dice.value;
  }
  function getIsMatchedScrollEquipType() {
    return scrollStore.getScrollEquipType() === getTargetCategoryEquipType();
  }
  function updateData(equip) {
    {
      ESTest(data.target.name, "string");
      ESTest(data.target.value, "number");
      ESTest(data.target.category, "string");
      ESTest(data.target.safetyValue, "number");
      ESTest(equip.name, "string");
      ESTest(equip.value, "number");
      ESTest(equip.category, "string");
      ESTest(equip.safetyValue, "number");
    }

    data.target.name = equip.name;
    data.target.value = equip.value;
    data.target.category = equip.category;
    data.target.safetyValue = equip.safetyValue;
  }
  function getIsCategoryType(text) {
    {
      ESTest(data.target.category, "string");
    }

    return data.target.category.toLowerCase().includes(text.toLowerCase());
  }
  function doAlgorithm(equip, event) {
    {
      ESTest(equip, "object");
      ESTest(event, "object");
      ESTest(knightStore.data.isStopFunction, "boolean");
      ESTest(data.target.value, "number");
    }

    if (knightStore.data.isStopFunction) return;
    if (!getIsMatchedScrollEquipType()) return;

    if (getIsSuccess()) {
      switch (scrollStore.getScrollType()) {
        case "blessed":
          if (data.target.value < 3) {
            getRandomStateOneTo(3);
            handleUpdate();
          } else if (data.target.value < 6) {
            getRandomStateOneTo(2);
            handleUpdate();
          } else if (data.target.value < 9) {
            getRandomStateOneTo(1);
            handleUpdate();
          } else {
            getRandomStateOneTo(6);
            handleUpdateOver9();
          }
          break;

        case "white":
          if (data.target.value < 9) {
            getRandomStateOneTo(1);
            handleUpdate();
          } else {
            getRandomStateOneTo(6);
            handleUpdateOver9();
          }
          break;

        case "cursed":
          if (data.target.value > -9) {
            getRandomStateOneTo(1);
            handleUpdate();
          } else {
            getRandomStateOneTo(6);
            handleUpdateOver9();
          }
          break;
      }
    } else {
      handleFailure(equip, event);
    }
  }
  return {
    data,
    updateData,
    getIsCategoryType,
    doAlgorithm,
  };
});
