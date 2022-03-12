<template>
  <div class="spinning-wheel">
    <svg
      viewBox="-1 -1 2 2"
      :style="sassVariable"
      class="spinning-wheel__wheel"
      :class="{ 'spinning-wheel__wheel_rotating': this.spinning }"
      @click="spinOnClick"
    ></svg>
    <svg class="spinning-wheel__arrow">
      <path
        d="M6.50581 32.1376C-0.98699 29.8024 -0.98699 19.1976 6.50581 16.8624L56.3696 1.32146C61.5198 -0.283703 66.75 3.56453 66.75 8.95911V40.0409C66.75 45.4355 61.5198 49.2837 56.3696 47.6785L6.50581 32.1376Z"
        fill="#FFF"
      />
    </svg>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawSlices(this.values);
  },
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    colors: {
      type: Array,
      default: () => ["#3D405B", "#81B29A", "#F2CC8F", "#E07A5F"],
    },
    canBeClicked: {
      type: Boolean,
      default: false,
    },
    font: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      angle: 0,
      turns: 0,
      spinning: false,
    };
  },
  computed: {
    sassVariable() {
      return {
        "--endTurn": `rotate3d(0,0,1,${this.turns}turn)`,
        "--animation": `${this.getAnimationTime(this.turns)}s`,
      };
    },
  },
  methods: {
    getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);

      return [x, y];
    },
    drawSlices(values) {
      if (!values || values.length === 0 || values.length === 1) {
        let text = "";
        if (values?.length === 1) {
          text = values[0];
        }

        this.drawSlice(0, 0.4, this.colors[0], text);
        this.drawSlice(0.3, 0.7, this.colors[0], "");
        this.drawSlice(0.6, 1, this.colors[0], "");
        return;
      }
      values.forEach((value, index) => {
        const startSlice = index == 0 ? 0 : (1 / values.length) * index;
        const endSlice = (1 / values.length) * (index + 1);
        this.drawSlice(
          startSlice,
          endSlice,
          this.getColor(index, values.length),
          value
        );
      });
    },
    getAnimationTime(turns) {
      return turns * (turns > 3 ? 0.5 : 0.7);
    },
    getColor(index) {
      if (
        this.colors[index % this.colors.length] === this.colors[0] &&
        index === this.values.length - 1
      )
        return this.colors[1];
      return this.colors[index % this.colors.length];
    },
    drawSlice(startPercentage, endPercentage, color, text) {
      const svgEl = document.querySelector(".spinning-wheel__wheel");

      const [startX, startY] = this.getCoordinatesForPercent(startPercentage);
      const [endX, endY] = this.getCoordinatesForPercent(endPercentage);

      // if the slice is more than 50%, take the large arc (the long way around)
      const largeArcFlag = startPercentage - endPercentage > 0.5 ? 1 : 0;

      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        `L 0 0`, // Line
      ].join(" ");

      const pathEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      pathEl.setAttribute("d", pathData);
      pathEl.setAttribute("fill", color);
      if (svgEl) svgEl.appendChild(pathEl);

      this.drawText(text, (startPercentage + endPercentage) / 2);
    },

    drawText(val, angle) {
      const svgEl = document.querySelector(".spinning-wheel__wheel");
      const degAngle = 360 * angle;

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttributeNS(null, "font-size", "0.1");
      text.setAttribute("x", "0");
      text.setAttribute("y", "0");
      text.setAttribute("fill", "#FFF");
      text.setAttribute("text-anchor", "end");
      text.setAttribute("font-family", this.font ? this.font : "monospace");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("transform", `rotate(${degAngle}) translate(0.9, 0) `);
      text.textContent = val;
      if (svgEl) svgEl.appendChild(text);
    },

    spin(value) {
      this.turns = value;
      this.spinning = false;
      setTimeout(() => {
        this.spinning = true;
      }, 100);

      setTimeout(() => {
        const indexAnswer = this.getIndexAnswer(this.turns);
        this.$emit("answer", {
          answer: this.values[indexAnswer],
          index: indexAnswer,
        });
      }, this.getAnimationTime(this.turns) * 1000);
    },

    spinOnClick() {
      if (this.canBeClicked) {
        this.spin(Math.random() * 6 + 2);
      }
    },

    getIndexAnswer(turns) {
      const answerAngle = turns % 1;
      const answerSize = this.values.length == 0 ? 0 : 1 / this.values.length;
      return this.values.length - Math.ceil(answerAngle / answerSize);
    },
  },
  watch: {
    values(value) {
      this.drawSlices(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.spinning-wheel {
  position: relative;
  min-height: 100px;
  min-width: 100px;
  max-height: 600px;
  max-width: 600px;

  &__wheel {
    width: 100%;

    &_rotating {
      animation: var(--animation) ease-out rotation forwards;
    }
  }

  &__arrow {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    right: -50px;

    width: 69px;
    height: 48px;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: var(--endTurn);
  }
}
</style>