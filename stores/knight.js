import { reactive } from "vue";
import { defineStore } from "pinia";
import { useChatStore } from "./chat";
import { useAlgorithmStore } from "./algorithm";

export const useKnightStore = defineStore("knight", () => {
  const chatStore = useChatStore();
  const algorithmStore = useAlgorithmStore();

  const data = reactive({
    chatMsg: "",
    isDeathKnight: false,
    isShowGameChat: false,
    isStopFunction: false,
  });
  function GameChatTime(second) {
    {
      ESTest(second, "number");
      ESTest(data.isShowGameChat, "boolean");
      ESTest(data.isStopFunction, "boolean");
      ESTest(algorithmStore.data.dice.bonus, "number");
    }

    setTimeout(function () {
      data.isShowGameChat = false;
      data.isStopFunction = false;
      algorithmStore.data.dice.bonus = 0;
    }, second * 1000);
  }
  function getArrayFull(array, string) {
    {
      ESTest(array, "array");
      ESTest(string, "string");
    }

    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(string);
    }
    return result;
  }

  function getGameChatEvent(chatEvent) {
    {
      ESTest(chatEvent, "string");
      ESTest(data.chatMsg, "string");
      ESTest(algorithmStore.data.dice.bonus, "number");
      ESTest(chatStore.data.lines, "array");
      ESTest(data.isShowGameChat, "boolean");
    }

    switch (chatEvent) {
      case "weaponSuccess":
        data.chatMsg = "果然是天選之人... 佩服佩服";
        break;

      case "weaponFailure":
        data.chatMsg = "10%機率可不是叫假的誒";
        break;

      case "weaponNope":
        data.chatMsg = "NOT TODAY!";
        break;

      case "armor1":
        data.chatMsg = "好像沒過幾樣吶....再加油啊";
        break;

      case "armor2":
        data.chatMsg = "老大 別心急啊~~慢慢來嘛";
        break;

      case "talk0":
        algorithmStore.data.dice.bonus = 50;
        data.chatMsg = "似乎有風圍繞在你的滑鼠";
        break;

      case "talk1":
        algorithmStore.data.dice.bonus = 25;
        data.chatMsg = "似乎有微風圍繞在你的滑鼠";
        break;

      case "talk2":
        algorithmStore.data.dice.bonus = -100;
        data.chatMsg = "似乎有詛咒圍繞在你的滑鼠";
        break;

      case "talk3":
        data.isStopFunction = true;
        data.chatMsg = "似乎有阻力圍繞在你的滑鼠";
        break;

      case "talk4":
        data.chatMsg = "用白的衝10只有33%成功率";
        break;

      case "talk5":
        data.chatMsg = "用祝福的衝10只有66%成功率";
        break;
      case "talk6":
        data.chatMsg = "用紅的衝10只有50%成功率";
        break;

      case "talk7":
        data.chatMsg = "試著點戒指變身看看吧！";
        break;

      case "talk8":
        data.chatMsg = "講個笑話給你聽 有一天............哈哈";
        break;

      case "talk9":
        chatStore.data.lines = getArrayFull(
          Array(7),
          "國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國",
        );
        data.chatMsg =
          "國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國國";
        break;

      case "toBeKnight":
        data.chatMsg = "騎士好棒棒";
        break;

      case "toBeDeathKnight":
        data.chatMsg = "..";
        break;
    }
    data.isShowGameChat = true;
    GameChatTime(10);
  }
  function repeatTalkChatEvent(second) {
    {
      ESTest(second, "number");
    }

    onMounted(() => {
      setInterval(function () {
        const randomNum = Math.floor(Math.random() * 10);

        getGameChatEvent(`talk${randomNum}`);
      }, second * 1000);
    });
  }
  return {
    data,
    getGameChatEvent,
    repeatTalkChatEvent,
  };
});
