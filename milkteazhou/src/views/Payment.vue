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
							<div>{{item.milkTitle}}</div>
							<div>{{item.milkText}}</div>
						</div>
					</div>
					<div class="order-list-num">x{{item.num}}</div>
					<div class="order-list-right">
						<div>￥{{item.milkPrice}}</div>
						<div>{{item.milkTip}}</div>
					</div>
				</div>
			</div>

			<!-- 订单列表2 -->
			<div class="payment-order">
				<div class="payment-order-list" v-for="item in paymentList2" :key="item.id">
					<div class="order-list-left">
						<img :src="item.milkImg2" width="70px" height="67px" />
						<div class="left-title">
							<div>{{item.milkTitle2}}</div>
							<div>{{item.milkText2}}</div>
						</div>
					</div>
					<div class="order-list-num">x{{item.num2}}</div>
					<div class="order-list-right">
						<div>￥{{item.milkPrice2}}</div>
						<div>{{item.milkTip2}}</div>
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
					<van-cell class="cell-bg">
						<template #title>
							<div class="wallet">优惠劵</div>
						</template>
						<template #default>
							<div class="stock-bg">20元饮品抵用金</div>
						</template>
					</van-cell>
					<van-cell class="cell-mode" is-link>
						<template #title>
							<div class="wallet">支付方式</div>
						</template>
						<template #default>
							<div class="mode-right">微信支付</div>
						</template>
					</van-cell>
				</van-cell-group>
			</div>
		</div>
	</div>
</template>

<script src="../js/payment.js"></script>
<style src="../css/payment.css" scoped></style>
