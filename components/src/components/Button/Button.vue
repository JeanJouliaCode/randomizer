<template>
  <button :class="classes" @click="onClick"></button>
</template>

<script>
export default {
  props: {
    label: String,
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
.my-button {
  background: black;
  color: white;
  border-radius: 50px;
  padding: 0 20px;
  line-height: 35px;
  border: unset;

  &--disabled {
    background: grey;
    pointer-events: none;
  }
}
</style>

