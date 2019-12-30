<template>
	<view>
		
		<divider></divider>
		<card headTitle="申请售后产品" cardStyle="background:#FFFFFF">
			<view class="d-flex a-center px-3 py-2">
				<image src="../../static/images/demo/cate_01.png" mode="widthFix" style="width: 100rpx;height: 100rpx;"></image>
				<view class="flex-1 ml-3">
					<view class="font-md">
						商品名称
					</view>
					<view class="font-md text-light-muted">维修服务:剩余110</view>
				</view>
			</view>
		</card>
		<divider></divider>
		
		<card headTitle="服务类型" bodyPadding cardStyle="background:#FFFFFF">
			<cc-radio-group :label="label1" 
			:selected.sync='label1.selected'
			></cc-radio-group>
		</card>
		
		<divider></divider>
		
		<card headTitle="问题描述" bodyPadding cardStyle="background:#FFFFFF">
			<view class="position-relative">
				<textarea class="border rounded p-2" placeholder="请详细描述遇到的问题"
				v-model="content"
				:maxlength="200" style="width: 100%;height: 400rpx;box-sizing: border-box;"/>
				<view class="position-absolute text-light-muted font" style="right: 5rpx;bottom: 5rpx;">
					{{content.length}}/200
				</view>
			</view>

		</card>
		
		<view class="p-3">
			<view class="rounded main-bg-color text-white text-center font-md py-2" hover-class="main-bg-hover-color">下一步</view>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import ccRadioGroup from "@/components/common/radio-group.vue"
	
	export default {
		components:{
			card,
			ccRadioGroup
		},
		data() {
			return {
				content:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
