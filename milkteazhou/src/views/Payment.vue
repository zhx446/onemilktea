<template>
	<div class="payment">
		<div class="payment-nav">
			<van-nav-bar title="确认订单" left-arrow @click-left="toBack">
				<template #left>
					<van-icon name="arrow-left" color="#423026" size="18px"/>
				</template>
			</van-nav-bar>
		</div>
	</div>
</template>

<script src="../js/payment.js"></script>
<style src="../css/payment.css" scoped></style>
