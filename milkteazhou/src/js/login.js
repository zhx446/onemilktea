export default {
	data() {
		return {
			value: '',
			checked: false
		};
	},
	methods: {
		toRegister() {
			this.$router.push('/register');
		},
		toIndex() {
			this.$router.push('/');
		}
	},
};
