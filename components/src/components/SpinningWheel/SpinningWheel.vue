<template>
  <svg
    viewBox="-1 -1 2 2"
    :style="sassVariable"
    :class="{ rotate: this.spinning }"
  ></svg>
</template>

<script>
export default {
  mounted() {
    this.drawSlices(this.values);
  },
  props: {
    values: {
      type: Array,
      default: () => [""],
    },
    colors: {
      type: Array,
      default: () => ["#3D405B", "#81B29A", "#F2CC8F", "#E07A5F"],
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
        "--endTurn": `rotate(${this.turns}turn)`,
        "--animation": `${this.getAnimationTime()}s`,
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
    getAnimationTime() {
      return this.turns * (this.turns > 3 ? 0.5 : 0.7);
    },
    getColor(index) {
      if (
        this.colors[index % this.colors.length] === this.colors[0] &&
        index != 0
      )
        return this.colors[1];
      return this.colors[index % this.colors.length];
    },
    drawSlice(startPercentage, endPercentage, color, text) {
      const svgEl = document.querySelector("svg");

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
      svgEl.appendChild(pathEl);
      this.drawText(text, (startPercentage + endPercentage) / 2);
    },

    drawText(val, angle) {
      const svgEl = document.querySelector("svg");
      const degAngle = 360 * angle;

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttributeNS(null, "font-size", "0.2");
      text.setAttribute("x", "0");
      text.setAttribute("y", "0");
      text.setAttribute("fill", "#FFF");
      text.setAttribute("text-anchor", "start");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("transform", `rotate(${degAngle}) translate(0.2, 0) `);
      text.textContent = val;
      svgEl.appendChild(text);
    },

    spin(value) {
      this.turns = value;
      this.spinning = false;
      setTimeout(() => {
        this.spinning = true;
      }, 100);

      setTimeout(() => {
        const indexAnswer = this.getIndexAnswer();
        this.$emit("answer", {
          answer: this.values[indexAnswer],
          index: indexAnswer,
        });
        console.log(this.values[indexAnswer]);
      }, this.getAnimationTime() * 1000);
    },

    getIndexAnswer() {
      const answerAngle = this.turns % 1;
      const answerSize = this.values.length == 0 ? 0 : 1 / this.values.length;
      return this.values.length - Math.ceil(answerAngle / answerSize);
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  min-height: 100px;
  min-width: 100px;
  max-height: 600px;
  max-width: 600px;
}

.rotate {
  animation: var(--animation) ease-out rotation forwards;
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