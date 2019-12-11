<template>
	<view style="width: 372.5upx;">
			<image :src="item.cover" mode="widthFix"></image>
		
			<view class="p-2">
				<view class="font-md">{{item.title}}</view>
				<text class="d-block font text-light-muted">
					{{item.desc}}
				</text>
				<view class="d-flex my-1">
					<price>{{item.oprice}}</price>
					<view class="font-sm text-light-muted line-through ml-1 a-self-end line-h">
						¥{{item.pprice}}
					</view>
				</view>
			</view>
		</view>
</template>
<script>
		import price from "@/components/common/price.vue"
	export default{
		components:{
			price
		},
		props:{
			item:Object,
			index:Number
			
		}
	}
</script>