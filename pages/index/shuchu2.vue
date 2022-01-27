<template>
	<view>
		<view class="txt">hello world!</view>
		<soure :url="url"></soure>
	</view>

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

	.txt {
		font: bold 200% Consolas, Monaco, monospace; // 等宽字体
		width: 12ch; // 文本宽度
		overflow: hidden;
		white-space: nowrap;
		border-right: 2px solid;
		animation: typing 8s steps(12); // 包含空格和符号，一共12个字符
	}
</style>
