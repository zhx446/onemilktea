import Tabbar from '@/components/Tabbar.vue';
export default {
	data() {
		return {
			active: 0,
			attentionList: [{
				headImg: require('../assets/head-img.png'),
				writerName: '星星',
				sendTime: '5分钟前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg:require('../assets/milktea2.png'),
				zanNum:7654,
				commentNum:'2.5w'
			},{
				headImg: require('../assets/head-img2.png'),
				writerName: '你有几分甜',
				sendTime: '8分钟前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg:require('../assets/milktea3.png'),
				zanNum:2376,
				commentNum:'2.9w'
			},{
				headImg: require('../assets/head-img3.png'),
				writerName: '5号新秀',
				sendTime: '1小时前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg:require('../assets/milktea4.png'),
				zanNum:4563,
				commentNum:'3.3w'
			},{
				headImg: require('../assets/head-img4.png'),
				writerName: '一直在你身边',
				sendTime: '2小时前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg:require('../assets/milktea5.png'),
				zanNum:2222,
				commentNum:'6.3w'
			}]
		};
	},
	components: {
		Tabbar
	}
};
