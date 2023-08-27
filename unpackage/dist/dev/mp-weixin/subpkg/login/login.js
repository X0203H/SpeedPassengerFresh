"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_notify = common_vendor.resolveComponent("van-notify");
  (_component_van_button + _component_van_notify)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const account = common_vendor.ref("");
    const password = common_vendor.ref("");
    const LogIn = () => {
      if (account.value === "" && password.value === "")
        return common_vendor.Notify("内容不能为空！");
      api_api.http.post("/user/login", { userAccount: account.value, password: password.value }, false).then((res) => {
        console.log(res);
        if (res.code === 1) {
          common_vendor.Notify({ type: "success", message: res.message });
          common_vendor.index.navigateTo({
            url: "/pages/cart/cart"
          });
        } else {
          common_vendor.Notify(res.message);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: account.value,
        b: common_vendor.o(($event) => account.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(LogIn),
        f: common_vendor.p({
          type: "info"
        }),
        g: common_vendor.p({
          id: "van-notify"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni_app/SpeedPassengerFresh/subpkg/login/login.vue"]]);
wx.createPage(MiniProgramPage);
