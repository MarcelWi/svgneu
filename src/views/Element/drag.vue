<template>
  <section class="main">
    <section class="content">
      <svg id="svg" class=""></svg>
      <fieldset class="operate">
        <legend>操作区域</legend>
      </fieldset>
    </section>
  </section>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      colors: ['#000', '#aaa', '#1648ad', '#e24213', '#e28468', '#14e62e', '#bc223d'],
      index: 1,
      flag: false
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    init() {
      //实例化
      this.svg = this.$snap('#svg');
      //画一个园
      this.c = this.svg.paper.circle(250, 250, 150).attr({
        fill: '#bc2223',
        "fill-opacity": .5,
        stroke: '#bc2223',
        strokeOpacity: .3,
        strokeWidth: 5
      }).drag();
      console.log(this.c.getBBox())
    },
    dragMove(x, y, e) {},

    dragStart() {

    },

    dragEnd() {

    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>


</style>
