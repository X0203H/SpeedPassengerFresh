"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    meun: [{
      id: 1,
      pic: "/static/images/home/menu-1.jpg",
      name: "新鲜水果"
    }, {
      id: 2,
      pic: "/static/images/home/menu-2.jpg",
      name: "蔬瓜菜品"
    }, {
      id: 3,
      pic: "/static/images/home/menu-3.jpg",
      name: "满地飞禽"
    }, {
      id: 4,
      pic: "/static/images/home/menu-4.jpg",
      name: "酒水饮料"
    }, {
      id: 5,
      pic: "/static/images/home/menu-5.jpg",
      name: "海鲜水产"
    }]
  },
  actions: {},
  mutations: {},
  getters: {}
});
exports.store = store;
