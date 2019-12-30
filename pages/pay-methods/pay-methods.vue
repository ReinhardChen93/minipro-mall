<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="text-light-muted font-md">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">3699</price>
		</view>
		
		<view class="px-5">
			<label for="">
				<uni-list-item showExtraIcon 
				leftIcon="icon-zhifubao text-primary"
				 leftIconStyle="font-size:60rpx;"
				title="支付宝支付" note="推荐使用支付宝支付">
					<radio slot="right" value="1" color="#FD6801"/>
				</uni-list-item>
			</label>
			<label for="">
				<uni-list-item showExtraIcon 
				leftIcon="icon-weixinzhifu text-success"
				 leftIconStyle="font-size:60rpx;"
				title="微信支付">
					<radio slot="right" value="2" color="#FD6801"/>
				</uni-list-item>
			</label>
			
			<view class="main-bg-color mt-3 text-white font-md w-100 p-2 rounded text-center" hover-class="main-bg-hover-color"
			@click="submit">
				确认支付
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
				
			}
		},
		methods: {
			submit(){
				uni.navigateTo({
					url: '../pay-result/pay-result',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
