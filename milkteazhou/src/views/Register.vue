<template>
	<div class="login">
		<div class="login-form">
			<img src="../assets/onemilk-logo.png" width="209px" height="84px" />
			<div class="form-phone">
				<div>账号</div>
				<input type="text" placeholder="请输入账号/手机号" :value="phone" />
			</div>
			<div v-show="isPhone">*请输入正确的手机号</div>
			<div class="form-phone">
				<div>密码</div>
				<input type="text" placeholder="请输入密码" :value="passwords"/>
			</div>
			<div v-show="isPasswords">*密码不少于6位</div>
			<button class="login-btn" @click="toLogin">注册</button>
		</div>
		<img src="../assets/login-bg2.png" width="100%" height="667px" />
	</div>
</template>

<script src="../js/register.js"></script>
<style src="../css/register.css" scoped></style>
