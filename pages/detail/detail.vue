<template>
	<view>
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" :height="690" preview></swiper-image>
		<!-- 基础详情 -->
		<view class="p-2">
			<view class="font-lg">
				{{detail.title}}
			</view>
			<view class="font text-light-muted mb-3 line-h-sm">{{detail.desc}}</view>
			<price priceSize="font-lg" unitSize="font">{{detail.pprice}}</price>
		</view>
		<!-- 滚动商品特性 w170*h110 -->
		<view class="">
			<scroll-view scroll-x class="scroll-row">
				<view class="scroll-row-item" style="width: 170upx;height: 110upx;" v-for="(item,index) in baseAttrs" :key="index">
					<view class="d-flex flex-column a-center j-center">
						<view class="iconfont line-h-sm" :class="item.icon"></view>
						<view class="line-h-sm">{{item.title}}</view>
						<view class="text-light-muted font-sm line-h-sm">
							{{item.desc}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import price from '@/components/common/price.vue'
	export default {
		components:{
			swiperImage,
			price
		},
		data() {
			return {
				detail:{
					id:20,
					title:"小米MIX3 6GB+128GB",
					desc:"磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",
					cover:"/static/images/demo/list/1.jpg",
					pprice:3299,
					num:1,
					max:100
				},
				banners:[
					{src:"https://img2.ch999img.com/pic/product/800x800/20191213100255923.jpg"},
					{src:"https://img2.ch999img.com/pic/product/800x800/20190911103451441.jpg"},
					{src:"https://img2.ch999img.com/pic/product/800x800/20190911103452437.jpg"},
					{src:"https://img2.ch999img.com/pic/product/800x800/20190911103453437.jpg"}
				],
				baseAttrs:[
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"},
					{icon:"icon-cpu",title:"CUP",desc:"蛟龙845八核"}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
