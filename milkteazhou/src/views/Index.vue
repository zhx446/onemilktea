<template>
	<div class="index">
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
		<div class="index-carousel">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="../assets/index-banner3.png" width="100%" height="210.5px" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../assets/index-banner2.png" width="100%" height="210.5px" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../assets/index-banner.png" width="100%" height="210.5px" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="index-content">
			<!-- 轮播 导航 -->
			<div class="index-nav">
				<div class="nav-top">
					<div class="nav-top-left">
						<div>茶的碰撞</div>
						<div class="enlist-text">THE COLLISION OF TEA</div>
					</div>
					<div class="top-nav-right">
						<div class="grass-bg">
							<div>种草达人</div>
							<div class="enlist-text">GRASS GROWER</div>
						</div>
						<div class="cooperation-bg">
							<div>合作专区</div>
							<div class="enlist-text">COOPERATION ZONE</div>
						</div>
					</div>
				</div>
				<div class="nav-bottom">
					<div class="vip-bg">
						<div>会员权益</div>
						<div class="enlist-text">MEMBERSHIP INTERESTS</div>
					</div>
					<div class="coupons-bg">
						<div>优惠券</div>
						<div class="enlist-text">COUPONS</div>
					</div>
				</div>
			</div>
			<!-- 新人活动 -->
			<div class="new-activity">
				<div class="caption-text">
					<div>新人活动：</div>
					<div>Newcomer activities</div>
				</div>
				<div class="caption-text-right">Newcomer</div>
			</div>
			<van-swipe :loop="false" :width="121" class="activity-swipe" :show-indicators="false">
				<van-swipe-item v-for="item in activityList" :key="item.id" class="activity-for">
					<div class="activity-list">
						<img :src="item.milkteaImg" width="121px" height="112px" />
						<div class="list-title">{{item.milkTitle}}</div>
						<div class="list-tip">新人价</div>
						<div class="activity-price">
							<div>￥{{item.price}}</div>
							<div>￥{{item.priceYuan}}</div>
							<div></div>
						</div>
					</div>
				</van-swipe-item>
			</van-swipe>
			<!-- 本季推荐栏 -->
			<div class="season-recom">
				<div class="season-left">
					<img src="../assets/icon-index-milktea.png" width="13.5px" height="18.5px" />
					<div class="season-title">
						<div><span>本季</span>推荐：</div>
						<div>Newcomer activities</div>
					</div>
				</div>
				<div class="caption-text-right">Seasonal</div>
			</div>
			<!-- banner -->
			<img src="../assets/index-banner4.png" width="100%" height="100.5px" class="index-banner" />
			<div class="milktea-wrap">
				<milktea v-for="item in milkteaList" :key="item.id" :milkteaImg="item.milkImg" :milkTitle="item.coffeeTea"
				:milkEnglist="item.coffeeEng" :milkPrice="item.coffeePrice"></milktea>
			</div>

			<!-- 人气推荐栏 -->
			<div class="season-recom">
				<div class="season-left">
					<img src="../assets/icon-index-milktea.png" width="13.5px" height="18.5px" />
					<div class="season-title">
						<div><span>人气</span>推荐：</div>
						<div>Popularity Recommend</div>
					</div>
				</div>
				<div class="caption-text-right">Popularity</div>
			</div>
			<!-- banner -->
			<img src="../assets/index-banner2.png" width="100%" height="127.5px" class="index-banner" />
			<div class="milktea-wrap">
				<milktea v-for="item in milkteaList2" :key="item.id" :milkteaImg="item.milkImg2" :milkTitle="item.coffeeTea2"
				:milkEnglist="item.coffeeEng2" :milkPrice="item.coffeePrice2"></milktea>
			</div>

			<!-- 博主推荐栏 -->
			<div class="season-recom">
				<div class="season-left">
					<img src="../assets/icon-index-milktea.png" width="13.5px" height="18.5px" />
					<div class="season-title">
						<div><span>博主</span>推荐：</div>
						<div>Blogger Recommend</div>
					</div>
				</div>
				<div class="caption-text-right">blogger</div>
			</div>
			<!-- banner -->
			<img src="../assets/index-banner.png" width="100%" height="127.5px" class="index-banner" />
			<div class="milktea-wrap">
				<milktea v-for="item in milkteaList3" :key="item.id" :milkteaImg="item.milkImg3" :milkTitle="item.coffeeTea3"
				:milkEnglist="item.coffeeEng3" :milkPrice="item.coffeePrice3"></milktea>
			</div>
		</div>
		<!-- 底部二维码 -->
		<div class="index-code">
			<img src="../assets/milktea.png" width="90.5px" height="36.5px" />
			<img src="../assets/index-code.png" width="103.5px" height="103.5px" class="code-img"/>
			<div>
				<img src="../assets/wechat.png" width="34.5px" height="34.5px" />
				<img src="../assets/QQ.png" width="34.5px" height="34.5px" class="code-wechat"/>
			</div>
			<div>版权所有：lalalalal餐饮管理有限公司
				地址：广西啦啦啦啦啦啦咩咩咩咩米米地址</div>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script src="../js/index.js"></script>
<style src="../css/index.css" scoped></style>
