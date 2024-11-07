<template>
  <div id="🔥StatusNumbers">
    <ul id="🔥StatusNumbers__Level">
      <li id="🔥StatusNumbers__Level__Lv">
        {{ roleStore.currentData().basic.lv }}
      </li>
      <li id="🔥StatusNumbers__Level__Exp">
        {{ roleStore.currentData().basic.exp }}
      </li>
    </ul>
    <ul id="🔥StatusNumbers__Basic">
      <li id="🔥StatusNumbers__Basic__Li">
        {{ roleStore.currentData().basic.hp }}/{{
          roleStore.currentData().basic.hp
        }}
      </li>
      <li id="🔥StatusNumbers__Basic__Li">
        {{ roleStore.currentData().basic.mp }}/{{
          roleStore.currentData().basic.mp
        }}
      </li>
      <li id="🔥StatusNumbers__Basic__Li">{{ roleStore.getAC() }}</li>
    </ul>
    <ul id="🔥StatusNumbers__Attributes">
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.str }}
      </li>
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.dex }}
      </li>
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.con }}
      </li>
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.int }}
      </li>
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.wis }}
      </li>
      <li id="🔥StatusNumbers__Attributes__Li">
        {{ roleStore.currentData().basic.cha }}
      </li>
    </ul>
    <li id="🔥StatusNumbers__Er">2</li>
  </div>
</template>

<script setup>
const roleStore = useRoleStore();
</script>

<style lang="scss">
#🔥StatusNumbers {
  position: absolute;
  transform: scale(0.47);
  inset: -56%;

  @include sm {
    transform: scale(0.6);
    inset: -34%;
  }

  @include md {
    transform: unset;
    inset: 0%;
    font-size: 2.6vmin;
  }
}

#🔥StatusNumbers__Level {
  position: absolute;
  inset: 4% 15% 91.5% 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
}

#🔥StatusNumbers__Basic {
  position: absolute;
  inset: 12.2% 46% 73% 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include md {
    top: 12.7%;
  }
}

#🔥StatusNumbers__Basic__Li {
  flex: 1;
  line-height: 100%;
  display: flex;
  align-items: center;
}

#🔥StatusNumbers__Attributes {
  position: absolute;
  inset: 41.5% 68% 30% 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#🔥StatusNumbers__Attributes__Li {
  flex: 1;
  line-height: 100%;
  display: flex;
  align-items: center;
}

#🔥StatusNumbers__Er {
  position: absolute;
  inset: 89.8% 25% 5.5% 63%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
