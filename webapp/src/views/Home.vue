<template>
  <BoilerPlateHome>
    <template #header>
      <h1>Random wheel</h1>
      <span class="home__answer">{{ answer }}</span>
    </template>
    <template #main>
      <SpinningWheel
        ref="wheel"
        class="home__spiningWheel"
        :values="wheelValues"
        @answer="handleWheelResponse"
        font="Balsamiq Sans"
      />
    </template>
    <template #form>
      <Select :options="['Regular']" />
      <TextArea class="home__textArea" @input="handleTextArea" />
      <Button
        class="home__spin-button"
        label="Spin the wheel"
        @click="spinTheWheel"
      />
    </template>
  </BoilerPlateHome>
</template>

<script>
import { Button, TextArea, Select, SpinningWheel } from "randomizer-components";
import BoilerPlateHome from "../components/BoilerPlateHome.vue";

export default {
  name: "Home",
  components: {
    Button,
    TextArea,
    Select,
    SpinningWheel,
    BoilerPlateHome,
  },
  data() {
    return {
      wheelValues: [],
      answer: " ",
    };
  },
  methods: {
    spinTheWheel() {
      this.$refs.wheel.spin(Math.random() * 5 + 3);
    },
    handleTextArea(text) {
      const values = text
        .split("\n")
        .filter((val) => !/^\s+$/.test(val) && val !== "");
      this.wheelValues = values;
    },
    handleWheelResponse(answer) {
      this.answer = answer.answer;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  &__spiningWheel {
    max-width: 57em;
    width: 100%;

    margin: 1em;
  }

  &__answer {
    font-size: 1em;
  }

  &__textArea {
    height: 37em;
    margin: 1em 0 1em 0;

    max-width: 34em;
    width: 100%;
  }

  &__spin-button {
    margin-bottom: 1em;
  }
}
</style>
