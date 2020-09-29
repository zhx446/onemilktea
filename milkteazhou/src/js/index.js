import Milktea from '@/components/Milktea.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
	data() {
		return {
			activityList: [{
					milkteaImg: require('../assets/index-stock.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				},
				{
					milkteaImg: require('../assets/milktea23.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				}, {
					milkteaImg: require('../assets/milktea24.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				}, {
					milkteaImg: require('../assets/milktea25.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				}, {
					milkteaImg: require('../assets/milktea26.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				}, {
					milkteaImg: require('../assets/milktea27.png'),
					milkTitle: '咕咕奶茶400ml新人券',
					price: 10,
					priceYuan: 20
				}
			],
			milkteaList: [{
					milkImg: require('../assets/milktea25.png'),
					coffeeTea: '焦糖奶茶',
					coffeeEng: 'GRANDMA CARAMEL',
					coffeePrice: 20.00
				},
				{
					milkImg: require('../assets/milktea26.png'),
					coffeeTea: '双色拼接奶茶',
					coffeeEng: 'Two-color tiled milk tea',
					coffeePrice: 20.00
				}, {
					milkImg: require('../assets/milktea22.png'),
					coffeeTea: '柠檬粉水',
					coffeeEng: 'GRANDMA CARAMEL',
					coffeePrice: 20.00
				}, {
					milkImg: require('../assets/milktea21.png'),
					coffeeTea: '柠檬粉水',
					coffeeEng: 'Lemon powder water',
					coffeePrice: 20.00
				}, {
					milkImg: require('../assets/milktea16.png'),
					coffeeTea: '焦糖奶茶',
					coffeeEng: 'GRANDMA CARAMEL',
					coffeePrice: 20.00
				}, {
					milkImg: require('../assets/milktea26.png'),
					coffeeTea: '焦糖奶茶',
					coffeeEng: 'GRANDMA CARAMEL',
					coffeePrice: 20.00
				},
			],
			milkteaList2: [{
					milkImg2: require('../assets/milktea20.png'),
					coffeeTea2: '焦糖奶茶',
					coffeeEng2: 'GRANDMA CARAMEL',
					coffeePrice2: 20.00
				},
				{
					milkImg2: require('../assets/milktea19.png'),
					coffeeTea2: '双色拼接奶茶',
					coffeeEng2: 'Two-color tiled milk tea',
					coffeePrice2: 20.00
				}, {
					milkImg2: require('../assets/milktea27.png'),
					coffeeTea2: '柠檬粉水',
					coffeeEng2: 'GRANDMA CARAMEL',
					coffeePrice2: 20.00
				}, {
					milkImg2: require('../assets/milktea16.png'),
					coffeeTea2: '柠檬粉水',
					coffeeEng2: 'Lemon powder water',
					coffeePrice2: 20.00
				}, {
					milkImg2: require('../assets/milktea14.png'),
					coffeeTea2: '焦糖奶茶',
					coffeeEng2: 'GRANDMA CARAMEL',
					coffeePrice2: 20.00
				}, {
					milkImg2: require('../assets/milktea15.png'),
					coffeeTea2: '焦糖奶茶',
					coffeeEng2: 'GRANDMA CARAMEL',
					coffeePrice2: 20.00
				},
			],
			milkteaList3: [{
					milkImg3: require('../assets/milktea20.png'),
					coffeeTea3: '焦糖奶茶',
					coffeeEng3: 'GRANDMA CARAMEL',
					coffeePrice3: 20.00
				},
				{
					milkImg3: require('../assets/milktea19.png'),
					coffeeTea3: '双色拼接奶茶',
					coffeeEng3: 'Two-color tiled milk tea',
					coffeePrice3: 20.00
				}, {
					milkImg3: require('../assets/milktea27.png'),
					coffeeTea3: '柠檬粉水',
					coffeeEng3: 'GRANDMA CARAMEL',
					coffeePrice3: 20.00
				}, {
					milkImg3: require('../assets/milktea16.png'),
					coffeeTea3: '柠檬粉水',
					coffeeEng3: 'Lemon powder water',
					coffeePrice3: 20.00
				}, {
					milkImg3: require('../assets/milktea14.png'),
					coffeeTea3: '焦糖奶茶',
					coffeeEng3: 'GRANDMA CARAMEL',
					coffeePrice3: 20.00
				}, {
					milkImg3: require('../assets/milktea15.png'),
					coffeeTea3: '焦糖奶茶',
					coffeeEng3: 'GRANDMA CARAMEL',
					coffeePrice3: 20.00
				},
			]

		};
	},
	components: {
		Milktea,
		Tabbar
	},
};
