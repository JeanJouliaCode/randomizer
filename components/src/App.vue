<template>
  <div>
    <StrengthBar />
  </div>
</template>

<script>
import StrengthBar from "@/components/StrengthBar/StrengthBar.vue";

export default {
  components: {
    StrengthBar,
  },
};
</script>

<style>
body {
  background: gainsboro;
  width: 100vw;
  height: 100vh;
}
</style>