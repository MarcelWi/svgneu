<template>
  <div class="main">
    <ul>
      <template v-for="(item,index) in $router.options.routes">
        <li v-if="item.path != '/'" @click="$router.push(item.path)">
          {{item.meta.title}}
        </li>
      </template>
    </ul>



    <section class="content">
      <svg id="svg" class=""></svg>
    </section>


  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    init() {
      var strokeWidth = 3,
         strokeColor = '#fff',
         fillColor = '#eee',
         diameter = 75;

         var s = Snap('svg');

         // Points
         var p1 = [500, 400],
         p2 = [150, 470],
         p3 = [650, 150],
         p4 = [2250, 450];


         // Lines
         var l1 = s.line(p1[0], p1[1], p2[0], p2[1]),
         l2 = s.line(p1[0], p1[1], p3[0], p3[1]),
         l3 = s.line(p1[0], p1[1], p4[0], p4[1]);

         var lines = s.group(l1, l2, l3).attr({ strokeWidth: strokeWidth, stroke: strokeColor });


         // Circles
         var c1 = s.circle(p1[0], p1[1], diameter).attr({ fill: fillColor }),
         c2 = s.circle(p2[0], p2[1], diameter).attr({ fill: fillColor }),
         c3 = s.circle(p3[0], p3[1], diameter).attr({ fill: fillColor }),
         c4 = s.circle(p4[0], p4[1], diameter).attr({ fill: fillColor, id: 'graphic_1' });


         var t1 = s.text(60, 80, "Skillz");
         t1.attr({
           'font-family': 'Arial',
           'font-size': 30,
           fill: '#333',
           'stroke-width': 0
         });

         var circles = s.group(c1, c2, c3, c4);

        //   var combine = function () {
        //     c1.animate({cx: p1[0], cy: p1[1]}, 1000, mina.elastic);
        //     lines.attr({stroke: '#000'});
        //     lines2.attr({stroke: '#000'});
        //   };
        //
        // s.click(combine);

         // var expand = function () {
         //     c1.animate({ cx: p5[0], cy: p5[1] }, 1000, mina.elastic);
         //     c2.animate({ cx: p6[0], cy: p6[1] }, 1000, mina.elastic);
         //     c3.animate({ cx: p7[0], cy: p7[1] }, 1000, mina.elastic);
         //     c4.animate({ cx: p8[0], cy: p8[1] }, 1000, mina.elastic);
         //     lines2.attr({ stroke: strokeColor });
         // };

         // s.dblclick(expand);



    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>
  body {
    margin: 0;
  }

/*html {*/
  /*height: 100%;*/
/*}*/
/*body {*/
  /*height: 100%;*/
  /*width: 3000px;*/
/*}*/
/*svg {*/
  /*background: #000;*/
  /*height: 100%;*/
  /*width: 100%;*/
/*}*/

/*ul,*/
/*li {*/
  /*cursor: pointer;*/
  /*height: 40px;*/
  /*line-height: 40px;*/
  /*transition: all .2s ease-in;*/
/*}*/

/*li:hover {*/
  /*color: #bc223d;*/
  /*text-indent: 12px;*/
/*}*/

</style>
