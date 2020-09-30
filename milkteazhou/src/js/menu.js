import Tabbar from '@/components/Tabbar.vue'
export default {
	data() {
		return {
			activeKey: 0,
			menuList: [{
				milkImg: require('../assets/milktea7.png'),
				milkTitle: '壹杯烤奶',
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
	}
};
