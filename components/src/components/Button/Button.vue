<template>
  <button :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },

  computed: {
    classes() {
      return {
        "my-button": true,
        "my-button--disabled": this.disabled,
        "my-button__secondary": this.secondary,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";

.my-button {
  background: $green;
  color: white;
  border-radius: 0.5em;
  padding: 0 1.2em;
  line-height: 2.2em;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__secondary {
    background: $red;
  }
}
</style>

