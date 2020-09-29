<template>
	<div id="app">
		<!-- 一定要有这个 不然不显示页面 -->
		<router-view />
	</div>
</template>
<script>
</script>
<style>
	#app {
		font-family: 'microsoft yahei';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #212121;
		letter-spacing: 1.3px;
		margin-bottom: 50px;
	}
	
	.tabbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 1;
	} 
</style>
