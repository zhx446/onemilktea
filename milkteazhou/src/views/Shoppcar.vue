<template>
	<div class="shoppcar">
		<!-- 导航栏 -->
		<div class="shoppcar-nav">
			<van-nav-bar :border="false" :fixed="true">
				<template #title>
					<img src="../assets/milktea.png" width="58px" height="23.5px" />
				</template>
				<template #right>
					<img src="../assets/icon_more.png" width="16px" height="16px" class="nav-icon-more" />
				</template>
			</van-nav-bar>
		</div>
		<div class="shoppcar-content">
			<img src="../assets/shoppcar_banner.png" width="100%" height="100.5px" class="shoppcar-banner" />
			<!-- 订单列表 -->
			<div class="shoppcar-order">
				<div class="order-top">
					<div class="order-title">饮品订单</div>
					<img src="../assets/icon_delete.png" width="12.5px" height="13.5px" @click="deleteList"/>
				</div>
				<div class="order-content">
					<div class="order-item" v-for="item in orderList" :key="item.id">
						<div class="order-show">
							<van-checkbox v-model="item.gou" icon-size="16px" checked-color="#ffaa00"></van-checkbox>
							<img :src="item.orderImg" @click="toDetail" />
							<div class="order-show-text">
								<div>{{item.orderTitle}}</div>
								<div>{{item.orderText}}</div>
								<div>{{item.orderPrice}}</div>
							</div>
						</div>
						<div class="order-choice">
							<van-stepper v-model="item.orderMilkNum" theme="round" button-size="11.5" disable-input />
						</div>
					</div>

					<!-- <div class="order-child">
						<div class="order-item2" v-for="item in orderList2" :key="item.id">
							<div class="order-show2">
								<van-checkbox v-model="item.gou2" icon-size="16px" checked-color="#ffaa00"></van-checkbox>
								<img :src="item.orderImg2" />
								<div class="order-show-text">
									<div>{{item.orderTitle2}}</div>
									<div>{{item.orderText2}}</div>
									<div>{{item.orderPrice2}}</div>
								</div>
							</div>
							<div class="order-choice">
								<van-stepper v-model="item.orderMilkNum2" theme="round" button-size="11.5" disable-input />
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</div>
		<!-- 结算栏 -->
		<div class="shoppcar-accounts">
			<div class="accounts-left">
				<van-checkbox v-model="gouBot" icon-size="16px" checked-color="#ffaa00"></van-checkbox>
				<div class="check-all">全选</div>
				<div>不含运费</div>
			</div>
			<div class="accounts-center">
				<div>合计：￥28.00</div>
				<div>用券更便宜，共减免￥22</div>
			</div>
			<div class="accounts-right" @click="toPayment">
				结算
			</div>
		</div>
		<tabbar></tabbar>		
	</div>
</template>

<script src="../js/shoppcar.js"></script>
<style src="../css/shoppcar.css" scoped></style>
