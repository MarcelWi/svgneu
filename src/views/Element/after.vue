<template>
  <section class="main">
    <section class="content">
      <svg id="svg" width="200" height="100" class=""></svg>
      <fieldset class="operate">
        <legend>操作区域</legend>
        <input id="button" type="button" value="点击改变圈圈的顺序" @click="changeOrder">
      </fieldset>
    </section>
  </section>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      flag: true
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    init() {
      //实例化
      let svg = this.$snap('#svg');
      //画一个园
      this.c1 = svg.paper.circle(100, 100, 50).attr({
        fill: '#bc2223'
      });

      this.c2 = svg.paper.circle(150, 100, 50).attr({
        fill: '#ababab'
      })

    },
    changeOrder() {
      if (this.flag) {
        this.c2.after(this.c1)
      } else {
        this.c1.after(this.c2)
      }
      this.flag = !this.flag;
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>


</style>
