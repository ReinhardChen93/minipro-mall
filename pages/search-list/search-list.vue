<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;">
				<text class="iconfont icon-sousuo mx-2"></text>
				智能积木
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center" @click="search"><text class="">搜索</text></view>
		</view>
		<!-- #endif -->
		<view class="d-flex border-top border-bottom a-center" style="height: 100upx;">
			<view class="flex-1 d-flex a-center j-center"
			v-for="(item,index) in screen.list" :key="index"
			@click="changeScreen(index)">
				<text :class="screen.currentIndex === index ? 'main-text-color' : 'text-muted'">{{item.name}}</text>
				<view class="">
					<view class="iconfont icon-paixu-shengxu line-h0"
					:class="item.status===1?'main-text-color':'text-light-muted'"></view>
					<view class="iconfont icon-paixu-jiangxu line-h0"
					:class="item.status===2?'main-text-color':'text-light-muted'"></view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center" @tap="showRight = true">
				<text class="main-text-color">筛选</text>
			</view>
			
		</view>
		<!-- 右侧滑出 -->
		<uni-drawer :visible="showRight" mode="right" @close="showRight = false">
			<card headTitle="服务" :headerBorderBottom="false" :headTitleWeight="false">
				<view class="row">
					<view class="span24-8 px-2 mb-2" v-for="(item, index) in label.list" :key="index">
						<view class="rounded px-2 py-1 border  font-md text-center"
						:class="label.selected === index ? 'radio-active' : 'border-light-secondary'"
						@tap="changeRadio(index)">
							{{item.name}}
						</view>
					</view>
				</view>
			</card>
			<!-- 底部按钮 -->
			<view class="d-flex position-fixed bottom-0 right-0 w-100 border-top border-light-secondary">
				<view class="flex-1 main-bg-color text-white font-md py-2 text-center" 
				hover-class="main-bg-hover-color" @click="confirm">确定</view>
				<view class="flex-1 font-md py-2 text-center"
				hover-class="bg-light-secondary" @click="reset">重置</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue'
	import card from '@/components/common/card.vue'
	export default {
		components:{
			uniDrawer,
			card
		},
		data() {
			return {
				showRight: false,
				screen:{
					currentIndex:0,
					list:[
						{ name:"综合",status:1,key:"all" },
						{ name:"销量",status:0,key:"sale_count" },
						{ name:"价格",status:0,key:"min_price" },
					]
				},
				label:{
					selected:0,
					list:[
						{name:"选择一"},
						{name:"选择二"},
						{name:"选择三"}
					]
				}
			};
		},
		methods:{
			changeScreen(index){
				// 判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if(oldIndex === index){
					return oldItem.status = oldItem.status === 1 ? 2 : 1
				}
				let newItem = this.screen.list[index]
				// 移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				// 增加新的激活状态
				newItem.status = 1
			},
			changeRadio(index){
				this.label.selected = index
			}
		}
	}
</script>

<style>
	.radio-active{
		color: #EB7320 !important;
		border-color: #EB7320 !important;
		color: #EB7320 !important;
	}
</style>
