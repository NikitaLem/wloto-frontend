<template>
    <header class="main-card__header" :class="{ 'searching': isSearching }">
      <img v-if="!isSearching" class="header__logo" src="../../../assets/logotype.png" alt="logo">
      <div class="header__tools">
        <header-search
          @focused="expandSearch($event)"
        ></header-search>
        <header-login class="header__tools_right" v-if="!isSearching" style="display: none"></header-login>
        <header-account class="header__tools_right" v-if="!isSearching"></header-account>
      </div>
    </header>
</template>

<script>
import Search from './Search/Search';
import LoginButton from './LoginButton/LoginButton';
import Account from './Account/Account';

export default {
  name: 'Header',

  components: {
    'header-search': Search,
    'header-login': LoginButton,
    'header-account': Account
  },

  data() {
    return {
      isSearching: false,
    };
  },

  methods: {
    expandSearch(status) {
      this.isSearching = status;
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5.375rem;
    padding: 0;
  }

  .header__logo {
    margin-left: 5.8%;

    @media only screen and (max-width: 1280px) {
      margin-left: 6.25%;
    }

    @media only screen and (max-width: 480px) {
      width: 4.9375rem;
      height: 3.25rem;
    }

    @media only screen and (max-width: 370px) {
      margin-left: 1%;
    }

    @media only screen and (max-width: 350px) {
      margin-right: 0;
    }
  }

  .header__tools {
    width: 79.7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 63.8125rem;

    @media only screen and (max-width: 870px) {
      justify-content: flex-end;
      width: 100%;
    }

    &> *:first-child {
      @media only screen and (max-width: 1280px) {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
      }

      @media only screen and (max-width: 350px) {
        margin-right: 0.35rem;
        margin-left: 0;
      }
    }

    &_right {

      @media only screen and (max-width: 1280px) {
        margin-right: 0.6rem;
      }
    }
  }

  .searching {

    .header__tools {

      &> *:first-child {
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
</style>
