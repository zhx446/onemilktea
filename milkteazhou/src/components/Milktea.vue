<template>
	<div class="recom-for">
		<div class="recom-list">
			<img :src="milkteaImg" width="168.5px" height="172px" />
			<div class="recom-title">{{milkTitle}}</div>
			<div class="recom-englist">
				<div>{{milkEnglist}}</div>
				<div class="shoppcar-bg">
					<img src="../assets/icon-shoppcar.png" width="15px" height="12px" />
				</div>
			</div>
			<div class="recom-price">
				<div>￥{{milkPrice}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			milkteaImg: String,
			milkTitle: String,
			milkPrice: Number,
			milkEnglist: String,
		}
	};
</script>

<style scoped>
	.recom-title {
		font-size: 8.3px;
		font-weight: bold;
		color: #6a4846;
	}

	.recom-englist {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.recom-englist div:first-child {
		font-size: 6.3px;
		font-weight: bold;
		color: #6a4846;
		letter-spacing: 0.7px;
	}

	.recom-price {
		font-size: 8.3px;
		font-weight: bold;
		color: #6a4846;
	}

	.shoppcar-bg {
		width: 22px;
		height: 22px;
		background-color: #f6ae66;
		border-radius: 50%;
	}

	.shoppcar-bg img {
		margin-bottom: 8px;
		margin-left: 3px;
	}

	.recom-list {
		text-align: left;
		margin-top: 13.5px;
	}

	.recom-for {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 47%;
	}
</style>
