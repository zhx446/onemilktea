import Tabbar from '@/components/Tabbar.vue';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			orderList: [{
				orderImg: require('../assets/milktea26.png'),
				orderTitle: '陨石拿铁',
				orderText: '中/冰/全塘/无奶油	',
				orderPrice: '￥28.00',
				orderMilkNum: 1,
				gou: false
			}, {
				orderImg: require('../assets/order-milktea2.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum: 1,
				gou: false
			}, {
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum: 1,
				gou: false
			}, {
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum: 1,
				gou: false
			}, {
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum: 1,
				gou: false
			}],
			// orderList2: [{
			// 	orderImg2: require('../assets/order-milktea4.png'),
			// 	orderTitle2: '醉心黑摩卡',
			// 	orderText2: '大/冰/默认奶油',
			// 	orderPrice2: '￥18.00',
			// 	orderMilkNum2:1,
			// 	gou2:false
			// },{
			// 	orderImg2: require('../assets/order-milktea5.png'),
			// 	orderTitle2: '醉心黑摩卡',
			// 	orderText2: '大/冰/默认奶油',
			// 	orderPrice2: '￥18.00',
			// 	orderMilkNum2:1,
			// 	gou2:false
			// }],
			gouBot: false,
			checked: false,
		};
	},
	methods: {
		toPayment() {
			this.$router.push('/payment');
		},
		toDetail() {
			this.$router.push('/milkteadetail');
		},
		deleteList() {
			Dialog.confirm({
					message: '确认清空吗',
				})
				.then(() => {
					this.orderList = undefined;
				})
		}
	},
	components: {
		Tabbar
	}
};
