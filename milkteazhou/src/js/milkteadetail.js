import {
	Toast
} from 'vant';
export default {
	data() {
		return {
			recomList: [{
				recomImg: require('../assets/milktea34.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea33.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea32.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea31.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea29.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea28.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea27.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}, {
				recomImg: require('../assets/milktea25.png'),
				recomTitle: '番石榴双响炮',
				price: 30
			}],
			showShare: false,
			options: [{
					name: '微信',
					icon: 'wechat',
					nameOk: '已分享至微信'
				},
				{
					name: '微博',
					icon: 'weibo',
					nameOk: '已分享至微博'
				},
				{
					name: '复制链接',
					icon: 'link',
					nameOk: '已复制链接'
				},
				{
					name: '分享海报',
					icon: 'poster',
					nameOk: '已分享海报'
				},
				{
					name: '二维码',
					icon: 'qrcode',
					nameOk: require('../assets/index-code.png')
				},
			],
			isActive: false,
			isActive2: false,
			isActive3: false,
			isActive4: false
		};
	},
	methods: {
		toDetail() {
			this.$router.go(-1)
		},
		onSelect(option) {
			Toast(option.nameOk);
			this.showShare = false;
		},
		addLike() {
			Toast('已添加到喜爱');
		},
		pitchOn(num) {
			if(num == 1) {
				this.isActive = true;
			}else if(num == 2) {
				this.isActive2 = true;
			}else if(num == 3) {
				this.isActive3 = true;
			}else {
				this.isActive4 = true;
			}
			
		},
		toAccount() {
			this.$router.push('/payment');
		}
	}
};
