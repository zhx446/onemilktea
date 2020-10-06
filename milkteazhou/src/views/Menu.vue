<template>
	<div class="menu">
		<!-- 顶部导航栏 -->
		<div class="menu-nav">
			<van-nav-bar :border="false" :fixed="true">
				<template #title>
					<img src="../assets/milktea.png" width="58px" height="23.5px" />
				</template>
				<template #right>
					<img src="../assets/icon-sreach.png" width="16px" height="16px" class="nav-icon-sreach" />
					<div class="nav-icon-line"></div>
					<img src="../assets/icon_more.png" width="16px" height="16px" class="nav-icon-more" />
				</template>
				<template #left>
					<img src="../assets/icon-location.png" width="9.5px" height="11.5px" />
					<div class="menu-city">南宁市</div>
				</template>
			</van-nav-bar>
		</div>
		<!-- banner -->
		<img src="../assets/menu-banner.png" width="100%" height="118px" class="shoppcar-banner" />
		<!-- 菜单栏 -->
		<div class="menu-order">
			<van-tree-select height="100%" :items="items" :main-active-index.sync="active" class="order-select">
				<template #content>
					<div class="menu-order-list" v-if="active === 0">
						<div class="list-title">经典奶茶</div>
						<div class="milktea-msg" v-for="item in menuList" :key="item.id">
							<img :src="item.milkImg" width="59.5px" height="55px" />
							<div class="msg-content">
								<div>{{item.milkTitle}}</div>
								<div>{{item.milkDes}}</div>
								<div>{{item.milkSell}}</div>
								<div><span class="msg-rmb">￥</span>{{item.milkMoney}}</div>
							</div>
							<div class="msg-right" @click="toDetail">选规格</div>
						</div>
					</div>
					<div class="menu-order-list" v-if="active === 1">
						<div class="list-title">茶的碰撞</div>
						<div class="milktea-msg" v-for="item in menuList2" :key="item.id">
							<img :src="item.milkImg2" width="59.5px" height="55px" />
							<div class="msg-content">
								<div>{{item.milkTitle2}}</div>
								<div>{{item.milkDes2}}</div>
								<div>{{item.milkSell2}}</div>
								<div><span class="msg-rmb">￥</span>{{item.milkMoney2}}</div>
							</div>
							<div class="msg-right">选规格</div>
						</div>
					</div>
					<div class="menu-order-list" v-if="active === 2">
						<div class="list-title">醇香奶茶</div>
						<div class="milktea-msg" v-for="item in menuList3" :key="item.id">
							<img :src="item.milkImg3" width="59.5px" height="55px" />
							<div class="msg-content">
								<div>{{item.milkTitle3}}</div>
								<div>{{item.milkDes3}}</div>
								<div>{{item.milkSell3}}</div>
								<div><span class="msg-rmb">￥</span>{{item.milkMoney3}}</div>
							</div>
							<div class="msg-right">选规格</div>
						</div>
					</div>
				</template>
			</van-tree-select>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script src="../js/menu.js"></script>
<style src="../css/menu.css" scoped></style>
