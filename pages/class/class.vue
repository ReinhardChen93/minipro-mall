<template>
	<view class="" style="box-sizing: border-box;">
		
		<loading :show="showLoading"></loading>
		
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
		<view class="d-flex border-top" :style="'height:' + scrollH + 'px'" style="box-sizing: border-box;">
			<scroll-view
				id="leftScroll"
				scroll-y="true"
				style="flex: 1;box-sizing: border-box;height: 100%;"
				class="border-light-secondary border-right py-1"
				:scroll-top="leftScrollTop"
			>
				<view
					class="border-bottom border-light-secondary py-1 left-scroll-item"
					hover-class="bg-light-secondary"
					v-for="(item, index) in cate"
					:key="index"
					@tap="changeCate(index)"
				>
					<view class="d-flex py-1 a-center j-center" :class="activeIndex === index ? 'class-active' : ''">
						<text class="font-md text-muted">{{ item.name }}</text>
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" 
			style="flex: 3.5;box-sizing: border-box;height: 100%;" 
			:scroll-top="rightScrollTop" :scroll-with-animation="true"
			@scroll="onRightScroll">
				<view class="row right-scroll-item" 
				v-for="(item, index) in list" :key="index">
					<view class="span24-8 text-center py-2" v-for="(items, indexs) in item.list" :key="indexs">
						<image :src="items.src" style="width: 120upx;height: 120upx;"></image>
						<text class="d-block">{{ items.name }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			scrollH:500,
			showLoading:true,
			// 当前选中的分类
			activeIndex:0,
			cate:[],
			list:[],
			leftDomsTop:[],
			rightDomsTop:[],
			rightScrollTop:0,
			leftScrollTop:0,
			cateItemHeight:0
		}
	},
	watch: {
		async activeIndex(newValue, oldValue) {
			// 获取scroll-view高度，scrollTop
			let data = await this.getElInfo({
				size:true,
				scrollOffset:true
			})
			let H = data.height
			let ST = data.scrollTop
			// 下边
			if ((this.leftDomsTop[newValue]+this.cateItemHeight) > (H+ST) ) {
				 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight - H
			}
			// 上边
			if (ST > this.cateItemHeight) {
				this.leftScrollTop = this.leftDomsTop[newValue]
			}
		}
	},
	onLoad() {
		// 获取可视区域高度
		uni.getSystemInfo({
			success: res => {
				// 转换单位 px->upx
				this.scrollH = res.windowHeight - uni.upx2px(90);
			}
		});
		this.getData();
	},
	onReady() {
		this.getElInfo({
			all:'left',
			size:true,
			rect:true
		}).then(data=>{
			this.leftDomsTop = data.map(v=>{
				this.cateItemHeight = v.height
				return v.top
			})
		})
		this.getElInfo({
			all:'right',
			size:false,
			rect:true
		}).then(data=>{
			this.rightDomsTop = data.map(v=> v.top)
		})
	},
	methods: {
		// 获取节点信息
		getElInfo(obj = {}){
			return new Promise((res,rej)=>{
				let option = {
					size:obj.size ? true : false,
					rect:obj.rect ? true : false,
					scrollOffset:obj.scrollOffset ? true : false,
				}
				const query = uni.createSelectorQuery().in(this);
				let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`):query.select('#leftScroll')
				q.fields(option,data => {
				  res(data)
				}).exec();
			})
		},
		search() {
			uni.navigateTo({
				url: '/pages/search-list/search-list'
			});
		},
		getData() {
			for (let i = 0; i < 20; i++) {
				this.cate.push({
					name: '分类' + i
				});
				this.list.push({
					list: []
				});
			}
			for (let i = 0; i < this.list.length; i++) {
				for (let j = 0; j < 21; j++) {
					this.list[i].list.push({
						src: '../../static/images/demo/cate_01.png',
						name: `分类${i}-商品${j}`
					});
				}
			}
			this.$nextTick(()=>{
				this.showLoading = false
				
			})
		},
		// 点击左边分类
		changeCate(index){
			this.activeIndex = index
			// 右边scroll-view滚动到对应区块
			console.log(this.rightDomsTop[index])
			this.rightScrollTop = this.rightDomsTop[index]
		},
		// 监听右边滚动事件
		async onRightScroll(e) {
			// console.log(e.detail.scrollTop)
			// 匹配当前scrollTop所处的索引
			this.rightDomsTop.forEach((v, k) => {
				if (v < e.detail.scrollTop + 3) {
					console.log(k)
					this.activeIndex = k;
					return false;
				}
			});
		}
	}
};
</script>

<style scoped>
.class-active {
	border-left: 8upx solid #fd6801;
	color: #fd6801 !important;
}
</style>
