export default {
	data() {
		return {
			checked: true,
		};
	},
	methods: {
		// 返回上一页
		toBack() {
			this.$router.go(-1);
		},
	},
};
