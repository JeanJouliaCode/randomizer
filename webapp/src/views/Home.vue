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
        <TextArea
          class="home__textArea"
          @input="handleTextAreaChange"
          :content="testAreaContent"
        />
        <div class="home__action-container">
          <Button
            class="home__spin-button"
            label="Spin the wheel"
            :disabled="buttonDisabled"
            @click="spinTheWheel"
          />
          <Button
            class="home__spin-button"
            label="Remove answer"
            :disabled="buttonDisabled || answer === ''"
            @click="removeAnswer"
            :secondary="true"
          />
        </div>
      </div>
    </template>
  </BoilerPlateHome>
</template>

<script>
import { Button, TextArea, Select, SpinningWheel } from "randomizer-components";
import BoilerPlateHome from "@/components/BoilerPlateHome.vue";
import API from "@/services/api.js";
import { setTextAreaValue, getTextAreaValue } from "@/services/localStorage.js";

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
      answer: "",
      answerIndex: null,
      selectOption: ["Regular", "API"],
      selectedOption: { index: 0, value: "Regular" },
      buttonDisabled: false,
      showPartyFavors: false,
      testAreaContent: "",
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
    handleTextAreaChange(text) {
      this.testAreaContent = text;

      const values = text
        .split("\n")
        .filter((val) => !/^\s+$/.test(val) && val !== "");
      this.wheelValues = values;
      setTextAreaValue(text);
    },
    getNumberOfTurn(number) {
      return number * 5 + 3;
    },
    handleWheelResponse(response) {
      this.answer = response.answer;
      this.answerIndex = response.index;
      this.buttonDisabled = false;
      this.displayPartyFavors();
    },
    removeAnswer() {
      const lines = this.testAreaContent.split("\n");
      let lineFound = false;
      let newString = null;
      let countMeaningFullLine = 0;
      lines.forEach((line) => {
        if (!/^\s+$/.test(line) && line != "") countMeaningFullLine++;

        if (countMeaningFullLine - 1 !== this.answerIndex || lineFound) {
          newString = newString === null ? line : `${newString}\n${line}`;
        } else {
          lineFound = true;
        }
      });
      this.testAreaContent = newString;
      this.answer = "";
    },
    displayPartyFavors() {
      this.showPartyFavors = true;
      setTimeout(() => (this.showPartyFavors = false), 2000);
    },
  },
  mounted() {
    const storedText = getTextAreaValue();
    this.testAreaContent = storedText ?? "";
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

  &__action-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
