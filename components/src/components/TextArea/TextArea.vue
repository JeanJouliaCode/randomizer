<template>
  <textarea @input="handleChange"></textarea>
</template>

<script>
export default {
  methods: {
    handleChange({ target }) {
      this.$emit("input", target.value);
    },
  },
};
</script>

<style scoped lang="scss">
textarea {
  min-width: 12em;
  min-height: 12em;
  border-radius: 8px;
  resize: none;
  border: none;
  padding: 1em;

  &:focus {
    outline: none !important;
    border: 1px solid rgb(236, 236, 236);
  }
}
</style>