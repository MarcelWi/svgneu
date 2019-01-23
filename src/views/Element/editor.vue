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

    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>


</style>
