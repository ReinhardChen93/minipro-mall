<template>
<view class="" style="box-sizing: border-box;">
	<!-- #ifdef MP -->
	<!-- 自定义导航 -->
	<view class="d-flex a-center  ml-1" style="height: 90rpx;box-sizing: border-box;" @click="search">
		<!-- 左边 -->
		
		<!-- 中间 -->
		<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;">
			<text class="iconfont icon-sousuo mx-2"></text>
			智能积木
		</view>
		<!-- 右边 -->
		<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
	</view>
	<!-- #endif -->
	<view class="d-flex border-top" 
	:style="'height:' + scrollH + 'px'" 
	style="box-sizing: border-box;">
		<scroll-view scroll-y="true" style="flex: 1;box-sizing: border-box;height: 100%;" 
		class="border-light-secondary border-right py-1">
			<view class="border-bottom border-light-secondary py-1 left-scroll-item"
			hover-class="bg-light-secondary"
			v-for="(item,index) in cate" :key="index"
			@tap="changeCate(index)">
				<view class="d-flex py-1 a-center j-center"
				:class="activeIndex === index ? 'class-active' : ''">
					<text class="font-md text-muted">{{item.name}}</text>
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.5;box-sizing: border-box;height: 100%;">
			<view class="row right-scroll-item" v-for="(item,index) in list" :key="index">
				<view class="span24-8 text-center py-2"
				v-for="(items,indexs) in item.list" :key="indexs">
					<image :src="items.src"
					style="width: 120upx;height: 120upx;"></image>
					<text class="d-block">{{items.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</view>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				scrollH:500,
				// 当前选中的分类
				activeIndex:0,
				cate:[],
				list:[],
				leftDomsTop:[],
				rightDomsTop:[]
			}
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: res => {
					// 转换单位 px->upx
					this.scrollH = res.windowHeight - uni.upx2px(80);
				}
			})
			this.getData()
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			let left = []
			let right = []
			query.selectAll('.left-scroll-item').boundingClientRect(data => {
			  // console.log("得到布局位置信息" + JSON.stringify(data));
			  // console.log("节点离页面顶部的距离为" + data.top);
			  left = data.map(v=>{
				  return v.top
			  })
			  this.leftDomsTop = left
			}).exec();
			query.selectAll('.right-scroll-item').boundingClientRect(data => {
			  // console.log("得到布局位置信息" + JSON.stringify(data));
			  // console.log("节点离页面顶部的距离为" + data.top);
			  right = data.map(v=>{
				  return v.top
			  })
			  this.rightDomsTop = right
			}).exec();
		},
		methods:{
			search(){
				uni.navigateTo({
				    url: '/pages/search-list/search-list'
				});
			},
			getData(){
				for ( let i= 0;i<20;i++){
					this.cate.push({
						name:"分类"+ i
					})
					this.list.push({
						list:[]
					})
				}
				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 21; j++) {
						this.list[i].list.push({
							src:'../../static/images/demo/cate_01.png',
							name:`分类${i}-商品${j}`,
						})
					}
				}
			},
			changeCate(index){
				this.activeIndex = index
			}
		}
	}
</script>

<style scoped>
	.class-active{
		border-left: 8upx solid #FD6801;
		color: #FD6801 !important;
	}
</style>
