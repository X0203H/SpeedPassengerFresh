"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  _component_van_stepper();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart",
  setup(__props) {
    common_vendor.ref(0);
    const allSatus = common_vendor.ref(true);
    const list = common_vendor.ref([{
      status: true,
      pic: "https://img0.baidu.com/it/u=3072622713,1305198873&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500",
      name: "好吃",
      price: 12
    }]);
    const del = () => {
      console.log("删除");
      list.value.filter((item) => {
        return item.status === true;
      });
    };
    const buy = () => {
      console.log("去买单");
      list.value == [];
    };
    const all = (e) => {
      allSatus.value = !allSatus.value;
      console.log("全选", allSatus.value);
      list.value.forEach((item) => {
        item.status = allSatus.value;
      });
    };
    const check = (e) => {
      console.log(e, index);
      list.value.forEach((item) => {
        console.log(item.status);
      });
    };
    list.value.forEach((item) => {
      item.num = 1;
    });
    const sum = common_vendor.computed(() => {
      return list.value.reduce((sum2, item) => {
        return sum2 += item.price * item.num;
      }, 0);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: list.value.length === 0
      }, list.value.length === 0 ? {} : {}, {
        b: common_vendor.f(list.value, (item, index2, i0) => {
          return {
            a: item.status,
            b: common_vendor.o(($event) => check(index2), item.id),
            c: item.pic,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.price),
            f: "3cd1a988-0-" + i0,
            g: common_vendor.o(($event) => item.num = $event, item.id),
            h: common_vendor.p({
              modelValue: item.num
            }),
            i: item.id
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
