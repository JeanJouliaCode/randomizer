<template>
  <BoilerPlateHome>
    <template #header>
      <h1>Random wheel</h1>
      <span class="home__answer">{{ answer }}</span>
      <img
        v-if="showPartyFavors"
        src="@/assets/partyTime.gif"
        alt=""
        class="home__party_favors"
      />
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
      <div class="home__form">
        <Select
          :options="selectOption"
          v-model="selectedOption"
          class="home__selecy"
        />
        <TextArea class="home__textArea" @input="handleTextArea" />
        <Button
          class="home__spin-button"
          label="Spin the wheel"
          :disabled="buttonDisabled"
          @click="spinTheWheel"
        />
      </div>
    </template>
  </BoilerPlateHome>
</template>

<script>
import { Button, TextArea, Select, SpinningWheel } from "randomizer-components";
import BoilerPlateHome from "@/components/BoilerPlateHome.vue";
import API from "@/services/api.js";

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
      selectOption: ["Regular", "API"],
      selectedOption: { index: 0, value: "Regular" },
      buttonDisabled: false,
      showPartyFavors: false,
    };
  },
  methods: {
    async spinTheWheel() {
      let randomNumer = 0;
      this.buttonDisabled = true;
      switch (this.selectedOption.value) {
        case "Regular": {
          randomNumer = this.getNumberOfTurn(Math.random());
          break;
        }
        case "API": {
          const response = await API.getRandomNumberFromAPI();
          if (response.success) {
            randomNumer = this.getNumberOfTurn(response.data);
            break;
          }
          this.buttonDisabled = false;
          return;
        }
        default:
          {
            this.buttonDisabled = false;
          }
          return;
      }

      this.$refs.wheel.spin(randomNumer);
    },
    handleTextArea(text) {
      const values = text
        .split("\n")
        .filter((val) => !/^\s+$/.test(val) && val !== "");
      this.wheelValues = values;
    },
    getNumberOfTurn(number) {
      return number * 5 + 3;
    },
    handleWheelResponse(response) {
      this.answer = response.answer;
      this.buttonDisabled = false;
      this.displayPartyFavors();
    },
    displayPartyFavors() {
      this.showPartyFavors = true;
      setTimeout(() => (this.showPartyFavors = false), 2000);
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
    width: 100%;
  }

  &__spin-button {
    margin-bottom: 1em;
  }

  &__form {
    max-width: 34em;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__party_favors {
    position: absolute;
    top: 0px;
  }
}
</style>
