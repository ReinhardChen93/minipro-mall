<template>
	<view class="">
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
		<card headTitle="热门搜索" bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag v-for="(item,index) in hot" :key="index" :item="item"></color-tag>
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类">
			<color-tag v-for="(item,index) in hot" :key="index" :item="item" :color="false"></color-tag>
		</card>
		<!-- 分割线 -->
		<divider></divider>
		
		<card headTitle="搜索记录">
			<uni-list-item title="小米" :showArrow="false"></uni-list-item>
			<uni-list-item title="小米" :showArrow="false"></uni-list-item>
		</card>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import colorTag from '@/components/search/color-tag.vue'
	import divider from '@/components/common/divider.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			card,
			colorTag,
			divider,
			uniListItem
		},
		data() {
			return {
				hot: [
					{name:'领劵中心'},
					{name:'Redmi K20'},
					{name:'智能积木 越野四驱车'},
					{name:'手环 腕带'}
				]
			}
		},
		// 监听点击搜索
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
				    url: '/pages/search-list/search-list'
				});
			}
		},
		methods:{
			search(){
				uni.navigateTo({
				    url: '/pages/search-list/search-list'
				});
			}
		}
	}
</script>

<style>
</style>
