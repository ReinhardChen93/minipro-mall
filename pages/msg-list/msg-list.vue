<template>
	<view class="p-2">
		<view class="mb-2 p-2 bg-white rounded" hover-class="bg-light"
		v-for="(item,index) in list" :key="index"
		@click="open(item)">
			<view class="text-dark font-md">{{item.title}}</view>
			<view class="font text-light-muted">
				{{item.desc}}
			</view>
			<view class="font text-light-muted">{{item.create_time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:"后台驾鹤西去",
						desc:"后台驾鹤西去,没得数据",
						create_time:"9月份"
					},
					{
						title:"后台似乎还没回来",
						desc:"数据就自己凑活着想象吧",
						create_time:"9月份"
					}
				]
			}
		},
		methods: {
			open(item){
				uni.navigateTo({
					url: '../msg-detail/msg-detail?detail='+JSON.stringify(item),
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
