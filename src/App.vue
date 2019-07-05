<template>
  <div id="app">
    <div class="main-wrapper">
      <main-card></main-card>
    </div>
  </div>
</template>

<script>
import MainCard from './components/MainCard/MainCard';

export default {
  name: 'App',

  components: {
    'main-card': MainCard
  }
}
</script>


<style lang="scss">
  @import "./styles/global.scss";
  @import "./styles/fonts.scss";

  #app {
      font-family: 'NotoSans-Regular', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
    }

  .main-wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-image: url('./assets/background.png');
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
