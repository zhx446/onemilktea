<template>
	<div class="mine">
		<!-- 顶部导航栏 -->
		<div class="mine-nav">
			<van-nav-bar :border="false" :fixed="true" style="background-color: #f6ae66;">
				<template #title>
					<img src="../assets/milktea.png" width="58px" height="23.5px" />
				</template>
				<template #right>
					<img src="../assets/icon_more.png" width="16px" height="16px" class="nav-icon-more" />
				</template>
			</van-nav-bar>
		</div>
		<!-- 用户信息栏 -->
		<div class="mine-msg">
			<div class="msg-left">
				<img src="../assets/begin-img.png" width="53.5px" height="59px" />
				<div class="mine-name">
					<div class="name">
						<div>小小昵称</div>
						<div>壹杯新人</div>
					</div>
					<div class="msg-id">
						ID：666666
						<img src="../assets/icon-milk.png" width="14px" height="18px" />
					</div>
				</div>
			</div>
			<div class="msg-right">
				<img src="../assets/punch-card.png" width="27.5px" height="41px" />
				<div>打卡</div>
			</div>
		</div>
		<div class="mine-content">
			<!-- 卡劵栏 -->
			<div class="stock-list">
				<div class="balance">
					<div>账户余额</div>
					<div>6.66元</div>
				</div>
				<div class="mine-card integral">
					<div>积分商城</div>
					<div>88积分</div>
				</div>
				<div class="mine-card red-packet">
					<div>红包卡券</div>
					<div>3张</div>
				</div>
			</div>
			<!-- 订单栏 -->
			<div class="mine-order">
				<van-cell is-link value="查看所有订单" :border="false" class="mine-order-title">
					<template #title>
						<div class="all-title">全部订单</div>
					</template>
				</van-cell>
				<van-grid :border="false" :column-num="5">
					<van-grid-item text="待付款">
						<template #icon>
							<img src="../assets/mine-icon.png" width="52.5px" height="43px" />
						</template>
					</van-grid-item>
					<van-grid-item icon="photo-o" text="代发货">
						<template #icon>
							<img src="../assets/mine-icon2.png" width="52.5px" height="43px" />
						</template>
					</van-grid-item>
					<van-grid-item icon="photo-o" text="已发货">
						<template #icon>
							<img src="../assets/mine-icon4.png" width="52.5px" height="43px" />
						</template>
					</van-grid-item>
					<van-grid-item icon="photo-o" text="评价">
						<template #icon>
							<img src="../assets/mine-icon3.png" width="52.5px" height="43px" />
						</template>
					</van-grid-item>
					<van-grid-item icon="photo-o" text="退款/售后">
						<template #icon>
							<img src="../assets/mine-icon5.png" width="52.5px" height="43px" />
						</template>
					</van-grid-item>
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script src="../js/mine.js"></script>
<style src="../css/mine.css" scoped></style>
