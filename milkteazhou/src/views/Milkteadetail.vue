<template>
	<div class="milkteadetail">
		<!-- 顶部和导航图片 -->
		<div class="detail-top">
			<div class="detail-nav">
				<img src="../assets/icon-cha.png" width="30px" height="30px" @click="toDetail" />
				<div class="detail-share">
					<img src="../assets/icon-share.png" width="30px" height="30px" @click="showShare = true" />
					<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
					<img src="../assets/icon-like.png" width="30px" height="30px" @click="addLike"/>
				</div>
			</div>
			<img src="../assets/milktea26.png" width="100%" height="282px" class="show-img" />
		</div>
		<!-- 奶茶详情 -->
		<div class="detail-title">
			<div>陨石拿铁</div>
			<div>Brown Sugar BoBo Latte</div>
		</div>
		<div class="detail-choice">
			<div class="choice">
				<div>温度</div>
				<div v-bind:class="[isActive ? activeClass : 'spec', 'activeSpec']" @click="pitchOn(1)">冰</div>
				<div class="spec">加冰</div>
			</div>
			<div class="choice">
				<div>糖度</div>
				<div v-bind:class="[isActive2 ? activeClass : 'spec', 'activeSpec']" @click="pitchOn(2)">全糖</div>
				<div class="spec">七分糖</div>
				<div class="spec">半分糖</div>
			</div>
			<div class="choice">
				<div>奶油</div>
				<div v-bind:class="[isActive3 ? activeClass : 'spec', 'activeSpec']" @click="pitchOn(3)">无奶油</div>
				<div class="spec">加奶油</div>
			</div>
			<div class="choice">
				<div>选杯</div>
				<div class="spec">大</div>
				<div v-bind:class="[isActive4 ? activeClass : 'spec', 'activeSpec']" @click="pitchOn(4)">中</div>
				<div class="spec">半</div>
				<div class="spec">小</div>
			</div>
		</div>
		<div class="detail-text">
			商品详情：
			<br />
			【探月50年主题推荐款】独特的黑糖风味拿铁，佐以香滑Q嫩的黑糖口味寒天晶球，创造出层次丰富的美妙口感，一起碰撞咖啡宇宙的无限可能。
			*本产品不含任何陨石成分，请放心饮用，建议搅拌后饮用。 主要原材料：浓缩咖啡、黑糖味寒天晶球、牛奶、黑糖调味糖浆、原味调味糖浆、可选择添加搅打奶油（含香草风味糖浆）
			本产品仅供冷饮，图片仅供参考，请以实物为准。寒天晶球切勿一口吞食，儿童禁食。
		</div>
		<div class="detail-pay">
			<div class="pay-left">
				<div class="pay-price">
					<div>￥28</div>
					<div>￥38</div>
					<div></div>
					<div>新人价</div>
				</div>
				<div>冰+全糖+无奶油+中杯</div>
			</div>
			<div class="now-buy" @click="toAccount">立即购买</div>
		</div>
		<!-- 为你推荐栏 -->
		<div class="detail-recommend">
			<van-divider :hairline="false" :style="{ color: '#2d2a26',fontSize: '18px', borderColor: '#f77f00', padding: '0 14.5px',margin:'36px 0 18.5px' }">为你推荐</van-divider>
			<div class="recom-for">
				<div class="detail-milk" v-for="item in recomList" :key="item.id">
					<img :src="item.recomImg" width="166.5px" height="200px" />
					<div>{{item.recomTitle}}</div>
					<div class="detail-price">
						<div>￥{{item.price}}</div>
						<img src="../assets/icon-to.png" width="21px" height="14px" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../js/milkteadetail.js"></script>
<style src="../css/milkteadetail.css" scoped></style>
