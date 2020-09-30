<template>
	<div class="login">
		<div class="login-form">
			<img src="../assets/onemilk-logo.png" width="209px" height="84px" />
			<div class="form-phone">
				<div>账号</div>
				<input type="text" placeholder="请输入账号/手机号" />
			</div>
			<div class="form-phone">
				<div>密码</div>
				<input type="text" placeholder="请输入密码" />
			</div>
			<div class="login-agree">
				<van-checkbox v-model="checked" icon-size="18px" checked-color="#f6ae66" shape="square"></van-checkbox>
				<div>登录注册代表同意《用户协议》《隐私协议》</div>
			</div>
			<button class="login-btn">登录</button>
			<div>注册</div>
		</div>
		<img src="../assets/login-bg2.png" width="100%" height="667px" />
	</div>
</template>

<script src="../js/login.js"></script>
<style src="../css/login.css" scoped></style>
