<template>
  <ul id="🔥HealthUI">
    <li id="🔥HealthUI__Hp">
      HP:{{ roleStore.currentData().basic.hp }}/{{
        roleStore.currentData().basic.hp
      }}
    </li>
    <li id="🔥HealthUI__Mp">
      MP:{{ roleStore.currentData().basic.mp }}/{{
        roleStore.currentData().basic.mp
      }}
    </li>
  </ul>
</template>

<script setup>
const roleStore = useRoleStore();
</script>

<style lang="scss">
#🔥HealthUI {
  grid-area: 🔥HealthUI;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 24.5vw 1fr;
  grid-template-areas: "🔥HealthUI__Hp . 🔥HealthUI__Mp";
  position: relative;
  inset: -39% 0% 0% -24%;
  font-size: 2.5vw;
  width: 149%;
  height: 160%;
  transform: scale(0.6);
}

#🔥HealthUI__Hp {
  grid-area: 🔥HealthUI__Hp;
  justify-self: end;
  -webkit-text-stroke: 0.05px rgb(89, 9, 9);
  color: rgb(236, 194, 194);
  margin-right: -0.65vw;
}

#🔥HealthUI__Mp {
  grid-area: 🔥HealthUI__Mp;
  -webkit-text-stroke: 0.05px rgb(30, 10, 96);
  color: rgb(181, 217, 255);
  margin-top: 1%;
}
</style>
