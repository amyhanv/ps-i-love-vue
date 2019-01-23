// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import axois from "axios";
// provides services for making web requests and handle responses using a XMLHttpRequest or JSONP
import App from "./App";
import Users from "./components/Users";
import Test from "./components/Test";

/* 
Use plugins by calling the Vue.use() global method. 
This has to be done before you start your app by calling new Vue() 
*/
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{ path: "/", component: Users }, { path: "/test", component: Test }]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */

/* Instance: Each Vue instance goes through a series of initialization steps when it’s created 
- for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. 
*/

new Vue({
  router,
  // el: "#app",
  // components: { App },
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view/>
    </div>
  `
  // template: "<App>"
}).$mount("#app");

/* 
Mounting hooks are often the most-used hooks, for better or worse. They allow you to access your component immediately before and after the first render. They do not, however, run during server-side rendering.

Use if: You need to access or modify the DOM of your component immediately before or after the initial render.


*/
