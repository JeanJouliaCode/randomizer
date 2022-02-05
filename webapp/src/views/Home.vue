<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button label="key" @click="click" />
    <TextArea />
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
