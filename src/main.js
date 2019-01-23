// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Snap from 'snapsvg';
import vueJquery from 'vue-jquery';
import VModal from 'vue-js-modal'
import { Modal, VoerroModal } from '@/components/modal/main';
// import { Modal, VoerroModal } from '@voerro/vue-modal';

Vue.component('modal', Modal);
window.VoerroModal = VoerroModal;


Vue.use(vueJquery);

Vue.use(VModal, {
  dialog: true,
  dynamic: true,
});

Vue.config.productionTip = false;
Vue.prototype.$snap = Snap;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
