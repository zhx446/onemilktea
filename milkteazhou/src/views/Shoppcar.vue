<template>
	<div class="shoppcar">
		<!-- 导航栏 -->
		<div class="shoppcar-nav">
			<van-nav-bar :border="false">
				<template #title>
					<img src="../assets/milktea.png" width="58px" height="23.5px" />
				</template>
				<template #right>
					<img src="../assets/icon_more.png" width="19.5px" height="18px" class="nav-icon-more"/>
				</template>
			</van-nav-bar>
		</div>
		<div class="shoppcar-banner">
			<img src="../assets/shoppcar_banner.png" width="355px" height="100.5px"/>
		</div>
		<!-- 订单列表 -->
		<div class="shoppcar-order">
			<div class="order-top">
				<div class="order-title">饮品订单</div>
				<img src="../assets/icon_delete.png" width="12.5px" height="13.5px"/>
			</div>
			<div class="order-content">
				<div class="order-left">
					<div class="order-show">
						<img src="../assets/order_circle.png" width="14.5px" height="14.5px"/>
						<img src="../assets/order-milktea.png" />
						<div class="order-show-text">
							<div>醉心黑摩卡</div>
							<div>大/冰/默认奶油</div>
							<div>￥18.00</div>
						</div>
					</div>
					<div class="order-choice">
						<van-stepper v-model="value" theme="round" button-size="22" disable-input />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../js/shoppcar.js"></script>
<style src="../css/shoppcar.css" scoped></style>
