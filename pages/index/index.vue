<template>
	<view>
		<!-- 轮播图组件 -->
		<swiper-image :resdata="swiper"></swiper-image>
		<!-- 首页分类 -->
		<index-nav :resdata="indexnavs"></index-nav>
		<!-- 全局分割线 -->
		<divider></divider>
		<!-- 左边w:373 h:530 -->
		<three-adv :resdata="threeAdv"></three-adv>
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue"
	import indexNav from "@/components/index/index-nav.vue"
	import threeAdv from "@/components/index/three-adv.vue"
	export default {
		components:{
			swiperImage,
			indexNav,
			threeAdv
		},
		data() {
			return {
				swiper:[
					{
						src:"../../static/images/demo/demo4.jpg"
					},
					{
						src:"../../static/images/demo/demo4.jpg"
					},
					{
						src:"../../static/images/demo/demo4.jpg"
					},
					{
						src:"../../static/images/demo/demo4.jpg"
					}
				],
				indexnavs:[
					{
						src:"/static/images/indexnav/1.png",
						text:"新品发布"
					},
					{
						src:"/static/images/indexnav/2.gif",
						text:"小米众筹"
					},
					{
						src:"/static/images/indexnav/3.gif",
						text:"以旧换新"
					},
					{
						src:"/static/images/indexnav/4.gif",
						text:"一分换团"
					},
					{
						src:"/static/images/indexnav/5.gif",
						text:"超值特卖"
					},
					{
						src:"/static/images/indexnav/6.gif",
						text:"小米秒杀"
					},
					{
						src:"/static/images/indexnav/7.gif",
						text:"真心想买"
					},
					{
						src:"/static/images/indexnav/8.gif",
						text:"电视热卖"
					},
					{
						src:"/static/images/indexnav/9.gif",
						text:"加点热卖"
					},
					{
						src:"/static/images/indexnav/10.gif",
						text:"米粉卡"
					}
				],
				threeAdv:{
					big:{
						src:"/static/images/demo/demo1.jpg"
					},
					smalltop:{
						src:"/static/images/demo/demo2.jpg"
					},
					smallbottom:{
						src:"/static/images/demo/demo2.jpg"
					}
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
