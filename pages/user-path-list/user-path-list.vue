<template>
	<view>
		<!-- #ifdef MP -->
			<uni-nav-bar title="地址栏" :statusBar="false"
			 :shadow="false" @click-right="goEdit" :fixed="true">
			 <view slot="right">
				 <text class="iconfont icon-jia"></text>
			 </view>
			 </uni-nav-bar>
		<!-- #endif -->
		<block v-for="(item,index) in list" :key="index">
			<uni-swipe-action :options="options" 
			@click="bindClick($event,index)">
			<uni-list-item @click="choose(item)">
				<view class="text-secondary">
					<view class="d-flex a-center">
						<text class="main-text-color">{{item.name}}</text>
						{{item.phone}}
						<text class="main-text-color"
						v-if="item.isdefault">[默认]</text>
					</view>
					<view>{{item.path}}</view>
					<view>{{item.detailPath}}</view>
				</view>
			</uni-list-item>
			</uni-swipe-action>
		</block>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import uniSwipeAction from "@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue"
	import {mapState,mapMutations} from "vuex"
	export default {
		components: {
			uniNavBar,
			uniListItem,
			uniSwipeAction
		},
		data() {
			return {
				isChoose:false,
				options: [{
					text: '修改',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			}
		},
		computed: {
			...mapState({
				list:state=>state.path.list
			}),
		},
		// 监听导航栏按钮点击
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
					url: '../user-path-edit/user-path-edit'
				});
			}
		},
		onLoad(e) {
			if (e.type === 'choose') {
				this.isChoose = true
			}
		},
		methods: {
			goEdit(){
				uni.navigateTo({
					url: '../user-path-edit/user-path-edit'
				});
			},
			...mapMutations(['delPath']),
			bindClick(value,i) {
				switch (value.index){
					case 0: // 修改
					let obj = JSON.stringify({
						index:i,
						item:this.list[i]
					})
					setTimeout(()=> {
						uni.navigateTo({
							url: '../user-path-edit/user-path-edit?data='+obj,
						});
					},50);
						break;
					case 1: // 删除
					uni.showModal({
						content: '要删除该收货地址吗？',
						success: (res)=> {
							if (res.confirm) {
								this.delPath(i)
								uni.showToast({
									title: '删除成功'
								});
							} 
						}
					});
						break;
				}
			},
			// 选择收货地址
			choose(item){
				if (this.isChoose) {
					// 通知订单提交页修改收货地址
					uni.$emit('choosePath',item)
					// 关闭当前页面
					uni.navigateBack({
						delta: 1
					});
				}
			}
		}
	}
</script>

<style>

</style>
