export default {
	data() {
		return {
			recomList:[{
				recomImg:require('../assets/milktea34.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea33.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea32.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea31.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea29.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea28.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea27.png'),
				recomTitle:'番石榴双响炮',
				price:30
			},{
				recomImg:require('../assets/milktea25.png'),
				recomTitle:'番石榴双响炮',
				price:30
			}]
		};
	},
	methods:{
		toDetail() {
			this.$router.go(-1)
		}
	}
};
