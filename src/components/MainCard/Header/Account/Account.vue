<template>
  <div class="account" :class="{ account_active: isActive}">
    <div class="account-card" @click="isActive = !isActive">
      <div class="account-card__info">
        <span class="account-card__info-item account-card__info-item_tel">
          {{telephoneNumber}}
        </span>
        <span class="account-card__info-separator"></span>
        <span class="account-card__info-item account-card__info-item_cash">
          {{`${cash}${currency}`}}
        </span>
      </div>
      <div class="account-card__arrow"></div>
    </div>
    <div class="account__options">
      <span class="account__options-item">Настройки</span>
      <span class="account__options-item">Пополнить баланс</span>
      <span class="account__options-item">Выйти</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',

  props: {

  },

  data() {
    return {
      telephoneNumber: '+7 777 77777777',
      cash: '12000',
      currency: 'KZT',
      isActive: false,
    };
  }
}
</script>

<style lang="scss" scoped>
  .account {
    position: relative;
    width: 28.875rem;

    @media only screen and (max-width: 720px) {
      width: 8.7375rem;
    }

    &__options {
      display: none;
      width: 15.8125rem;
      background: #925d17;
      border-radius: 0.3125rem;
      border: 1px solid #c38335;
      position: absolute;
      right: 0;
      top: calc(100% + 0.25rem); 
      z-index: 1000;
      padding: .6rem 0;

      &-item {
        width: 100%;
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1.125rem;
        color: #f9dd98;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
    }

    &-card {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-height: calc(2.5625rem - 2 * 0.3125rem);
      border-radius: 0.3125rem;
      background-color: #df9a41;
      border: 1px solid #c38335;
      padding: 0.3125rem;
      box-shadow: 0 0 3px 3px #0f2c1b;
      cursor: pointer;

      &:hover {
        box-shadow: none;
      }

      @media only screen and (max-width: 720px) {
        padding: 0.1875rem;
        min-height: 3.125rem;
      }

      &__arrow { 
        background: url('../../../../assets/arrow_down.png') 50% 50% no-repeat;
        flex: 1;
      }

      &__info {
        width: 88.96%;
        background: linear-gradient(#191919, #030304);
        border-radius: 0.1875rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 0 0 #000 inset;

        @media only screen and (max-width: 720px) {
          flex-direction: column;
          justify-content: center;
          width: 75.5%;
        }

        &-item {
          flex-basis: 50%;
          text-align: center;
          padding: 0.345rem;

          @media only screen and (max-width: 720px) {
            padding: 0.1rem;
          }

          &_tel {
            color: #d2cbc3;

            @media only screen and (max-width: 720px) {
              flex-basis: 42%;
              font-size: 0.75rem;
              padding-bottom: 0;
            }
          }

          &_cash {
            font-size: 1.125rem;
            color: #df9a41;

            @media only screen and (max-width: 720px) {
              flex-basis: 44%;
              font-size: 0.75rem;
              padding-top: 0;
              padding-bottom: 0;
              margin-top: -3px;
            }
          }
        }

        &-separator {
          background: #df9a41;
          height: 82.3%;
          width: 1px;

          @media only screen and (max-width: 720px) {
            height: 0;
            width: 82.3%;
          }
        }
      }
    }

    &_active {

      .account__options {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      .account-card {
        background: linear-gradient(#a96a18, #df9a45);

        &__info {

          &-separator {
            background: linear-gradient(#a96a18, #df9a45);
          }
        }
      }
    }
  }
</style>
