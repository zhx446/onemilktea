import Tabbar from '@/components/Tabbar.vue'
export default {
	components: {
		Tabbar
	},
	methods: {
		toSetting() {
			this.$router.push('/setting');
		}
	}
}