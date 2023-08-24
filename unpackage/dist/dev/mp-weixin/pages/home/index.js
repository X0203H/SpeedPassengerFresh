"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    console.log(store_index.store);
    const Request = () => {
      api_api.http.post("/user/login", { userAccount: "nihao33", password: "123456" }, false).then((res) => {
        console.log(res);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(Request),
        b: common_vendor.p({
          type: "default"
        }),
        c: common_vendor.p({
          type: "primary"
        }),
        d: common_vendor.p({
          type: "info"
        }),
        e: common_vendor.p({
          type: "warning"
        }),
        f: common_vendor.p({
          type: "danger"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/个人/5G智能/项目/小程序项目/quick-customer/速客优鲜/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
