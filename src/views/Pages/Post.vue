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
            <!--<svg id="svg"></svg>-->

            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">
              {{ error }}
            </div>
            <transition name="slide">
              <!--
                giving the post container a unique key triggers transitions
                when the post id changes.
              -->
              <div v-if="post" class="content" :key="post.id">
                <h2>{{ post.id }}  {{ post.title }}</h2>
                <p>{{ post.body }}</p>


              </div>
            </transition>
            <svg id="svg">
            </svg>




            <ul>
              <li><router-link to="/">/</router-link></li>
              <li><router-link to="/post/1">/post/1</router-link></li>
              <li><router-link to="/post/2">/post/2</router-link></li>
              <li><router-link to="/post/schule">/post/3</router-link></li>
              <li><router-link to="/post/berufsausbildung">/post/3</router-link></li>
            </ul>

          </div>
        </div>
      </div>
      <navigation />
    </div>
    <modal />
  </div>

</template>

<script>
  import { getPost } from './api'
  import Navigation from "@/components/navigation/navigation";

  /* https://github.com/vuejs/vue-router/blob/dev/examples/data-fetching */

  export default {
    components: {
      Navigation
    },
    data () {
      return {
        loading: false,
        post: null,
        page: this.$route.meta.id,
        error: null
      }
    },
    created () {
      console.log($('svg'));
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null;
        this.loading = true;
        getPost(this.$route.params.id, (err, post) => {
          this.loading = false;
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post;

            /* ***************************************************** */
            var w = window,
              d = document,
              e = d.documentElement,
              g = d.getElementsByTagName('body')[0],
              windowWidth = w.innerWidth || e.clientWidth || g.clientWidth,
              windowHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;

            var strokeWidth = 1;
            var strokeColor = '#FF4141';
            var num = 1.81;

            Snap.plugin( function(Snap, Element, Paper) {
              Paper.prototype.circlePath = function(cx, cy, rx, ry) {
                var p = 'M' + (cx - rx) + ',' + cy;
                p += 'C' + (cx - rx) + ',' + (cy - ry / num) + ',' + (cx - rx / num) + ',' + (cy - ry) + ',' + (cx) + ',' + (cy - ry);
                p += 'C' + (cx + rx / num) + ',' + (cy - ry) + ',' + (cx + rx) + ',' + (cy - ry / num) + ',' + (cx + rx) + ',' + (cy);
                p += 'C' + (cx + rx)  + ',' + (cy + ry / num) + ',' + (cx + rx / num) + ',' + (cy + ry) + ',' + (cx) + ',' + (cy + ry);
                p += 'C' + (cx - rx / num) + ',' + (cy + ry) + ',' + (cx - rx) + ',' + (cy + ry / num) + ',' + (cx - rx) + ',' + (cy);
                p += 'Z';

                return this.path(p, cx, cy);
              };
            });
            /* ***************************************************** */

            var s = Snap('svg');
            s.clear();

            var pageID = this.$route.meta.id;
            var itemlength = this.$router.options.routes[pageID].children.length;
            var path = s.circlePath(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/4).attr({fill: "none", stroke: "red"});
            var pathLength = path.getTotalLength();
            var pathLength2 = pathLength/itemlength;

            this.post.children.map((el, i) => {
              var svgName = el.meta.svg;
              var k = i * pathLength2;
              var itemNamePath = el.meta.idName;
              var movePoint2 = path.getPointAtLength(k);
              var name = String('#' + itemNamePath);

              var areaItem = s.group().append(Snap.parse(svgName)).attr({id: itemNamePath, class: 'area-item'});
              var x = movePoint2.x - (s.select(name).getBBox().width/2);
              var y = movePoint2.y - (s.select(name).getBBox().height/2);
              // var pos = 't' + j * windowWidth/(itemlength/2) + ',' + el.meta.cy; // längst // Backup

              areaItem.transform('t' + x + ',' + y);
            });

            var areaItem = s.selectAll('.area-item');
            var areaGroup = s.group(areaItem).attr({class: 'area-group' });

            this.post.children.map((el, i) => {

              if (el.meta.pathes) {
                var startAreaItemPX = s.select('#' + el.meta.idName).getBBox().x + 75;
                var startAreaItemPY = s.select('#' + el.meta.idName).getBBox().y + 75;

                el.meta.pathes.map((el) => {
                  var targetAreaPX =  s.select('#' + el).getBBox().x + 75;
                  var targetAreaPY =  s.select('#' + el).getBBox().y + 75;

                  s.line(startAreaItemPX, startAreaItemPY, targetAreaPX, targetAreaPY).attr({stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: 4, class: 'line-item'});
                });
              }
            });

            var linesItem = s.selectAll('.line-item');
            s.group(linesItem).attr({class: 'line-group' });
            s.append(areaGroup);

            this.post.children.map((el, i) => {
              var itemName = el.meta.idName;
              var _itemName = s.select('#' + el.meta.idName);

              if (el.children) {
                var _areaNav = s.select('#' + el.meta.idName + '-navigation');

                el.children.map((el, i) => {
                  var j = i * 100;
                  var moveToPoint = Snap.path.getPointAtLength(_areaNav, j);
                  var x = parseInt(moveToPoint.x) + parseInt(el.meta.cx);
                  var y = parseInt(moveToPoint.y) + parseInt(el.meta.cy);

                  s.text(x, y, el.meta.title).attr({
                    fontSize: 20,
                    fill: '#003a52',
                    class: itemName + '-navigation-item',
                    id: el.name + '-nav',
                    cursor: 'pointer'
                  });

                  s.select('#' + el.name + '-nav').click(function() {
                    VoerroModal.show({
                      title: el.meta.title,
                      body: 'Textinhalt',
                      // buttons: [
                      //   {
                      //     text: 'Ok',
                      //     handler: () => {
                      //       alert('You pressed Ok');
                      //     }
                      //   },
                      // ]
                    });
                  });

                  s.select('#' + el.name + '-nav').mouseover(function() {
                    this.animate({
                      fill: strokeColor
                    }, 600);
                  }).mouseout(function() {
                    this.animate({
                      fill: "#003a52"
                    }, 600);
                  });


                });

                var itemNavigation = s.selectAll('.' + itemName + '-navigation-item');
                var itemNavigationGroup = s.group(itemNavigation).attr({id: itemName + '-navigation-group', class: 'area-navigation-group'});
                itemNavigationGroup.appendTo(_itemName);
              }

              _itemName.mouseover(function() {
                this.select('path').animate({
                  fill: '#B1C3C7'
                }, 600);

                if (this.select('#' + itemName + '-navigation-group')) {
                  this.select('#' + itemName + '-navigation-group').addClass('is-active');
                }
              }).mouseout(function() {
                this.select('path').animate({
                  fill: "#f4f7f8"
                }, 600);
                if (this.select('#' + itemName + '-navigation-group')) {
                  this.select('#' + itemName + '-navigation-group').removeClass('is-active');
                }
              });
            });


          }
        })
      },
      init() {
        // console.log('init');
        // console.log(this.page);

      }
    },
    mounted() {
      console.log(this.page);
      this.init();
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');

  .loading {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .error {
    color: red;
  }

  .main .box {
    // width:200vw; for horizontal scroll
    width:100vw;
    height:100vh;
    display:inline-block;
    position:relative;
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
    padding: 30px;
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
    top:  10px;
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


  .area-navigation-group {
    opacity: 0;
    visibility: hidden;
    transition: .3s;
  }

  .is-active {
    opacity: 1;
    visibility: visible;
  }

  .slide-enter {
    opacity: 0;
    transform: translate(30px, 0);
  }
  .slide-leave-active {
    opacity: 0;
    transform: translate(-30px, 0);
  }


</style>
