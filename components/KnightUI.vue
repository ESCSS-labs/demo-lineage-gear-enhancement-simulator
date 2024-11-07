<template>
  <div id="🔥KnightUI">
    <h1 id="🔥KnightUI__Title">蛇髮 名模↙</h1>
    <h2 id="🔥KnightUI__Name">熱血狂志</h2>
    <div
      id="🔥KnightUI__Role"
      :class="[knightStore.data.isDeathKnight ? '--deathKnight' : '--knight']"
    ></div>
    <p id="🔥KnightUI__ChatEvent" v-show="knightStore.data.isShowGameChat">
      熱血狂志: {{ knightStore.data.chatMsg }}
    </p>
  </div>
</template>

<script setup>
const knightStore = useKnightStore();

knightStore.repeatTalkChatEvent(15);
</script>

<style lang="scss">
#🔥KnightUI {
  position: relative;
  left: 38%;
  top: 35.5%;
  font-size: clamp(12px, 2.2vw, 32px);
  width: 30%;
  height: 15%;
}

#🔥KnightUI__Title {
  position: relative;
  top: 7%;
  left: 15%;
  color: rgb(60, 255, 255);
}

#🔥KnightUI__Name {
  position: relative;
  left: 22%;
  color: rgb(255, 255, 0);
}

#🔥KnightUI__ChatEvent {
  position: relative;
  top: 18%;
  width: 75%;
  font-size: clamp(12px, 2.6vh, 30px);

  &::before {
    content: "▲";
    position: absolute;
    left: 44.5%;
    transform: translateY(-75%);
  }
}

#🔥KnightUI__Role {
  height: 100%;
  background-repeat: round;
  background-size: cover;
}

.--knight {
  background-image: url("/knight/knight.gif");
  width: 47%;
}

.--deathKnight {
  background-image: url("/knight/knight_deathKnight.gif");
  width: 30%;
  position: relative;
  left: 20%;
}
</style>
