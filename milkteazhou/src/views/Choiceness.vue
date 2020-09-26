<template>
	<div class="choiceness">
		<!-- 顶部导航栏 -->
		<div class="choiceness-nav">
			<van-nav-bar :border="false" :fixed="true">
				<template #title>
					<img src="../assets/milktea.png" width="58px" height="23.5px" />
				</template>
				<template #right>
					<img src="../assets/icon-sreach.png" width="16px" height="16px" class="nav-icon-sreach" />
					<div class="nav-icon-line"></div>
					<img src="../assets/icon_more.png" width="16px" height="16px" class="nav-icon-more" />
				</template>
			</van-nav-bar>
		</div>
		<!-- tabs标签切换页面 -->
		<div class="choiceness-tabs">
			<van-tabs v-model="active" :sticky="true" offset-top="46px" line-width="20.5px" color="#f6ae66" title-inactive-color="#2d2a26">
				<van-tab title="关注">
					<template #default>
						<div class="choiceness-tabs-attention">
							<div class="tabs-attention" v-for="item in attentionList" :key="item.id">
								<div class="attention-top">
									<div class="writer">
										<img :src="item.headImg" width="58.5px" height="58.5px" />
										<div class="writer-name">
											<div>{{item.writerName}}</div>
											<div>{{item.sendTime}}</div>
										</div>
									</div>
									<div class="add-attention">+关注</div>
								</div>
								<div class="writer-text">
									<div>
										{{item.sendDetails}}
									</div>
									<img :src="item.writerImg" width="158px" height="146.5px" />
								</div>
								<div class="attention-bottom">
									<div class="attention-icon">
										<img src="../assets/icon-msg.png" width="21px" height="21px" />
										<div>{{item.zanNum}}</div>
									</div>
									<div class="attention-icon">
										<img src="../assets/icon-zan.png" width="21px" height="21px" />
										<div>{{item.commentNum}}</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</van-tab>
				<van-tab title="热门">内容 2</van-tab>
				<van-tab title="最新">内容 3</van-tab>
			</van-tabs>
		</div>

	</div>
</template>

<script src="../js/choiceness.js"></script>
<style src="../css/choiceness.css" scoped></style>
