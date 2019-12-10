<template>
	<view class="row j-center py-2 m-2">
		<block v-for="(item,index) in resdata" :key="index">
			<view class="span-4 d-flex flex-column j-center a-center py-1" @tap="event(event)">
				<image :src="item.src"
				style="height: 60upx;width: 60upx;"
				 mode="widthFix"></image>
				 <text class="font-sm">{{item.text}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			resdata:Array
		},
		methods:{
			event(item){
				console.log(item)
			}
		}
	}
</script>

<style>
</style>
