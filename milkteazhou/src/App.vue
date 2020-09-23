<template>
	<div id="app">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/">菜单</van-tabbar-item>
			<van-tabbar-item icon="search" to="/choiceness">精选</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/shoppcar">购物车</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>
<style>
	#app {
		font-family: "microsoft yahei";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
