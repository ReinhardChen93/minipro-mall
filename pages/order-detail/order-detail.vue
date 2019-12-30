<template>
	<view>
		<!-- #ifdef MP -->
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 200rpx;">
			<view class="mb-3">
				<view class="font-lg">
					卖家已发货
				</view>
				<view class="font">
					还差7天10时自动确认
				</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">
					卖家已发货
				</view>
				<view class="font">
					还差7天10时自动确认
				</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		<!-- #endif -->
	
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-2">Reinhard</text>
				136****3119
			</view>
			<view class="text-light-muted font-md">
				云南省 昆明市 五华区
			</view>
		</view>
		
		<divider></divider>
		
		<view class="px-2">
			<block v-for="(item,index) in order_items" :key="index">
				<order-list-item :item="item" :index="index"></order-list-item>
			</block>
		</view>
		
		<divider></divider>
		
		<uni-list-item>
			<text class="font-md text-light-muted">商品总价</text>
			<view slot= "right" class="font-md text-light-muted">
				¥123.00
			</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md main-text-color">商品总价</text>
			<view slot= "right" class="font-md main-text-color">
				<price>123.00</price>
			</view>
		</uni-list-item>
		
		<divider></divider>
		
		<card headTitle="订单信息">
			<uni-list-item title="订单编号">
				<view slot= "right" class="font-md text-light-muted">
					65411123232
				</view>
			</uni-list-item>
		</card>
	</view>
</template>

<script>
	import orderListItem from "@/components/order/order-list-item.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "@/components/common/price.vue"
	import card from "@/components/common/card.vue"
	export default {
		components:{
			orderListItem,
			uniListItem,
			price,
			card
		},
		data() {
			return {
				
			}
		},
		methods: {
			create_time:"2019-09-10 10:20",
			status:"已发货",
			order_items:[
				{
					cover:"/static/images/demo/demo6.jpg",
					title:"小米8",
					pprice:1999.00,
					attrs:"金色 标配",
					num:1
				},
				{
					cover:"/static/images/demo/demo6.jpg",
					title:"小米8",
					pprice:1999.00,
					attrs:"金色 标配",
					num:1
				},
				{
					cover:"/static/images/demo/demo6.jpg",
					title:"小米8",
					pprice:1999.00,
					attrs:"金色 标配",
					num:1
				}
			],
			total_num:3,
			total_price:299.00
		}
	}
</script>

<style>

</style>
