<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style src="assets/styles/common.css"></style>
<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*height: 96vh;*/
  /*width: 100vw;*/
/*}*/

/*body {*/
  /*margin: 0;*/
  /*overflow-y: scroll;*/
/*}*/

/*html {*/
/*}*/

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');


body {
  margin: 0;
  overflow: hidden;
  background: #ccdee4;
  font-family: 'Source Sans Pro', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
}
</style>
