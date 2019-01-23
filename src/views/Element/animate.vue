<template>
  <section class="main">
    <section class="content">
      <svg id="svg" class=""></svg>
      <fieldset class="operate">
        <legend>操作区域</legend>
        <input type="button" value="停!停停!!停停停!!!" @click="stopChange">
        <input type="button" value="拷贝一个" @click="handleClone()">
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
      }).data('author', 'zhangyang').click(() => {
        clearInterval(this.timer);
        this.svg.paper.text(210, 250, this.c.data('author'));
        this.changeColor();
      }).dblclick(() => {
        alert('你双击了,那就停止吧');
        this.stopChange();
      })
    },
    /**
     * 改变颜色
     * @return {[type]} [description]
     */
    changeColor() {
      this.timer = setInterval(() => {
        let index = parseInt(Math.random() * 7);
        this.c.animate({
          fill: this.colors[index],
          stroke: this.colors[index],
          strokeOpacity: .3,
        }, 500, mina.bounce);
      }, 500);

    },
    /**
     * 停止改变颜色
     * @return {[type]} [description]
     */
    stopChange() {
      this.c.stop();
      clearInterval(this.timer);
    },
    /**
     * 处理拷贝事件
     * @return {[type]} [description]
     */
    handleClone() {
      this.index++;
      this.c.clone().attr({
        cx: Number(250 + this.index * 50)
      })
    },

    dragMove() {

    },

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
