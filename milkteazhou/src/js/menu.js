import Tabbar from '@/components/Tabbar.vue'
export default {
	data() {
		return {
			activeKey: 0,
			menuList: [{
				milkImg: require('../assets/milktea26.png'),
				milkTitle: '陨石拿铁',
				milkDes: '浓浓奶香，带来的甜蜜',
				milkSell: '月售 555',
				milkMoney: 28
			}, {
				milkImg: require('../assets/milktea8.png'),
				milkTitle: '珍珠奶茶',
				milkDes: '浓浓奶香，带来的甜蜜',
				milkSell: '月售 555',
				milkMoney: 28
			}, {
				milkImg: require('../assets/milktea9.png'),
				milkTitle: '霸气葡萄',
				milkDes: '浓浓奶香，带来的甜蜜',
				milkSell: '月售 555',
				milkMoney: 28
			}, {
				milkImg: require('../assets/milktea6.png'),
				milkTitle: '壹杯烤奶',
				milkDes: '浓浓奶香，带来的甜蜜',
				milkSell: '月售 555',
				milkMoney: 28
			}],
			menuList2: [{
				milkImg2: require('../assets/milktea13.png'),
				milkTitle2: '壹杯烤奶',
				milkDes2: '浓浓奶香，带来的甜蜜',
				milkSell2: '月售 555',
				milkMoney2: 28
			}, {
				milkImg2: require('../assets/milktea2.png'),
				milkTitle2: '珍珠奶茶',
				milkDes2: '浓浓奶香，带来的甜蜜',
				milkSell2: '月售 555',
				milkMoney2: 28
			}, {
				milkImg2: require('../assets/milktea3.png'),
				milkTitle2: '霸气葡萄',
				milkDes2: '浓浓奶香，带来的甜蜜',
				milkSell2: '月售 555',
				milkMoney2: 28
			}, {
				milkImg2: require('../assets/milktea4.png'),
				milkTitle2: '壹杯烤奶',
				milkDes2: '浓浓奶香，带来的甜蜜',
				milkSell2: '月售 555',
				milkMoney2: 28
			}],
			menuList3: [{
				milkImg3: require('../assets/milktea5.png'),
				milkTitle3: '壹杯烤奶',
				milkDes3: '浓浓奶香，带来的甜蜜',
				milkSell3: '月售 555',
				milkMoney3: 28
			}, {
				milkImg3: require('../assets/milktea10.png'),
				milkTitle3: '珍珠奶茶',
				milkDes3: '浓浓奶香，带来的甜蜜',
				milkSell3: '月售 555',
				milkMoney3: 28
			}, {
				milkImg3: require('../assets/milktea11.png'),
				milkTitle3: '霸气葡萄',
				milkDes3: '浓浓奶香，带来的甜蜜',
				milkSell3: '月售 555',
				milkMoney3: 28
			}, {
				milkImg3: require('../assets/milktea12.png'),
				milkTitle3: '壹杯烤奶',
				milkDes3: '浓浓奶香，带来的甜蜜',
				milkSell3: '月售 555',
				milkMoney3: 28
			}],
			active: 0,
			items: [{
				text: '经典饮品'
			}, {
				text: '茶的碰撞'
			}, {
				text: '醇香奶茶'
			}, {
				text: '100%原果汁'
			}, {
				text: '大师咖啡'
			}],
		};
	},
	components: {
		Tabbar
	},
	methods:{
		toDetail() {
			this.$router.push('/milkteadetail');
		}
	}
};
