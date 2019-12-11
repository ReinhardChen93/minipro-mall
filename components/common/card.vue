<template>
	<view class="card">
		<view v-if="showhead" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>
			</slot>
		</view>
		<view>
			<image v-if="bodyCover" :src="bodyCover" mode="widthFix"></image>
			<slot name="body"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// 头部标题
			headTitle:{
				type:String,
			},
			// 封面图
			bodyCover:{
				type:String,
			},
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style>
</style>
