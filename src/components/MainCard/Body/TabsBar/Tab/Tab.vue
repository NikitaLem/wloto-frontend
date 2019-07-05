<template>
  <div class="body-tab" 
    :class="{
      'active': isActive,
      'body-tab_first': order === 'first' && isActive,
      'body-tab_last': order === 'last' && isActive
    }"
  >
    <!-- <div class="body-tab__image"
      :style="{ 'background-image': `url(${getImageUrl(images)})` }"
    >
    </div> -->
    <span class="body-tab__title" :data-text="title">
      {{title}}
    </span>
    <!-- <img alt="games-tab" v-for="(image, index) in images"
      :key="index"
      :src="getImageUrl(image)"
    > -->
  </div>
</template>

<script>
export default {
  name: 'Tab',

  props: {
    title: {
      type: String,
      default: ''
    },

    isActive: {
      type: Boolean,
      default: false
    },

    order: {
      type: String,
      default: ''
    },

    images: {
      type: String,
      default: ''
    }
  },

  methods: {
    getImageUrl(image) {
      const pic = this.isActive ? `${image}_chosed` : `${image}_normal`; 
      return `./img/${pic}.png`;
    }
  },
}
</script>

<style lang="scss" scoped>
  .body-tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5.25rem;
    width: 100%;
    background: linear-gradient(#153822, #346143);
    border-bottom: 1px solid #10311d;
    cursor: pointer;
    position: relative;
    z-index: 1;
    padding: 0 0.625rem;

    &:hover {
      background: linear-gradient(#19522f, #398252);
    }

    @media only screen and (max-width: 560px) {
      height: 3.1875rem
    }

    &__image {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;

      @media only screen and (max-width: 620px) {
        background-size: 50%;
      }
    }

    img {
      @media only screen and (max-width: 800px) {
        transform: scale(0.8);
      }

      @media only screen and (max-width: 560px) {
        transform: scale(0.6);
      }
    }
  }

  .body-tab__title {
    text-transform: uppercase;
    font-family: 'Tahoma', Arial, sans-serif;
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 1.8rem;
    // color: #bd7d22;
    // text-shadow: 0 2px 2px #000;
    background-image: -webkit-linear-gradient(#ca974e, #bf8126);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #d5c037;
    letter-spacing: .05rem;
    text-align: center;
    position: relative;

    &::after {
      background: none;
      content: attr(data-text);
      left: 0;
      position: absolute;
      text-shadow: 0 2px 2px #000;
      top: 0;
      z-index: -1;
    }

    @media only screen and (max-width: 800px) {
      font-size: 1.6rem;
      line-height: 1.55rem;
    }

    @media only screen and (max-width: 560px) {
      font-size: 1.2rem;
      line-height: 1.3rem;
    }

    @media only screen and (max-width: 375px) {
      font-size: .9rem;
      line-height: 1rem;
      -webkit-text-stroke: initial;
    }
  }

  .active {
    background: #eaa34e;
    border-radius: 0.3125rem 0.3125rem 0 0 !important;
    border-bottom: 1px solid #eaa34e;

    &:hover {
      background: #eaa34e;
      border-radius: 0.3125rem 0.3125rem 0 0 !important;
      border-bottom: 1px solid #eaa34e;
    }
  
    .body-tab__title {
      // color: #fefe55;
      background-image: -webkit-linear-gradient(#ffffaa, #fefe58);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px #907e2a;

      &::after {
        background: none;
        content: attr(data-text);
        left: 0;
        position: absolute;
        text-shadow: 0 2px 2px #000;
        top: 0;
        z-index: -1;
      }
    }
  }

  .body-tab_first {

    @media only screen and (max-width: 1280px) {
      border-radius: 0 0.3125rem 0 0 !important;
    }

    &:hover {

      @media only screen and (max-width: 1280px) {
        border-radius: 0 0.3125rem 0 0  !important;
      }
    }
  }

  .body-tab_last {

    @media only screen and (max-width: 1280px) {
      border-radius: 0.3125rem 0 0 0  !important;
    }

    &:hover {

      @media only screen and (max-width: 1280px) {
        border-radius: 0.3125rem 0 0 0  !important;
      }
    }
  }
</style>
