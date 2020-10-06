import Tabbar from '@/components/Tabbar.vue';
import {
	Toast
} from 'vant';
export default {
	data() {
		return {
			active: 0,
			attentionList: [{
				headImg: require('../assets/head-img.png'),
				writerName: '星星',
				sendTime: '5分钟前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg: require('../assets/milktea2.png'),
				zanNum: 7654,
				commentNum: 200,
				attenText: '+关注'
			}, {
				headImg: require('../assets/head-img2.png'),
				writerName: '你有几分甜',
				sendTime: '8分钟前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg: require('../assets/milktea3.png'),
				zanNum: 2376,
				commentNum: 111,
				attenText: '+关注'
			}, {
				headImg: require('../assets/head-img3.png'),
				writerName: '5号新秀',
				sendTime: '1小时前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg: require('../assets/milktea4.png'),
				zanNum: 4563,
				commentNum: 133,
				attenText: '+关注'
			}, {
				headImg: require('../assets/head-img4.png'),
				writerName: '一直在你身边',
				sendTime: '2小时前',
				sendDetails: '种草,推推推推荐，强烈安利！不看后悔一百年',
				writerImg: require('../assets/milktea5.png'),
				zanNum: 2222,
				commentNum: 456,
				attenText: '+关注'
			}],
			show: false,
			actions: [{
				name: '选项一'
			}, {
				name: '选项二'
			}, {
				name: '选项三'
			}],
		};
	},
	components: {
		Tabbar
	},
	methods: {
		attention(index) {
			Toast.success('已关注');
			this.attentionList[index].attenText = '关注';
		},
		addZan(index) {
			this.attentionList[index].commentNum++;
		},
		deleteDis(index) {
			Toast.success('已删除');
			this.attentionList.splice(index, 1);
		}
	}
};
