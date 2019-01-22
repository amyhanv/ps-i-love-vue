// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueResouce from "vue-resource";
// provides services for making web requests and handle responses using a XMLHttpRequest or JSONP
import App from "./App";

Vue.use(vueResouce);
//Use plugins by calling the Vue.use() global method. This has to be done before you start your app by calling new Vue()
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
