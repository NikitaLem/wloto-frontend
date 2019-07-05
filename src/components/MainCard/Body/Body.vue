<template>
  <section class="main-body">
    <div class="tabs-bar-container">
      <tabs-bar></tabs-bar>
    </div>
    <games-panel></games-panel>
  </section>
</template>

<script>
import TabsBar from './TabsBar/TabsBar';
import GamesPanel from './GamesPanel/GamesPanel';

export default {
  name: 'Body',
  
  components: {
    "tabs-bar": TabsBar,
    "games-panel": GamesPanel,
  },

  data() {
    return {

    };
  },
}
</script>

<style lang="scss" scoped>
  .main-body {
    overflow-x: hidden;
    width: 100%;
    background-color: #eaa34e;
    border-radius: 0.3125rem 0.3125rem 0.3125rem 0.3125rem;
    border: 2px solid #10311d;

    @media only screen and (max-width: 1280px) {
      border-radius: 0;
    }
  }

  .tabs-bar-container {
    overflow-x: auto;
  }
</style>
