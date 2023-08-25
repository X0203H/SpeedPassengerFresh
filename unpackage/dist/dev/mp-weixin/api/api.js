"use strict";
const common_vendor = require("../common/vendor.js");
const http = {
  // baseUrl 地址
  baseUrl: "http://127.0.0.1:9999",
  // 请求方法
  request(config) {
    config = beforeRequest(config);
    config.url = this.baseUrl + config.url;
    return new Promise((resolve, reject) => {
      common_vendor.index.request(config).then((res) => {
        const response = beforeResponse(res.data);
        resolve(response);
      }).catch((err) => {
      });
    });
  },
  get(url, data, auth) {
    return this.request({
      url,
      data,
      auth,
      method: "GET"
    });
  },
  post(url, data, auth) {
    return this.request({
      url,
      data,
      auth,
      method: "POST"
    });
  },
  put(url, data, auth) {
    return this.request({
      url,
      data,
      auth,
      method: "PUT"
    });
  },
  delete(url, data, auth) {
    return this.request({
      url,
      auth,
      method: "DELETE"
    });
  }
};
const beforeRequest = (config) => {
  console.log("请求拦截器", config);
  return config;
};
const beforeResponse = (response) => {
  console.log("响应拦截器", response);
  return response;
};
exports.http = http;
