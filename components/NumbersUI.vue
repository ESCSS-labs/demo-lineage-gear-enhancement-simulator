<template>
  <div id="🔥NumbersUI">
    <ul id="🔥NumbersUI__Line1">
      <li id="🔥NumbersUI__Line1__Lv">1</li>
      <li id="🔥NumbersUI__Line1__Exp">0.00%</li>
    </ul>
    <ul id="🔥NumbersUI__Line2">
      <li id="🔥NumbersUI__Line2__Ac">{{ roleStore.getAC() }}</li>
      <li id="🔥NumbersUI__Line2__State">0</li>
    </ul>
  </div>
</template>

<script setup>
const roleStore = useRoleStore();
</script>

<style lang="scss">
#🔥NumbersUI {
  grid-area: 🔥NumbersUI;
  position: absolute;
  inset: -15.65% -37% 32.5% -24%;
  display: flex;
  flex-direction: column;
  transform: scale(0.5);
  text-align: center;
  font-size: 2.8vw;
  gap: 7%;
  line-height: 100%;

  @include md {
    font-size: 3vw;
  }
}

#🔥NumbersUI__Line1 {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10vw;
  padding-left: 12%;
}

#🔥NumbersUI__Line1__Lv {
  flex-basis: 9%;
  display: flex;
  justify-content: end;
}

#🔥NumbersUI__Line1__Exp {
  flex: 1;
}

#🔥NumbersUI__Line2 {
  flex: 1;
  display: flex;
  gap: 6vw;
  align-items: center;
}

#🔥NumbersUI__Line2__Ac {
  flex-basis: 31%;
}

#🔥NumbersUI__Line2__State {
  flex: 1;
}
</style>
