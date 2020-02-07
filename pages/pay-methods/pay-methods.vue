<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="text-light-muted font-md">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">{{detail.price}}</price>
		</view>
		
		<view class="px-5">
			<radio-group name="" @change="change">
				<label v-for="(item,index) in options" :key="index">
					<uni-list-item showExtraIcon 
					:leftIcon="item.icon"
					:title="item.title" :note="item.note"
					leftIconStyle="font-size:60rpx;">
						<radio slot="right" :value="item.value" color="#FD6801"
						:checked="payMethod === item.value"/>
					</uni-list-item>
				</label>
			</radio-group>

			<view class=" mt-3 text-white font-md w-100 p-2 rounded text-center" 
			hover-class="main-bg-hover-color"
			:class="loading ? 'bg-secondary' : 'main-bg-color'"
			@click="submit">
				{{loding ? '支付中' : '确认支付'}}
			</view>
		</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
 	export default {
		components:{
			price,
			uniListItem
		},
		data() {
			return {
				detail:{
					id:0,
					price:0
				},
				payMethod:"",
				loding: false,
				options:[]
			}
		},
		onLoad(e) {
			if(!e.detail) {
				return uni.showToast({
					title: '支付失败',
					icon: 'none'
				});
			}
			this.detail = JSON.parse(e.detail)
			// #ifdef APP-PLUS
				this.options = [{
					title: "支付宝",
					note: "推荐使用支付宝支付",
					icon: "icon-zhifubao text-primary",
					value: "alipay"
				},{
					title: "微信支付",
					note: "",
					icon: "icon-weixinzhifu text-primary",
					value: "wxpay"
				}]
				this.payMethod = 'alipay'
			// #endif
			// #ifdef MP-WEIXIN
				this.options = [{
					title: "微信支付",
					note: "推荐使用微信支付",
					icon: "icon-weixinzhifu text-primary",
					value: "wxpay"
				}]
				this.payMethod = 'wxpay'
			// #endif
		},
		methods: {
			// 支付
			submit(){
				// 仿制重复支付
				if(this.loading) return
				this.loading = true
				// #ifdef APP-PLUS
					this.appPay()
				// #endif
				
				// #ifdef MP-WEIXIN
					this.weixinMpPay()
				// #endif
			},
			//微信小程序支付
			weixinMpPay(){
				// 请求接口
				uni.login({
					success: res => {
						this.$H.get('/payment/' + this.detail.id + '/wxmppay/'+res.code,{},{
							token:true,
							native:true
						}).then(result=>{
							let paymentData = result.data
							uni.requestPayment({
							    timeStamp: paymentData.timeStamp,
							    nonceStr: paymentData.nonceStr,
							    package: paymentData.package,
							    signType: 'MD5',
							    paySign: paymentData.paySign,
							    success: (res) => {
							       // 重定向/防止重复支付问题
							       uni.redirectTo({
							       	url: '../pay-result/pay-result?id='+this.detail.id,
							       });
							    },
							    fail: (res) => {
							        uni.showModal({
							            content: "支付失败,原因为: " + res
							                .errMsg,
							            showCancel: false
							        })
							    },
							    complete: () => {
							        this.loading = false;
							    }
							})
						}).catch(err=>{
							this.loading = false 
						})
					},
					fail: (e) => {
					    this.loading = false;
					    uni.showModal({
					        content: "支付失败,原因为: " + e.errMsg,
					        showCancel: false
					    })
					}
				});
			},
			// app支付
			appPay() {
				this.$H.get('/payment/' + this.detail.id + '/' + this.payMethod,{},{
					token:true,
					native:true
				}).then(res=>{
					
					uni.requestPayment({
					    provider: this.payMethod,
					    orderInfo: res.data, //微信、支付宝订单数据
					    success: (res) => {
					        // 重定向/防止重复支付问题
							uni.redirectTo({
								url: '../pay-result/pay-result?id='+this.detail.id,
							});
					    },
					    fail: (err) => {
					        uni.showModal({
					            content: "支付失败,原因为: " + res
					                .errMsg,
					            showCancel: false
					        })
					    },
						complete: () => {
							this.loading = false 
						}
					});
				}).catch(err=>{
					this.loading = false 
					uni.showToast({
						title: '支付失败',
						icon: 'none'
					});
				})
			},
			// 切换支付方式
			change(e) {
				this.payMethod = e.detail.value
			}
		}
	}
</script>

<style>

</style>
