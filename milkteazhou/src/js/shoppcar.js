export default {
	data() {
		return {
			orderList: [{
				orderImg: require('../assets/order-milktea.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum:1
			},{
				orderImg: require('../assets/order-milktea2.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum:1
			},{
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum:1
			},{
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum:1
			},{
				orderImg: require('../assets/order-milktea3.png'),
				orderTitle: '醉心黑摩卡',
				orderText: '大/冰/默认奶油',
				orderPrice: '￥18.00',
				orderMilkNum:1
			}],
			orderList2: [{
				orderImg2: require('../assets/order-milktea4.png'),
				orderTitle2: '醉心黑摩卡',
				orderText2: '大/冰/默认奶油',
				orderPrice2: '￥18.00',
				orderMilkNum2:1
			},{
				orderImg2: require('../assets/order-milktea5.png'),
				orderTitle2: '醉心黑摩卡',
				orderText2: '大/冰/默认奶油',
				orderPrice2: '￥18.00',
				orderMilkNum2:1
			}],
			checked:false
		};
	},
	methods:{
		toPayment() {
			this.$router.push('/payment');
		},
		toDetail() {
			this.$router.push('/milkteadetail');
		}
	}
};
