<template>
  <nav class="navigation">
    <ul class="navigation-tab" v-if="tab">
      <li v-for="(item,index) in $router.options.routes"  v-on:click="updateSelected(item)" v-bind:class="{'current': selectedTab === item}">
        {{item.meta.title}}
      </li>
    </ul>

    <ul v-else>
      <li v-for="routes in $router.options.routes">
        <router-link v-bind:key="routes.meta.id" :to="`${routes.path}`">{{routes.meta.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    props: {
      tab: {
        type: Boolean,
        required: false
      },
    },

    data() {
      return {
        selectedTab: 0,
        tabFunction: this.tab

      }
    },
    methods: {
      updateSelected: function(item) {
        this.selectedTab = item;
        var s = Snap('svg');
        var scrollWidth = s.select('#' + this.selectedTab.name).getBBox().x;

        $('.main').animate({
          scrollTop: scrollWidth
        }, 400)

      },
      init() {
      }
    },
  }
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    bottom:  35px;
    left: 35px;
  }

  .navigation ul {
    margin: 0;
  }

  .navigation li,
  .navigation a {
    display: inline-block;
    color: #003a52;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0 20px 0 0;
    cursor: pointer;
    text-decoration: none;
  }

  .navigation-tab li:before,
  .navigation a:before {
    content: '';
    width: 15px;
    height: 15px;
    display: inline-block;
    border-radius: 100%;
    border: 2px solid #003a52;
    margin: 0 7px 0 0;
    padding: 0;
  }

  .navigation a.router-link-exact-active,
  .navigation-tab li:hover,
  .navigation-tab li.current,
  .navigation a.current,
  .navigation a:hover {

  &:before {
     border-color: #FF4141;
     background: #FF4141;
   }
  }
</style>
