<template>
  <nav class="tab-bar">
    <div v-for="(tab, index) in tabsStates" :key=index class="tab-container" @click="toggleTab(index)">
      <nav-tab
        :title="tab.title"
        :isActive="tab.isActive"
        :order="tab.order"
        :images="tab.image"
      ></nav-tab>
    </div>
  </nav>
</template>

<script>
import Tab from './Tab/Tab';

export default {
  name: "TabsBar",

  components: {
    'nav-tab': Tab,
  },

  data() {
    return {
      tabsStates: [
        {
          title: 'топ',
          isActive: true,
          order: 'first',
          image: 'top'
        },
        {
          title: 'супер приз',
          isActive: false,
          order: '',
          image: 'super'
        },
        {
          title: 'лото',
          isActive: false,
          order: '',
          image: 'loto'
        },
        {
          title: 'кено',
          isActive: false,
          order: '',
          image: 'keno'
        },
        {
          title: 'скретч лото',
          isActive: false,
          order: 'last',
          image: 'skretch'
        }
      ]
    };
  },

  methods: {
    toggleTab(index) {
      this.tabsStates.forEach((tab, index, arr) => {
        arr[index].isActive = false;
      });

      this.tabsStates[index].isActive = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-bar {
    min-width: 38.75rem;
    display: flex;
    justify-content: space-between;
    background: #153822;
    border-radius: 0.3125rem 0.3125rem 0 0;

    @media only screen and (max-width: 1280px) {
      border-radius: 0;
    }

    @media only screen and (max-width: 450px) {
      min-width: 140%;
    }

    .tab-container:first-child {
      border-radius: 0.3125rem 0 0 0;

      @media only screen and (max-width: 1280px) {
        border-radius: 0;
      }

      > div {
        border-radius: 0.125rem 0 0 0;

        @media only screen and (max-width: 1280px) {
          border-radius: 0;
        }
      }
    }

    .tab-container:last-child {
      border-radius: 0 0.3125rem 0 0;

      @media only screen and (max-width: 1280px) {
        order-radius: 0;
      }

      > div {
        border-radius: 0 0.125rem 0 0;

        @media only screen and (max-width: 1280px) {
          border-radius: 0;
        }
      }
    }

    .tab-container:not(:first-child) {
      border-left: 1px solid #10311d;
    }

    .tab-container {
      width: 20%;
    }
  }
</style>
