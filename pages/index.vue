<template>
  <main id="🌀SinglePlayer">
    <div id="🌀SinglePlayer__Top">
      <KnightUI />
      <StatusUI />
    </div>

    <div id="🌀SinglePlayer__Bottom">
      <HealthUI />
      <ChatUI />
      <ItemsUI />
      <NumbersUI />
    </div>

    <audio
      autoplay="autoplay"
      loop="loop"
      :src="audioStore.getRoleAudioUrl()"
    ></audio>
  </main>
</template>

<script setup>
const roleStore = useRoleStore();
const audioStore = useAudioStore();
const { data } = await useFetch("/api/role");
roleStore.data.data = data;
</script>

<style lang="scss">
#🌀SinglePlayer {
  background: black;
  color: #e5e7eb;
  height: 100vh;
  width: 100vw;
  background-image: url("/knight/knight_background.webp");

  background-size: cover;
  background-repeat: round;
  cursor: url("/UI/UI_pointer.webp"), auto;

  // 使用者在手機模式下
  @media (orientation: portrait) {
    & {
      background-image: none;

      &::after {
        content: "請切換橫幅模式";
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        font-size: 12vw;
      }

      & > * {
        display: none !important;
      }
    }
  }
}

#🌀SinglePlayer__Top {
  position: relative;
  height: 73%;
}

#🌀SinglePlayer__Bottom {
  display: grid;
  grid-template-columns: 17.5% 1fr 23%;
  grid-template-rows: 20% 64% 16%;
  grid-template-areas:
    ". 🔥HealthUI ."
    "🔥NumbersUI 🔥ChatUI 🔥ItemsUI"
    "🔥NumbersUI . 🔥FunctionUI";

  position: relative;
  height: 27%;
}
</style>
