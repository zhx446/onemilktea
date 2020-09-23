<template>
	<div class="shoppcar">
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
		<div class="shoppcar-order">
			<div class="order-title">饮品订单</div>
			<img src="../assets/icon_delete.png" width="12.5px" height="13.5px"/>
		</div>
	</div>
</template>

<script src="../js/shoppcar.js"></script>
<style src="../css/shoppcar.css" scoped></style>
