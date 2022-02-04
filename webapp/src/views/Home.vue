<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button label="key" @click="click" />
  </div>
</template>

<script>
import { Button } from "randomizer-components";

export default {
  name: "Home",
  components: {
    Button,
  },
  methods: {
    click() {
      console.log("test!");
    },
  },
};
</script>
