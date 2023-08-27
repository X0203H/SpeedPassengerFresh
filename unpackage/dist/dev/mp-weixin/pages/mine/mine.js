"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "mine",
  setup(__props) {
    const LogIn = () => {
      common_vendor.index.navigateTo({
        url: "/subpkg/login/login"
      });
    };
    const Register = () => {
      common_vendor.index.navigateTo({
        url: "/subpkg/register/register"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(LogIn),
        b: common_vendor.p({
          type: "primary"
        }),
        c: common_vendor.o(Register),
        d: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni_app/SpeedPassengerFresh/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
