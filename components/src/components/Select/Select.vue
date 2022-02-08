<template>
  <select @input="handleInput" class="select">
    <option :value="index" v-for="(option, index) in options" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleInput(val) {
      this.$emit("input", {
        value: this.options[val.target.value],
        index: parseInt(val.target.value),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  background: chartreuse;
  border-radius: 0.5em;
  padding: 0 1.2em;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
}
</style>