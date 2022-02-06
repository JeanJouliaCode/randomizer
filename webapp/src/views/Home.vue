<template>
  <div class="home">
    <div class="header"><h1>Random wheel</h1></div>
    <div class="main">
      <div class="spiningWheel"></div>
    </div>
    <div class="right">
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <TextArea class="TextArea" />
      <Button label="Spin the wheel" @click="click" />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { Button, TextArea } from "randomizer-components";

export default {
  name: "Home",
  components: {
    Button,
    TextArea,
  },
  methods: {
    click() {
      console.log("test!");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 17em 4fr 1fr;
}

.spiningWheel {
  width: 57em;
  height: 57em;

  border-radius: 50%;
  background: rgb(216, 115, 115);
}

.header {
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
}
.main {
  grid-column: 1 / 2;
  grid-row: 2;

  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  grid-column: 2 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.TextArea {
  height: 37em;
  width: 34em;
  margin: 1em 0 1em 0;
}

.footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
</style>
