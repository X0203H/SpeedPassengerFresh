"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_count_down = common_vendor.resolveComponent("van-count-down");
  _component_van_count_down();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    const time = common_vendor.ref((/* @__PURE__ */ new Date("2023-8-25 23:59:59")).getTime() - Date.now());
    const timeData = common_vendor.ref({});
    const flashData = common_vendor.ref([]);
    const newComerList = common_vendor.ref([]);
    const onChange = (e) => {
      timeData.value = e.detail;
    };
    console.log(store_index.store.state);
    const getData = () => {
      api_api.http.get("/index", {}, false).then(({ data: res }) => {
        console.log(res);
        flashData.value = res.discountList;
        newComerList.value = res.newComerList;
        console.log(flashData.value, newComerList.value);
      });
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(store_index.store).state.meun, (item, k0, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        b: common_vendor.t(timeData.value.hours >= 10 ? timeData.value.hours : "0" + timeData.value.hours),
        c: common_vendor.t(timeData.value.minutes >= 10 ? timeData.value.minutes : "0" + timeData.value.minutes),
        d: common_vendor.t(timeData.value.seconds >= 10 ? timeData.value.seconds : "0" + timeData.value.seconds),
        e: common_vendor.o(onChange),
        f: common_vendor.p({
          useSlot: true,
          time: time.value
        }),
        g: common_vendor.f(flashData.value, (item, k0, i0) => {
          return {
            a: item.coverImage,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.discountPrice),
            d: common_vendor.t(item.marketPrice),
            e: item.id
          };
        }),
        h: common_vendor.f(newComerList.value, (item, k0, i0) => {
          return {
            a: item.coverImage,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.discountPrice),
            d: common_vendor.t(item.marketPrice),
            e: item.id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.8.24速客优鲜/SpeedPassengerFresh/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
