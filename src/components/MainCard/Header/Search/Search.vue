<template>
  <span class="header-search" :class="{ 'header-search_focused': isFocused }">
    <i v-if="!isFocused" class="header-search__icon mdi mdi-magnify mdi-24px"
      @click="$refs.searchInput.focus()"
    ></i>
    <input ref="searchInput" class="header-search__input" placeholder="Поиск по играм" type="text"
      :class="{'finded' : matchedResults.length > 0}"
      @focus="emitFocus(true)"
      @blur="emitFocus(false)"
      v-model="searchText"
      />
    <span v-if="matchedResults.length > 0" class="header-search__suggestions">
      <span v-for="(result, index) in matchedResults" :key="index" class="header-search__suggestions-item">
        <i></i>{{result}}
      </span>
    </span>
  </span>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Search',

  data() {
    return {
      isFocused: false,
      matchedResults: [],
      searchText: '',
    };
  },

  watch: {
    searchText() {
      if (this.searchText) {
        this.makeSearch(this.searchText);
      } else {
        this.cleanReultsArr();
      }
    },
  },

  methods: {
    ...mapActions({
      searchGames: 'games/searchGames',
    }),

    async makeSearch(text) {
      this.matchedResults = await this.searchGames({text});
    },

    emitFocus(status) {
      if (window.innerWidth <= 500 || document.body.offsetWidth <= 500) {
        this.$emit('focused', status);
      }

      this.searchText = '';
      this.isFocused = status;
    },

    cleanReultsArr() {
      this.matchedResults.splice(0, this.matchedResults.length);
    },
  },
}
</script>

<style lang="scss" scoped>
  .header-search {
    position: relative;
    max-width: 32rem;
    width: 50%;
    height: 3.125rem;
    flex-shrink: 1;
    color: #6b9f79;

    @media only screen and (max-width: 500px) {
      width: 3.125rem;
    }

    &_focused {

      @media only screen and (max-width: 500px) {
        width: 100%;
      }

      .header-search__input {
        padding: 0.625rem;
      }
    }
    
    &__icon {
      position: absolute;
      padding: 0.4575rem 0 0 0.8rem;
      color: #6b9f79;
    }

    &__input {
      padding: 0.625rem 0.625rem 0.625rem 2.9rem;
      background-color: #10321e;
      border: 1px solid transparent;
      border-radius: 0.3125rem;
      width: 100%;
      height: 100%;
      color: #fff;
      font-family: 'NotoSans-Regular', Arial, sans-serif;
      line-height: 1.3125rem;
      font-size: 1rem;
      outline: none;

      &:focus {
        border: 1px solid #559369;
        background-color: #1e442c;

        &::placeholder {
          color: transparent;
        }
      }

      @media only screen and (max-width: 800px) {
        padding: 0.625rem;
      }

      &::placeholder {
        color: #6b9f79;

        @media only screen and (max-width: 800px) {
          color: transparent;
        }
      }
    }

    &__suggestions {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid #559369;
      border-top: none;
      border-radius: 0 0 0.3125rem 0.3125rem;
      color: #fff;
      z-index: 1000;

      &-item:last-child {
        border-radius: 0 0 0.3125rem 0.3125rem;
      }

      &-item {
        display: flex;
        align-items: center;
        background-color: #10321e;
        cursor: pointer;
        padding: 1rem;

        i {
          background-color: #fff;
          mask: url('../../../../assets/play_icon.svg') no-repeat center;
          height: 1.125rem;
          width: 1.125rem;
          margin-right: 0.6875rem;
        }

        &:hover {
          color: #77eca2;

          i {
            background-color: #77eca2;
          }
        }
      }
    }
  }

  .finded {
    border-bottom: none !important;
    border-radius: 0.3125rem 0.3125rem 0 0 !important;
  }
</style>
