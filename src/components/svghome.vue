<template>
    <svg id="svg"></svg>
</template>

<script>
  export default {
  name: 'svghome',
  methods: {
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

      Snap.plugin( function( Snap, Element, Paper) {
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
      var itemlength = this.$router.options.routes.length - 1;
      // var path = s.path("M 400, 450m -75, 0a 400,400 0 1,0 800,0a 400,400 0 1,0 -800,0").attr({ stroke:'red', 'stroke-width':'2', fill: '#000' });
      var path = s.circlePath(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/4).attr({fill: "none", stroke: "none"});

      var pathLength = path.getTotalLength();
      var pathLength2 = pathLength/itemlength;

      this.$router.options.routes.forEach(function (el, i) {

        if (el.path !== '/') {
          var j = i - 1;
          var k = i * pathLength2;
          var svgName = el.meta.svg;
          var itemNamePath = el.meta.title.toLowerCase();
          var movePoint2 = path.getPointAtLength(k);
          var name = String('#' + itemNamePath);

          var areaItem = s.group().append(Snap.parse(svgName)).attr({id: itemNamePath, class: 'area-item', cursor: 'pointer'});
          var x = movePoint2.x - (s.select(name).getBBox().width/2);
          var y = movePoint2.y - (s.select(name).getBBox().height/2);
          var pos = 't' + j * windowWidth/(itemlength/2) + ',' + el.meta.cy; // längst // Backup
          var pos2 = 't' + parseInt(x) + ',' + parseInt(y);

          areaItem.transform(pos2);

          areaItem.click(function() {
            window.location = itemNamePath;
          });

          areaItem.mouseover(function() {
            this.select('path').animate({
              fill: '#B1C3C7'
            }, 600);
          }).mouseout(function() {
            this.select('path').animate({
              fill: '#f4f7f8'
            }, 600);
          });
        }
      });

      /***
       * Old Lines
       */
      var areaItem = s.selectAll('.area-item');
      var areaGroup = s.group(areaItem).attr({class: 'area-group' });
      var i = 0;
      //
      // for (i = 0; i < s.selectAll('.area-item').length; i++) {
      //   var j = i + 1; // Next Object
      //   var areaPX = areaItem[i].getBBox().x + 75;
      //   var areaPY = areaItem[i].getBBox().y + 75;
      //
      //
      //   if (j <= 3) {
      //     var areaPXNext = areaItem[j].getBBox().x + 75;
      //     var areaPYNext = areaItem[j].getBBox().y + 75;
      //   }
      //
      //
      //   s.line(areaPX, areaPY, areaPXNext, areaPYNext).attr({ stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: 4, id: 'line-' + i, class: 'line-item' });
      // }
      //
      // var linesItem = s.selectAll('.line-item');

      this.$router.options.routes.map((el, i) => {
        if (this.$router.options.routes[i].meta.pathes) {
          var startAreaItemPX = s.select('#' + this.$router.options.routes[i].name).getBBox().x + 75;
          var startAreaItemPY = s.select('#' + this.$router.options.routes[i].name).getBBox().y + 75;

          this.$router.options.routes[i].meta.pathes.map((el) => {
            var targetAreaPX =  s.select('#' + el).getBBox().x + 75;
            var targetAreaPY =  s.select('#' + el).getBBox().y + 75;

            s.line(startAreaItemPX, startAreaItemPY, targetAreaPX, targetAreaPY).attr({stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: 4, class: 'line-item'});
          });
        }

      });

      var linesItem = s.selectAll('.line-item');
      s.group(linesItem).attr({class: 'line-group' });
      s.append(areaGroup);
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>
