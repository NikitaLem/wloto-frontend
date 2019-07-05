<template>
  <footer class="main-footer">
    <div>
      <span class="main-footer__lisence main-footer__item">
        Лицензия
      </span>
      <span class="main-footer__separator">
        |
      </span>
      <span class="main-footer__oferta main-footer__item">
        Оферта
      </span>
    </div>  
  </footer>  
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
  .main-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.375rem;
    color: #89ca9e;

    &__item {
      cursor: pointer;
      
      &:hover {
        color: #fff;
      }
    }
  }
</style>
