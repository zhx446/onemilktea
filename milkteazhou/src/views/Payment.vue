<template>
	<div class="payment">
		<!-- 顶部导航栏 -->
		<div class="payment-nav">
			<van-nav-bar title="确认订单" left-arrow @click-left="toBack" class="payment-nav-bg">
				<template #left>
					<van-icon name="arrow-left" color="#423026" size="18px" />
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
			<!-- 订单列表 -->
			<div class="payment-order">
				<div class="payment-order-list" v-for="item in paymentList" :key="item.id">
					<div class="order-list-left">
						<img :src="item.milkImg" width="70px" height="67px" />
						<div class="left-title">
							<div>{{ item.milkTitle }}</div>
							<div>{{ item.milkText }}</div>
						</div>
					</div>
					<div class="order-list-num">x{{ item.num }}</div>
					<div class="order-list-right">
						<div>￥{{ item.milkPrice }}</div>
						<div>{{ item.milkTip }}</div>
					</div>
				</div>
			</div>

			<!-- 订单列表2 -->
			<div class="payment-order">
				<div class="payment-order-list" v-for="item in paymentList2" :key="item.id">
					<div class="order-list-left">
						<img :src="item.milkImg2" width="70px" height="67px" />
						<div class="left-title">
							<div>{{ item.milkTitle2 }}</div>
							<div>{{ item.milkText2 }}</div>
						</div>
					</div>
					<div class="order-list-num">x{{ item.num2 }}</div>
					<div class="order-list-right">
						<div>￥{{ item.milkPrice2 }}</div>
						<div>{{ item.milkTip2 }}</div>
					</div>
				</div>
			</div>

			<!-- 支付栏 -->
			<div class="pay-content">
				<van-cell-group class="pay-cell">
					<van-cell class="cell-border">
						<template #title>
							<div class="wallet">壹杯钱包</div>
						</template>
						<template #default>
							<div class="wallet-right">无可用</div>
						</template>
					</van-cell>
					<van-cell class="cell-bg" :border="false">
						<template #title>
							<div class="wallet">优惠劵</div>
						</template>
						<template #default>
							<div class="stock-bg">20元饮品抵用金</div>
						</template>
					</van-cell>
					<van-cell class="cell-mode" is-link :border="false">
						<template #title>
							<div class="wallet">支付方式</div>
						</template>
						<template #default>
							<div class="mode-right">微信支付</div>
						</template>
					</van-cell>
				</van-cell-group>
				<div class="take-cell" :border="false">
					<div>取餐方式</div>
					<div>
						<van-radio-group v-model="radio" direction="horizontal" checked-color="#f78000">
							<van-radio name="1" style="font-size: 13px;">自提带走</van-radio>
							<van-radio name="2" class="radio-take">店内用餐</van-radio>
							<van-radio name="3" class="radio-take">外卖</van-radio>
						</van-radio-group>
					</div>
				</div>
				<van-cell title="备注特殊要求" is-link class="ask-cell" :border="false">
					<template #title>
						<div class="wallet">备注特殊要求</div>
					</template>
				</van-cell>
				<div class="agreement">
					<van-checkbox v-model="checkedAgree" checked-color="#f78000" shape="square">我已阅读并同意《支付协议》</van-checkbox>
					<div>温馨提示：仅支持开具电子发票，订单完<br/>成后前往发票管理中开具</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../js/payment.js"></script>
<style src="../css/payment.css" scoped></style>
