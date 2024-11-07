<template>
  <div id="🔥ItemsUI" @click.stop="handleClick">
    <figure
      id="🔥ItemsUI__X"
      v-for="slot in data.slotList"
      :key="slot.id"
      :class="slot.hotkey"
    >
      <img id="🔥ItemsUI__X__Img" :src="slot.src" :alt="slot.description" />
      <figcaption id="🔥ItemsUI__X__X">
        <h1 id="🔥ItemsUI__X__X__H1">{{ slot.name }}</h1>
        <p id="🔥ItemsUI__X__X__P">{{ slot.description }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const { data: source } = useFetch("/api/slot");
const chatStore = useChatStore();
const scrollStore = useScrollStore();

const data = reactive({
  cssColor: "",
  slotList: source,
});

function handleClick(e) {
  // F5 ~F12
  const scrollClass = e.target.parentElement.classList[0];

  scrollStore.clearClickScrollTimer();
  handleSlot(scrollClass, true);
}
function handleKeyboard(e) {
  e.preventDefault();
  e.stopPropagation();
  scrollStore.clearClickScrollTimer();
  handleSlot(e.key);
}
function handleSlot(classOrKey, isRepeatState = false) {
  //classOrKey required string F5 or F6 ... F12
  const slots = Array.from(document.querySelector("#🔥ItemsUI").children);

  slots.forEach((slot) => {
    slot.classList.remove("--active");
    slot.lastElementChild.style.opacity = 0;

    if (slot.className === classOrKey) {
      if (isRepeatState) {
        scrollStore.data.clickTimerId = setInterval(function () {
          scrollStore.changeScroll(classOrKey);
        }, 750);
      }

      scrollStore.changeScroll(classOrKey);
      chatStore.updateChatScroll();
      getSlotColor(slot.firstChild.src);
      slot.classList.add("--active");
      slot.lastElementChild.style.opacity = 1;
    }
  });
}
function getSlotColor(imgUrl) {
  //control primary colors to display text color through js logic
  const color = {
    grey: "#aaa9a9",
    white: "#e8e8e8",
    yellow: "#e9ee8b",
    red: "#ff2424",
  };

  if (/blessed/g.test(imgUrl)) {
    data.cssColor = color.yellow;
  } else if (/cursed/g.test(imgUrl)) {
    data.cssColor = color.red;
  } else {
    data.cssColor = color.white;
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyboard);
});
onBeforeRouteLeave(() => {
  document.removeEventListener("keydown", handleKeyboard);
});
</script>

<style lang="scss">
#🔥ItemsUI {
  grid-area: 🔥ItemsUI;
  position: relative;
  padding: 3.75% 3.75% 3% 4%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
}

#🔥ItemsUI__X:nth-of-type(1),
#🔥ItemsUI__X:nth-of-type(5) {
  opacity: 0;
}

#🔥ItemsUI__X__Img {
  width: 100%;
  height: 100%;
}

#🔥ItemsUI__X__X {
  position: absolute;
  left: 0;
  right: 0%;
  bottom: 100%;
  opacity: 0;
  font-size: clamp(12px, 2rem, 1.9vw);
  color: v-bind("data.cssColor");
  padding: 0.4vw 0 0.2vw 0.3vw;
  background: rgba(0, 0, 0, 0.45);
  border: 0.3vw solid;
  border-color: #c7c2be #817f80 #817f80 #c7c2be;
  line-height: 105%;
}
</style>
