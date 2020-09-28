export default {
	data() {
		return {
			checked: true,
			paymentList: [{
				milkImg: require('../assets/order-milktea.png'),
				milkTitle: '吼吼喝奶茶',
				milkText: '大/少冰/半糖',
				num: 1,
				milkPrice: 28,
				milkTip: '新人价'
			}, {
				milkImg: require('../assets/order-milktea2.png'),
				milkTitle: '吼吼喝奶茶',
				milkText: '大/少冰/半糖',
				num: 2,
				milkPrice: 56,
				milkTip: '折扣价'
			}, {
				milkImg: require('../assets/order-milktea3.png'),
				milkTitle: '吼吼喝奶茶',
				milkText: '大/少冰/半糖',
				num: 2,
				milkPrice: 56,
				milkTip: '新人价'
			}],
			paymentList2: [{
				milkImg2: require('../assets/order-milktea.png'),
				milkTitle2: '吼吼喝奶茶',
				milkText2: '大/少冰/半糖',
				num2: 1,
				milkPrice2: 28,
				milkTip2: '博主折扣'
			}, {
				milkImg2: require('../assets/order-milktea2.png'),
				milkTitle2: '吼吼喝奶茶',
				milkText2: '大/少冰/半糖',
				num2: 2,
				milkPrice2: 56,
				milkTip2: '折扣价'
			}],
			radio: '1',
			checkedAgree:'1'
		};
	},
	methods: {
		// 返回上一页
		toBack() {
			this.$router.go(-1);
		},
	},
};
