<template>
	<view>
		<view class="d-flex flex-column j-center a-center py-4 my-3">
			<image src="../../static/images/demo/cate_06.png" mode="widthFix" style="width: 100rpx;height: 100rpx;"></image>
			<text class="text-light-muted font-md">
				XXX商城 V1.0.1
			</text>
		</view>
		
		<view class="bg-white">
			<uni-list-item title="版本更新" showArrow></uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				
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
