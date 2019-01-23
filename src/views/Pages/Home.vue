<template>

  <div class="page">
    <div class="main-wrapper">
      <div class="main" ref="content">
        <div class="container">
          <div class="box">
            <h1>
              <span>{{ $route.meta.metatitle }}</span>
              {{ $route.meta.title }}
            </h1>

            <!--<a href="#">{{selectedTab.name}}</a>-->
            <svghome />
          </div>
        </div>
      </div>
      <!--<navigation tab></navigation>-->
      <navigation />
    </div>
  </div>


</template>
<script>
  /* Horizontal Scroll - https://codepen.io/lemmin/pen/xRyXMZ */
import svghome from '@/components/svghome';
import Navigation from "@/components/navigation/navigation";

export default {
  components: {
    Navigation,
    svghome
  },

  data() {
    return {
    }
  },
  methods: {
    init() {
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');

  .main .box {
  // width:200vw; for horizontal scroll
    width:100vw;
    height:100vh;
    display:inline-block;
    position:relative;
    padding: 30px;
  }

  .main .box > div {
    width: 100px;
    height: 100px;
    font-size: 96px;
    color:#FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    line-height:.7;
    font-weight:bold;
  }

  .main {
    overflow-y:scroll;
    overflow-x:hidden;
    transform: rotate(270deg) translateX(-100%);
    transform-origin: top left;
    position:absolute;
    width:100vh;
    height:100vw;
  }

  .container {
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
    white-space: nowrap;
    font-size: 0;

  svg {
    width: 100%;
    height: 100%;
  }
  }

  .page h1 {
    position: absolute;
    top:  50px;
    left: 30px;
    z-index: 1;
    color: #003a52;
    font-size: 80px;
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 110%;
    margin: 0;

  span {
    display: block;
    font-weight: 300;
  }
  }



</style>
