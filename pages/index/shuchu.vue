<template>
	<view>你看我这文字是不是在动画的输出啊。。。</view>
</template>

<script>
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	view {
		line-height: 100rpx;
		width: 750rpx;
		font-size: 35rpx;
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		animation: typing 8s;
	}
</style>
