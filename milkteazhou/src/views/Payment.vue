<template>
	<div class="payment">
		<!-- 顶部导航栏 -->
		<div class="payment-nav">
			<van-nav-bar title="确认订单" left-arrow @click-left="toBack" class="payment-nav-bg">
				<template #left>
					<van-icon name="arrow-left" color="#423026" size="18px"/>
				</template>
			</van-nav-bar>
		</div>
		<div class="payment-content">
			<!-- 地址 -->
			<div class="payment-address">
				<div class="address-left">
					<img src="../assets/icon-pay-location.png" width="26.5px" height="33.5px" />
					<div class="address-text">
						<div>南宁东盟企业总部基地店</div>
						<div>总部路3号中国-东盟科技企业......</div>
					</div>
				</div>
				<div class="address-right">自提</div>
			</div>
		</div>
	</div>
</template>

<script src="../js/payment.js"></script>
<style src="../css/payment.css" scoped></style>
