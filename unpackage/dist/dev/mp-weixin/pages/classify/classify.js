"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_card = common_vendor.resolveComponent("van-card");
  const _component_van_tree_select = common_vendor.resolveComponent("van-tree-select");
  (_component_van_card + _component_van_tree_select)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classify",
  setup(__props) {
    const store = store_index.store;
    console.log(888, store);
    const dataPro = common_vendor.ref([]);
    const items = common_vendor.ref([
      {
        // 导航名称
        text: "新鲜水果"
      },
      {
        // 导航名称
        text: "蔬瓜彩品"
      },
      {
        // 导航名称
        text: "满地飞禽"
      },
      {
        // 导航名称
        text: "酒水饮料"
      },
      {
        // 导航名称
        text: "海鲜水产"
      }
    ]);
    const mainActiveIndex = common_vendor.ref(0);
    const activeId = common_vendor.ref([]);
    const onClickNav = async (val) => {
      console.log(val.detail.index);
      const { data } = await api_api.http.get("/good/lists", {
        page: 1,
        limit: 20,
        discountPrice: "asc",
        category: val.detail.index + 1
      });
      data.forEach((item) => {
        item.quantity = 1;
      });
      console.log(data);
      dataPro.value = data;
    };
    const add = (val) => {
      console.log(val);
      console.log(999, store);
      store.commit("pushCar", val);
    };
    common_vendor.onMounted(async () => {
      const { data } = await api_api.http.get("/good/lists", {
        page: 1,
        limit: 20,
        discountPrice: "asc",
        category: 1
      });
      data.forEach((item) => {
        item.quantity = 1;
      });
      dataPro.value = data;
      console.log(1111, data);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(dataPro.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.discountPrice),
            b: common_vendor.t(item.marketPrice),
            c: common_vendor.o(($event) => add(item)),
            d: "e354ecf0-1-" + i0 + ",e354ecf0-0",
            e: common_vendor.p({
              desc: item.shopDesc,
              title: item.name,
              thumb: item.coverImage
            })
          };
        }),
        b: common_vendor.o(onClickNav),
        c: common_vendor.o(_ctx.onClickItem),
        d: common_vendor.p({
          items: items.value,
          height: "100vh",
          ["main-active-index"]: mainActiveIndex.value,
          ["active-id"]: activeId.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni_app/SpeedPassengerFresh/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
