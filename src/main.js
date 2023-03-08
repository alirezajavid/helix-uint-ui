// =========================================================
// * Vue Material Dashboard - v1.5.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

import { store } from "./store/index";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import axios from "axios";
import { makeServer } from "./server";
import VueConfirmDialog from "vue-confirm-dialog";
import Toasted from "vue-toasted";

Vue.use(Toasted, { duration: 3000, theme: "outline", icon: "check" });

if (process.env.NODE_ENV === "development") {
  makeServer();
}

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

Vue.prototype.$Chartist = Chartist;
Vue.prototype.$unitid = "...";
Vue.prototype.$dev_mode =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost";
Vue.prototype.$cam_image = Vue.prototype.$dev_mode
  ? "https://www.entekhab.ir/files/fa/news/1401/3/10/1268200_267.jpg"
  : "/jpeg/mjpeg_latest.jpg";
Date.prototype.FORMAT = function () {
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  var yyyy = this.getFullYear().toString();
  var MM = pad(this.getMonth() + 1, 2);
  var dd = pad(this.getDate(), 2);
  var hh = pad(this.getHours(), 2);
  var mm = pad(this.getMinutes(), 2);
  var ss = pad(this.getSeconds(), 2);

  return yyyy + "-" + MM + "-" + dd;
};
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueConfirmDialog);

Vue.component("vue-confirm-dialog", VueConfirmDialog.default);

axios.get("/api/unit_id").then((r) => {
  Vue.prototype.$unitid = r.data.unit_id;
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
  data: {
    Chartist: Chartist,
  },
});
