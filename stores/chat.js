import { defineStore } from "pinia";
import { reactive } from "vue";
import { useScrollStore } from "./scroll";
import { useAlgorithmStore } from "./algorithm";

export const useChatStore = defineStore("chat", () => {
  const scrollStore = useScrollStore();
  const algorithmStore = useAlgorithmStore();

  const data = reactive({
    lines: Array(7),
  })

  function pushAndShiftArray (text) {
    {
    ESTest(text, "string");
  }

  data.lines.push(text);
  data.lines.shift();
}
  function showNumber() {
    {
      ESTest(algorithmStore.data.target.value, "number");
    }

    return algorithmStore.data.target.value < 0
      ? algorithmStore.data.target.value
      : `+${algorithmStore.data.target.value}`;
  }
  function detectColor() {
    if (scrollStore.getIsScrollType("cursed")) {
      return "黑色的";
    } else if (algorithmStore.out.getIsCategoryType("weapon")) {
      return "藍色的";
    } else {
      return "銀色的";
    }
  }

  function updateArmor() {
    pushAndShiftArray("請選擇一種防具。");
  }
  function updateWeapon() {
    pushAndShiftArray("請選擇一種武器。");
  }
  function updateForOne() {
    {
      ESTest(algorithmStore.data.target.name, "string");
    }

    pushAndShiftArray(
      `${showNumber()} ${algorithmStore.data.target.name
      } 一瞬間發出 ${detectColor()} 光芒。`,
    );
  }
  function updateForGone() {
    pushAndShiftArray(
      `${showNumber()} ${algorithmStore.data.target.name
      } 產生激烈的 ${detectColor()} 光芒，一會兒後就消失了。`,
    );
  }
  function updateForNope() {
    pushAndShiftArray(
      `${showNumber()} ${algorithmStore.data.target.name
      } 持續發出 激烈的 ${detectColor()}光芒，但是沒有任何事情發生。`,
    );
  }
  function updateForTwoUp() {
    {
      ESTest(algorithmStore.data.target.name, "string");
    }

    pushAndShiftArray(
      `${showNumber()} ${algorithmStore.data.target.name
      } 持續發出 ${detectColor()} 光芒。`,
    );
  }

  function updateChatScroll() {
    {
      ESTest(scrollStore.data.targetScroll, "string");
    }

    if (scrollStore.data.targetScroll === "none") return;

    if (scrollStore.data.targetScroll.includes("Armor")) {
      updateArmor();
    } else if (scrollStore.data.targetScroll.includes("Weapon")) {
      updateWeapon();
    }
  }
  function updateChatState() {
    {
      ESTest(algorithmStore.data.dice.state, "number");
    }

    if (algorithmStore.data.dice.state === -1) {
      updateForNope();
    } else if (algorithmStore.data.dice.state === 0) {
      updateForGone();
    } else if (algorithmStore.data.dice.state === 1) {
      updateForOne();
    } else {
      updateForTwoUp();
    }
  }



return {
  data,
  updateChatScroll,
  updateChatState
};
});
