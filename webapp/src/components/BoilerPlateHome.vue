<template>
  <div class="home">
    <div class="home__header">
      <slot name="header"></slot>
    </div>
    <div class="home__main">
      <slot name="main"></slot>
    </div>
    <div class="home__form">
      <slot name="form"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 17em 4fr 1fr;

  &__header {
    grid-column: 1 / 3;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3em;

    @media (max-width: 1144px) {
      font-size: 2em;
    }
  }

  &__main {
    grid-column: 1 / 2;
    grid-row: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1144px) {
      grid-column: 1 / 3;
      grid-row: 2;
    }
  }

  &__form {
    grid-column: 2 / 3;
    grid-row: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1144px) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
  }
}
</style>