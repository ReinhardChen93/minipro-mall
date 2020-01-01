export default {
	// 全局配置
	common:{
		// 根路径
		baseUrl: 'http://ceshi3.dishait.cn/api',
		header:{
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded'
		},
		data:{},
		method:'GET',
		dataType:'json'
	},
	// 请求 返回promise
	request(options = {}) {
		// 组织参数
		oprions.url = this.common.baseUrl + options.url
		oprions.header = optionsheader || this.common.header
		option.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		// 请求之前...验证token
		
		
		//请求
		return new Promise ((res,rej)=>{
			uni.request({
				...options,
				success: (result) => {
					if(result.statusCode !== 200){
						uni.showToast({
							title: result.data.msg || '服务端失败',
							icon: 'none'
						})
						return rej()
					}
					// 成功
					let data = result.data.data
					res(data)
				},
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					})
					return rej()
				}
			})
		})
	},
	// GET请求
	get(url,data= {},option = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post请求
	post(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	// delete请求
	del(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
}