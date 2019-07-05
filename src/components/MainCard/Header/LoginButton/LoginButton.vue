<template>
  <button type="button" class="header__button">
    <span>Войти / Зарегистрироваться</span>
    <span class="button-icon"></span>
  </button>
</template>

<script>
export default {
  name: 'LoginButton'  
}
</script>

<style lang="scss" scoped>
  .header__button {
    font-family: 'NotoSans-Regular', Arial, sans-serif;
    font-size: 1.125rem;
    width: calc(20rem);
    border-radius: 0.3125rem;
    height: 3.125rem;
    line-height: 1.6675rem;
    color: #061a0e;
    background: linear-gradient(#63c97d, #217330);
    border: 1px solid #71ac84;
    cursor: pointer;

    @media only screen and (max-width: 870px) {
      width: 5.75rem;
    }

    &:hover {
      background: linear-gradient(#66e788, #288d3b);
    }

    &:active {
      background: linear-gradient(#278c3a, #66e687);
    }

    &:disabled {
      background: #3b694a;
      border-color: #10311e;
      cursor: initial;
    }

    span {
      @media only screen and (max-width: 870px) {
        display: none;
      }
    }

    .button-icon {
      display: none;
      width: 1.875rem;
      height: 2.1875rem;
      background-image: url('../../../../assets/mobile_login.png');
      background-repeat: no-repeat;
      margin-top: 0.4rem;

      @media only screen and (max-width: 870px) {
        display: inline-block;
      }
    }
  }
</style>
