"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    meun: [
      {
        id: 1,
        pic: "/static/images/home/menu-1.jpg",
        name: "新鲜水果"
      },
      {
        id: 2,
        pic: "/static/images/home/menu-2.jpg",
        name: "蔬瓜菜品"
      },
      {
        id: 3,
        pic: "/static/images/home/menu-3.jpg",
        name: "满地飞禽"
      },
      {
        id: 4,
        pic: "/static/images/home/menu-4.jpg",
        name: "酒水饮料"
      },
      {
        id: 5,
        pic: "/static/images/home/menu-5.jpg",
        name: "海鲜水产"
      }
    ],
    carList: []
  },
  actions: {},
  mutations: {
    pushCar(state, val) {
      const isObject = (val2) => typeof val2 === "object" && val2 !== null;
      const equals = (val1, val2) => {
        if (!isObject || !isObject(val2))
          return Object.is(val1, val2);
        if (val1 === val2)
          return true;
        const val1Keys = Object.keys(val1);
        const val2Keys = Object.keys(val2);
        if (val1Keys.length !== val2Keys.length)
          return false;
        for (let key of val1Keys) {
          if (!val2Keys.includes(key)) {
            return false;
          }
          const res = equals(val1[key], val2[key]);
          if (!res)
            return false;
        }
        return true;
      };
      state.carList.push(val);
      const newArr = [...state.carList];
      for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
          if (equals(newArr[i], newArr[j])) {
            newArr.splice(j, 1);
            j--;
            newArr[i].quantity++;
          }
        }
      }
      console.log(newArr);
      state.carList = newArr;
    },
    del(state, val) {
      state.carList = val;
    }
  },
  getters: {}
});
exports.store = store;
