import {
	Dialog
} from 'vant';
export default {
	data() {
		return {
			phone:'',
			passwords:'',
			isPhone:false,
			isPasswords:false
		};
	},
	methods: {
		toLogin() {
			Dialog.confirm({
					message: '注册完成！需要马上登录吗',
				})
				.then(() => {
					this.$router.push('/login');
				})
		}
		
	}
};
