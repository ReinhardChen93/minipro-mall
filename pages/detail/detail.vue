<template>
	<view>
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" :height="690" preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
		<!-- 滚动商品特性 w170*h110 -->
		<scrollAttrs :baseAttrs="baseAttrs"></scrollAttrs>
		<!-- 属性选择 -->
		<view class="p-2">
			<view class="rounded border bg-light-secondary">
				<unit-list-item @click="show()">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
				</unit-list-item>
				<unit-list-item>
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">云南省 昆明市 五华区</text>
						<text class="main-text-color">现配</text>
					</view>
				</unit-list-item>
				<unit-list-item extraWidth="15%">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color mr-1"></view>
							小米自营
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color mr-1"></view>
							小米发货
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color mr-1"></view>
							七天无理由退货
						</view>
					</view>
				</unit-list-item>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<scroll-comments :comments="comments"></scroll-comments>
		<!-- 商品详情 -->
		<view class="py-4">
			<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate" ></u-parse>
		</view>
		<!-- 热门推荐 -->
		<card headTitle="热门推荐" :headTitleWeight="false"
		:headBorderBottom="false">
			<view class="row j-sb">
				<common-list v-for="(item,index) in hotList"
				:key="index" :item="item" :index="index">
				</common-list>
			</view>
		</card>
		<!-- 底部操作条 -->
		<bottom-btn></bottom-btn>
		<!-- 弹出框 -->
		<common-popup :popupClass="popupClass" @hide="hide">
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/images/demo/list/1.jpg" mode="widthFix"
				style="height: 180rpx;width: 180rpx;" class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">2365</price>
					<text class="d-block">火焰红 64G 标配</text>
				</view>
			</view>
			<scroll-view scroll-y="true" style="height: 660rpx;">
				<card :headTitle="item.title" :headTitleWeight="false" v-for="(item,index) in label" :key="index" :headBorderBottom="false">
					<cc-radio-group :label="item" :selected.sync="item.selected"></cc-radio-group>
				</card>
			</scroll-view>
		</common-popup>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import baseInfo from '@/components/detail/base-info.vue'
	import scrollAttrs from '@/components/detail/scroll-attrs.vue'
	import unitListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import scrollComments from '@/components/detail/scroll-comments.vue'
	import uParse from "@/components/uni-ui/uParse/src/wxParse.vue"
	import card from '@/components/common/card.vue'
	import commonList from "@/components/common/common-list.vue"
	import bottomBtn from '@/components/detail/bottom-btn.vue'
	import commonPopup from '@/components/common/common-popup.vue'
	import price from '@/components/common/price.vue'
	import ccRadioGroup from '@/components/common/radio-group.vue'
	var htmlString = `
	<p>
		<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
		<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
		<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
		<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
		<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
		<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
		<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
	</p>
	    `
	export default {
		components:{
			swiperImage,
			baseInfo,
			scrollAttrs,
			unitListItem,
			scrollComments,
			uParse,
			card,
			commonList,
			bottomBtn,
			commonPopup,
			price,
			ccRadioGroup
		},
		data() {
			return {
				popupClass:"none",
				comments:[
					{
						userpic:"/static/images/demo/demo6.jpg",
						username:"joker",
						creat_time:"2019-07-31",
						goods_num:"222",
						context:"评论内容",
						imglist:["/static/images/demo/cate_09.png","/static/images/demo/cate_09.png","/static/images/demo/cate_09.png"]
					},
					{
						userpic:"/static/images/demo/demo6.jpg",
						username:"joker",
						creat_time:"2019-07-31",
						goods_num:"222",
						context:"评论内容",
						imglist:["/static/images/demo/cate_09.png","/static/images/demo/cate_09.png","/static/images/demo/cate_09.png"]
					},
					{
						userpic:"/static/images/demo/demo6.jpg",
						username:"joker",
						creat_time:"2019-07-31",
						goods_num:"222",
						context:"评论内容",
						imglist:["/static/images/demo/cate_09.png","/static/images/demo/cate_09.png","/static/images/demo/cate_09.png"]
					}
				],
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
				context:htmlString,
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
				hotList:[
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
						cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					}
				],
				label:[{
					title:"颜色",
					selected:0,
					list:[
						{name:"黄色"},
						{name:"蓝色"},
						{name:"白色"},
					]
				}]
			}
		},
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
			},
			hide(){
				this.popupClass = 'hide'
				setTimeout(()=>{
					this.popupClass = 'none'
				}, 200);
			},
			show(){
				this.popupClass = 'show'
			},
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
			}
		}
	}
</script>

<style>
.uparse .p{ padding: 0!important; }
.uparse view,.uparse uni-view{ line-height: 0!important; }
</style>
