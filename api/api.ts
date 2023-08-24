const http = {
	// baseUrl 地址
	baseUrl: 'http://127.0.0.1:9999',

	// 请求方法
	request(config) {
		// config：请求配置对象，具体参照uniapp文档

		config = beforeRequest(config)

		// 请求地址拼接
		config.url = this.baseUrl + config.url

		// 异步请求
		return new Promise((resolve, reject) => {
			uni.request(config).then(res => { // 成功
				// console.log(res)
				// let [data] = res
				// 响应拦截
				const response = beforeResponse(res.data)
				resolve(response)
			}).catch(err => { // 失败
				// errorHandle(err)
				// reject(err)
			})
		})

	},
	get(url, data, auth) {
		/*
		url：接口地址
		data：查询参数
		auth：请求是否携带token进行认证（true/false）
		method：请求方式
		*/
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'GET'
		})
	},
	post(url, data, auth) {
		/*
		url：接口地址
		data：请求体参数
		auth：请求是否携带token进行认证（true/false）
		method：请求方式
		*/
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'POST'
		})
	},
	put(url, data, auth) {
		/*
		url：接口地址
		data：请求体参数
		auth：请求是否携带token进行认证（true/false）
		method：请求方式
		*/
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'PUT'
		})
	},
	delete(url, data, auth) {
		/*
		url：接口地址
		auth：请求是否携带token进行认证（true/false）
		method：请求方式
		*/
		return this.request({
			url: url,
			auth: auth,
			method: 'DELETE'
		})
	}
}

// 请求拦截器
const beforeRequest = (config) => {
	// 请求之前拦截操作
	console.log('请求拦截器', config)
	return config
}

// 响应拦截器
const beforeResponse = (response) => {
	// 请求之后操作
	console.log('响应拦截器', response)
	return response
}

// // 请求异常处理器
// const errorHandle = ((err) => {
// 	console.log('请求异常', err)
// })

export default http