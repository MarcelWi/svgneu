<template>
  <section class="main">
    <section class="content">
      <svg id="svg" class=""></svg>
      <svg id="svg2" class=""></svg>
      <fieldset class="operate">
        <legend>操作区域</legend>
        <input id="button" type="button" value="点击进入身体" @click="append">
      </fieldset>
    </section>
  </section>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      colors: ['#000', '#aaa', '#1648ad', '#e24213', '#e28468', '#14e62e', '#bc223d']
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
      this.svg2 = this.$snap('#svg2')
      //画一个园
      this.c1 = this.svg.paper.circle(250, 150, 100).attr({
        fill: '#bc2223',
        stroke: '#bc2223',
        strokeOpacity: .3,
        strokeWidth: 10
      });

      this.c2 = this.svg2.paper.circle(250, 150, 50).attr({
        fill: '#1648ad',
        stroke: '#1648ad',
        strokeOpacity: .3,
        strokeWidth: 10
      });
      console.log(this.c1.asPX("r")); //获取对应参数的px值
    },
    append(e) {
      this.svg.append(this.c2);
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>


</style>
