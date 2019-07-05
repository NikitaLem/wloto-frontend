<template>
  <div class="games-panel">
    <span class="games-panel__item" v-for="index in 20" :key="index">
      <!-- <img class="games-panel__item" src='../../../../assets/games/50dragons_normal.png' alt="game's_logo"> -->
    </span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'; 

export default {
  name: 'GamesPanel',

  data() {
    return {

    };
  },

  computed: {
    ...mapGetters({
      games: 'games/games',
    })
  }
}
</script>

<style lang="scss" scoped>
  .games-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, 19.75rem);
    grid-gap: 4.0625rem;
    justify-content: center;
    padding: 3.75rem 1rem 6.8125rem;

    @media only screen and (max-width: 750px) {
      grid-template-columns: repeat(auto-fit, 17,775rem);
      grid-gap: 1rem 0;
    }

    &__item {
      width: 19.75rem;
      height: 11.4375rem;
      border: 1px solid #ffda6d;
      border-radius: 0.3125rem;
      padding: 1px;
      box-shadow: 0 3px 0 0 #906430;
      cursor: pointer;
      background: url('../../../../assets/games/50dragons_normal.png');

      @media only screen and (max-width: 750px) {
        transform: scale(0.9);
      }

      &:hover {
        background: url('../../../../assets/games/50dragons_hover.png');
      }
    }
  }
</style>
