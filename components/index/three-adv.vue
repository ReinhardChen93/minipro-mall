<template>
	<view class="d-flex">
		<image :src="resdata[0].src" 
		lazy-load="" 
		style="width: 373upx;height: 530upx;border-right: 2upx solid #F5F5F5;" 
		@tap="event(resdata[0].src)"
		></image>
		<view class="d-flex flex-column">
			<image :src="resdata[1].src" style="width: 375upx; height: 264upx;border-bottom: 2upx solid #F5F5F5;"
			@tap="event(resdata[1].src)"></image>
			<image :src="resdata[2].src" 
			style="width: 375upx; height: 264upx;"
			@tap="event(resdata[2].src)"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			resdata:{
				type:Object
			}
		},
		methods:{
			event(obj){
				console.log(obj)
			}
		}
	}
</script>

<style>
</style>
