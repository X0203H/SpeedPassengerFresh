"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  _component_van_stepper();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart",
  setup(__props) {
    const value = common_vendor.ref(0);
    const allSatus = common_vendor.ref(false);
    const list = common_vendor.ref([]);
    const del = () => {
      console.log("删除");
      list.value = list.value.filter((item) => {
        return item.status === false;
      });
      console.log(list.value);
      store_index.store.commit("del", list.value);
    };
    const buy = () => {
      console.log("去买单");
      list.value == [];
    };
    const all = (e) => {
      allSatus.value = !allSatus.value;
      list.value.forEach((item) => {
        item.status = allSatus.value;
      });
    };
    const nums = (val) => {
      console.log(val);
    };
    const check = (e, row) => {
      row.status = !row.status;
      if (list.value.every((item) => item.status === true)) {
        allSatus.value = true;
      }
    };
    const sum = common_vendor.computed(() => {
      return list.value.reduce((sum2, item) => {
        console.log(item.discountPrice, item.status);
        if (item.status) {
          return sum2 += item.discountPrice * item.num;
        } else {
          return sum2 += 0;
        }
      }, 0);
    });
    common_vendor.onShow(() => {
      list.value = store_index.store.state.carList;
      list.value.forEach((item) => {
        item.num = 1;
        if (item.status === void 0) {
          item.status = false;
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: list.value.length === 0
      }, list.value.length === 0 ? {} : {}, {
        b: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.status,
            b: common_vendor.o(($event) => check(index, item), item.id),
            c: item.coverImage,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.discountPrice),
            f: common_vendor.o(($event) => nums(value.value), item.id),
            g: "3cd1a988-0-" + i0,
            h: common_vendor.o(common_vendor.m(($event) => item.num = $event, {
              number: true
            }, true), item.id),
            i: common_vendor.p({
              modelValue: item.num
            }),
            j: item.id
          };
        }),
        c: common_vendor.o(all),
        d: allSatus.value,
        e: common_vendor.t(common_vendor.unref(sum)),
        f: common_vendor.o(del),
        g: common_vendor.o(buy)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni_app/SpeedPassengerFresh/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
