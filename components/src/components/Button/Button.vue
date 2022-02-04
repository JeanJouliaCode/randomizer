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

  &--disabled {
    background: $light-green;
    pointer-events: none;
  }
}
</style>

