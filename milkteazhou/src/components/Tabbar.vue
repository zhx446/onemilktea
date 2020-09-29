<template>
	<div class="tabbar">
		<!-- 底部导航栏 -->
		<van-tabbar route style="height: 48px;width: 100%;" inactive-color="#433127" active-color="#433127" :border="false">
			<van-tabbar-item to="/">
				<template #icon>
					<img src="../assets/tabbar_index.png" style="width: 41px;height: 41px;" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item size="20" :to="item.tabbarRouter" v-for="item in tabbarList" :key="item.id">
				{{item.tabbarText}}
				<template #icon="props">
					<img :src="props.active ? item.tabbarActive : item.tabbarInactive" :style="item.tabbarSize" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				tabbarList: [{
					tabbarRouter: '/menu',
					tabbarText: '菜单',
					tabbarActive: require('../assets/tabbar_menu.png'),
					tabbarInactive: require('../assets/tabbar-menu-no.png'),
					tabbarSize: {
						'width': '25.5px',
						'height': '26.5px'
					}

				}, {
					tabbarRouter: '/choiceness',
					tabbarText: '精选',
					tabbarActive: require('../assets/tabbar_choiceness.png'),
					tabbarInactive: require('../assets/tabbar-choiceness-no.png'),
					tabbarSize: {
						'width': '29.5px',
						'height': '29px'
					}
				}, {
					tabbarRouter: '/shoppcar',
					tabbarText: '购物车',
					tabbarActive: require('../assets/tabbar_shoppcar.png'),
					tabbarInactive: require('../assets/tabbar-shoppcar-no.png'),
					tabbarSize: {
						'width': '37.5px',
						'height': '29px'
					}
				}, {
					tabbarRouter: '/mine',
					tabbarText: '我的',
					tabbarActive: require('../assets/tabbar_mine.png'),
					tabbarInactive: require('../assets/tabbar-mine-no.png'),
					tabbarSize: {
						'width': '27.5px',
						'height': '28.5px'
					}
				}]
			};
		},
	};
</script>

<style>
</style>
