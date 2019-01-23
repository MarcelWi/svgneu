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
            <svg id="svg"></svg>
          </div>
        </div>
      </div>
      <navigation />
    </div>
    <modal />
  </div>
</template>
<script>
  // https://www.npmjs.com/package/@voerro/vue-modal
  import Navigation from "@/components/navigation/navigation";
  import svgCloud from '@/components/svg/layout/cloud';
  import svgArrow from '@/components/svg/layout/arrow';

  export default {
    components: {
      Navigation
    },
    data() {
      return {
        selectedTab: 0,
      }
    },
    methods: {
      creatCloud(s, windowWidth, windowHeight) {
        var cloud = 0;
        var cloudLenght = 5;

        for (cloud = 0; cloud < cloudLenght; cloud++) {
          var cloudWidth = 210;
          var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
          var cloudPositionRandom = plusOrMinus * (500 * Math.random());
          var cloudCX = windowWidth/2 - cloudWidth/2;
          var cloudCY = cloud * (windowHeight/cloudLenght);
          var cloudItem = s.group().append(Snap.parse(svgCloud)).attr({class: 'cloud-item'});

          cloudItem.transform('t' + (cloudCX - cloudPositionRandom) + ',' + cloudCY);
        }

        var cloudItems = s.selectAll('.cloud-item');
        var cloudGroup = s.group(cloudItems).attr({class: 'cloud-group'});
        cloudGroup.animate({transform: 'translate(10000 10000)'}, 2000000, mina.linear());
        s.prepend(cloudGroup);
      },

      init() {

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

        var s = Snap('svg');

        /*
          Before Update next Page
         */
        s.clear();

        var pageID = this.$route.meta.id;
        var itemlength = this.$router.options.routes[pageID].children.length;

        var path = s.circlePath(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/4).attr({fill: "none", stroke: "none"});
        var pathLength = path.getTotalLength();
        var pathLength2 = pathLength/itemlength;

        this.$router.options.routes[pageID].children.map((el, i) => {
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
        // var i = 0;
        // for (i = 0; i < s.selectAll('.area-item').length; i++) {
        //   var j = i + 1; // Next Object
        //   var areaPX = areaItem[i].getBBox().x + 75;
        //   var areaPY = areaItem[i].getBBox().y + 75;
        //
        //   if (j <= 3) {
        //     var areaPXNext = areaItem[j].getBBox().x + 75;
        //     var areaPYNext = areaItem[j].getBBox().y + 75;
        //   }
        //
        //   s.line(areaPX, areaPY, areaPXNext, areaPYNext).attr({ stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: 4, id: 'line-' + i, class: 'line-item' });
        // }

        this.$router.options.routes[pageID].children.map((el) => {

          if (el.meta.pathes) {
            var startAreaItem =  s.select('#' + el.meta.idName);
            var startAreaItemPX = parseInt(startAreaItem.getBBox().x) + parseInt(startAreaItem.getBBox().height / 2);
            var startAreaItemPY = parseInt(startAreaItem.getBBox().y) + parseInt(startAreaItem.getBBox().width / 2);

            var startAreaItemBG = startAreaItem.select('path');
            var startAreaItemPXBG = parseInt(startAreaItemBG.getBBox().x);
            var startAreaItemPYBG = parseInt(startAreaItemBG.getBBox().y);

            var x = startAreaItemPX + startAreaItemPXBG;
            var y = startAreaItemPY + startAreaItemPYBG;


            el.meta.pathes.map((el) => {
              var targetArea =  s.select('#' + el);
              var targetAreaPX =  parseInt(targetArea.getBBox().x) + parseInt(targetArea.getBBox().height / 2);
              var targetAreaPY =  parseInt(targetArea.getBBox().y) + parseInt(targetArea.getBBox().width / 2);

              var targetAreaBG = targetArea.select('path');
              var targetAreaItemPXBG = parseInt(targetAreaBG.getBBox().x);
              var targetAreaItemPYBG = parseInt(targetAreaBG.getBBox().y);

              var tx = targetAreaPX + targetAreaItemPXBG;
              var ty = targetAreaPY + targetAreaItemPYBG;

              s.line(x, y, tx, ty).attr({stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: 4, class: 'line-item'});
            });
          }
        });

        var linesItem = s.selectAll('.line-item');
        s.group(linesItem).attr({class: 'line-group' });
        s.append(areaGroup);

        this.$router.options.routes[pageID].children.map((el) => {
          var itemName = el.meta.idName;
          var _itemName = s.select('#' + el.meta.idName);

          if (el.children) {
            var _areaNav = s.select('#' + el.meta.idName + '-navigation');

            el.children.map((el, i) => {
              var j = i * 100;
              var moveToPoint = Snap.path.getPointAtLength(_areaNav, j);
              var x = parseInt(moveToPoint.x) + parseInt(el.meta.cx);
              var y = parseInt(moveToPoint.y) + parseInt(el.meta.cy);

              s.group().append(Snap.parse(svgArrow)).attr({class: itemName + '-arrow-item'}).transform('t' + (x - 12) + ',' + (y - 10));

              s.text((x + 15), (y + 10), el.meta.title).attr({
                fontSize: 22,
                fill: '#003a52',
                class: itemName + '-navigation-item',
                id: el.name + '-nav',
                cursor: 'pointer'
              });
              // s.group(arrowItem, navItem);

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



            var arrowItems = s.selectAll('.' + itemName + '-arrow-item');
            var itemNavigation = s.selectAll('.' + itemName + '-navigation-item');
            var itemNavigationGroup = s.group(itemNavigation, arrowItems).attr({id: itemName + '-navigation-group', class: 'area-navigation-group'});
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

        this.creatCloud(s, windowWidth, windowHeight);
      }

    },
    mounted() {
      this.init();
    },
    updated() {
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
    overflow-y: scroll;
    overflow-x: hidden;
    transform: rotate(270deg) translateX(-100%);
    transform-origin: top left;
    position: absolute;
    width: 100vh;
    height: 100vw;
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
    left: 65px;
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


</style>
