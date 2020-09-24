<template>
	<div id="app">
		<!-- 底部导航栏 -->
		<van-tabbar :route="true" style="height: 48px;" inactive-color="#433127" :border="false">
			<van-tabbar-item icon="home-o" to="/">
				<template #icon>
					<img src="./assets/tabbar_index.png" style="width: 41px;height: 41px;" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item icon="home-o" size="20" to="/menu">
				菜单
				<template #icon>
					<img src="./assets/tabbar_menu.png" style="width: 19.5px;height: 23.5px;" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item icon="search" to="/choiceness">
				精选
				<template #icon>
					<img src="./assets/tabbar_choiceness.png" style="width: 29.5px;height: 26px;" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/shoppcar">
				购物车
				<template #icon>
					<img src="./assets/tabbar_shoppcar.png" style="width: 35px;height: 27px;" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/mine">
				我的
				<template #icon>
					<img src="./assets/tabbar_mine.png" style="width: 25px;height: 27px;" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>
<script>
export default {};
</script>
<style>
#app {
	font-family: 'microsoft yahei';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #212121;
}
</style>
