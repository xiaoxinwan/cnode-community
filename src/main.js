import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.filter("dateFormatter", function(str,param) {
  if (!str) return "";
  if(!param) param= '';
  var date = new Date(str);
  var time = new Date().getTime() - date.getTime();
  if (time < 0) {
    return "";
  } else if (time / 1000 < 30) {
    return "刚刚";
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)+1)  +"秒前";
  } else if (time / 60000 < 60) {
    return parseInt((time / 60000)+1) +"分钟前";
  } else if (time / 3600000 < 24) {
    return parseInt((time / 3600000)) +"小时前";
  } else if (time / 86400000 < 31) {
    return parseInt((time / 86400000)+1) +"天前";
  } else if (time / 2592000000 < 12) {
    return parseInt((time / 2592000000)) + param +"月前";
  } else {
    return parseInt((time / 31536000000)+1) +"年前";
  }
});
Vue.filter("tabFormatter", function(list) {
  if (list.good) {
    return "精华";
  } else if (list.top) {
    return "置顶";
  } else if (list.tab === "ask") {
    return "问答";
  } else if (list.tab === "share") {
    return "分享";
  } else if (list.tab === "job") {
    return "招聘";
  }
});
