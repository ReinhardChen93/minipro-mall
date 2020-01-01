<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="search">
				<text class="iconfont icon-sousuo mx-2"></text>
				智能积木
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-richscan_icon"></text></view>
		</view>
		<!-- #endif -->
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view
				class="scroll-row-item px-3"
				:id="'tab' + index"
				style="height: 80rpx;line-height: 80rpx;"
				v-for="(item, index) in tabBars"
				:key="index"
				@click="changeTab(index)"
			>
				<text class="font-md" :class="tabIndex === index ? 'main-text-color border-bottom input-border-color' : ''">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height:' + scrollH + 'px'" @change="onChangeTab">
			<swiper-item v-for="(item, index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'" @scrolltolower="loadmore(index)">
					<view class="swiper-item">
						<block v-for="(list, listIndex) in item.list" :key="listIndex">
							<!-- 轮播图组件 -->
							<swiper-image v-if="list.type === 'swiper'" :resdata="list.data"></swiper-image>
							<!-- 首页分类 -->
							<template v-if="list.type === 'indexnavs'">
								<index-nav :resdata="list.data"></index-nav>
								<!-- 全局分割线 -->
								<divider></divider>
							</template>
							<!-- 三图广告 -->
							<template v-if="list.type === 'threeAdv'">
								<three-adv :resdata="list.data"></three-adv>
								<!-- 全局分割线 -->
								<divider></divider>
							</template>
							<template v-else-if="list.type === 'oneAdv'">
								<!-- 大图广告位 -->
								<card :headTitle="list.data.title" 
								:bodyCover="list.data.cover" />
							</template>
							<!-- <card>
								<block slot="title">每日精选</block>
								<image src="/static/images/demo/demo4.jpg"></image>
							</card> -->

							<view class="row j-sb" v-else-if="list.type === 'commonList'">
								<block v-for="(item2, index2) in list.data" :key="index2"><common-list :item="item2" :index="index2"></common-list></block>
							</view>
						</block>
					</view>
				
				<!-- 上拉加载更多 -->
					<view class="d-flex j-center text-light-muted font-md py-3">
						{{item.loadtext}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
let demoTabBars = [
	{
		name: '关注'
	},
	{
		name: '推荐'
	},
	{
		name: '体育'
	},
	{
		name: '热点'
	},
	{
		name: '财经'
	},
	{
		name: '娱乐'
	},
	{
		name: '军事'
	}
];

let demo1 = [
	{
		type: 'swiper',
		data: [
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			}
		]
	},
	{
		type: 'indexnavs',
		data: [
			{
				src: '/static/images/indexnav/1.png',
				text: '新品发布'
			},
			{
				src: '/static/images/indexnav/2.gif',
				text: '小米众筹'
			},
			{
				src: '/static/images/indexnav/3.gif',
				text: '以旧换新'
			},
			{
				src: '/static/images/indexnav/4.gif',
				text: '一分换团'
			},
			{
				src: '/static/images/indexnav/5.gif',
				text: '超值特卖'
			},
			{
				src: '/static/images/indexnav/6.gif',
				text: '小米秒杀'
			},
			{
				src: '/static/images/indexnav/7.gif',
				text: '真心想买'
			},
			{
				src: '/static/images/indexnav/8.gif',
				text: '电视热卖'
			},
			{
				src: '/static/images/indexnav/9.gif',
				text: '加点热卖'
			},
			{
				src: '/static/images/indexnav/10.gif',
				text: '米粉卡'
			}
		]
	},
	{
		type: 'threeAdv',
		data: {
			big: {
				src: '/static/images/demo/demo1.jpg'
			},
			smalltop: {
				src: '/static/images/demo/demo2.jpg'
			},
			smallbottom: {
				src: '/static/images/demo/demo2.jpg'
			}
		}
	},
	{
		type:"oneAdv",
		data:{
			title:"每日精选",
			cover:"/static/images/demo/demo4.jpg"
		}
	},
	{
		type: 'commonList',
		data: [
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			}
		]
	}
];

let demo2 = [
	{
		type: 'swiper',
		data: [
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			}
		]
	},
	{
		type: 'indexnavs',
		data: [
			{
				src: '/static/images/indexnav/1.png',
				text: '新品发布'
			},
			{
				src: '/static/images/indexnav/2.gif',
				text: '小米众筹'
			},
			{
				src: '/static/images/indexnav/3.gif',
				text: '以旧换新'
			},
			{
				src: '/static/images/indexnav/4.gif',
				text: '一分换团'
			},
			{
				src: '/static/images/indexnav/5.gif',
				text: '超值特卖'
			}
		]
	},
	{
		type: 'threeAdv',
		data: {
			big: {
				src: '/static/images/demo/demo1.jpg'
			},
			smalltop: {
				src: '/static/images/demo/demo2.jpg'
			},
			smallbottom: {
				src: '/static/images/demo/demo2.jpg'
			}
		}
	},
	{
		type: 'commonList',
		data: [
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			},
			{
				cover: '/static/images/demo/list/1.jpg',
				title: '米家空调',
				desc: '1.5匹变频',
				oprice: 1399,
				pprice: 2699
			}
		]
	}
];

import {index} from '@/common/api/index.js'

const getIndex = new index
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import threeAdv from '@/components/index/three-adv.vue';
import card from '@/components/common/card.vue';
import commonList from '@/components/common/common-list.vue';
export default {
	components: {
		swiperImage,
		indexNav,
		threeAdv,
		card,
		commonList
	},
	data() {
		return {
			scrollinto: 'tab1',
			scrollH: 500,
			tabIndex: 0,
			tabBars: [],
			newsitems: []
		};
	},
	onLoad() {
		// 获取可视区域高度
		uni.getSystemInfo({
			success: res => {
				// 转换单位 px->upx
				this.scrollH = res.windowHeight - uni.upx2px(80);
			}
		});
		// 初始化事件
		this.__init()
		getIndex.getIndexData().then((res)=>{
			console.log(res)
		})
		console.log(result)
	},
	methods: {
		__init(){
			// 获取顶部选显卡
			this.tabBars = demoTabBars
			//根据顶部选项卡生成页面
			let arr = []
			for (var i = 0; i < this.tabBars.length;i++){
				let obj = {
					list:[],
					// 1.上拉加载更多 2.加载中... 3.没有更多了
					loadtext:"上拉加载更多",
					// 首次加载：before加载前，after加载后，ing加载中

				}
				if(i === 0){
					obj.list = demo1
				}
				arr.push(obj)
			}
			this.newsitems = arr
		},
		changeTab(index) {
			if (this.tabIndex === index) {
				return;
			} else {
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
				this.addData()
			}
		},
		// 监听滑动列表
		onChangeTab(e) {
			//拿到当前索引
			this.changeTab(e.detail.current);
			let index = e.detail.current
			//请求数据库
			this.newsitems[index].list = demo2
		},
		// 加载数据
		addData(){
			let index = this.index
		},
		// 上拉加载更多
		loadmore(index){
			let item = this.newsitems[index]
			// 是否处于可加载状态
			if (item.loadtext !== '上拉加载更多') return;
			// 模拟加载
			item.loadtext = '加载中...'
			
			this.addData(()=>{
				uni.showToast({
					title:'加载成功'
				})
			})
		},
		search(){
			uni.navigateTo({
			    url: '/pages/search/search'
			});
		}
	}
};
</script>

<style></style>
