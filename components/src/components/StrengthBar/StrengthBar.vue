<template>
  <div
    class="strength-bar"
    @mousedown="click"
    :class="{ 'strength-bar__disabled': disabled }"
  >
    <div class="strength-bar__cursor" ref="cursor"></div>
    <div class="strength-bar__gradiant">
      <div class="strength-bar__color strength-bar__color--green" />
      <div class="strength-bar__color strength-bar__color--yellow" />
      <div class="strength-bar__color strength-bar__color--red" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      required: false,
      default: false,
    },
  },
  methods: {
    click(e) {
      e.preventDefault();

      var cmpt = 0;
      var interval = setInterval(() => {
        cmpt++;
        this.$refs.cursor.style.left = `calc(${0.5 + (6.5 * cmpt) / 100}em)`;

        if (cmpt >= 100) {
          clearInterval(interval);
        }
      }, 10);

      const mouseUp = () => {
        clearInterval(interval);
        document.body.removeEventListener("mouseup", mouseUp);
        this.$emit("result", cmpt / 100);
      };

      document.body.addEventListener("mouseup", mouseUp);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";

.strength-bar {
  height: 2.5em;
  width: 8.5em;
  border-radius: 0.5em;
  background: white;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &__cursor {
    height: 2em;
    width: 1em;
    position: absolute;
    border-radius: 0.5em;
    left: calc(0.5em);

    background: $dark-blue;
  }

  &__gradiant {
    width: calc(100% - 1em);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    overflow: hidden;
  }

  &__color {
    flex-grow: 1;
    height: 1em;

    &--green {
      background: $green;
    }

    &--yellow {
      background: $yellow;
    }

    &--red {
      background: $red;
    }
  }

  &__disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>