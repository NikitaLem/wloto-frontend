<template>
    <main class="main-card">
      <main-card-header></main-card-header>
      <main-card-body></main-card-body>
      <main-card-footer></main-card-footer>
    </main>
</template>

<script>
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

export default {
  name: 'MainCard',

  components: {
    'main-card-header': Header,
    'main-card-body': Body,
    'main-card-footer': Footer
 }
}
</script>

<style lang="scss" scoped>
  .main-card {
    max-width: 80rem;
    width: 100%;
  }
</style>
