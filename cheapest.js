const phones = [
	{ name: 'Samsung', price: 50000, camera: '12mp', color: 'black'},
	{ name: 'Xiomi', price: 18000, camera: '12mp', color: 'black'},
	{ name: 'Oppo', price: 20000, camera: '12mp', color: 'black'},
	{ name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
	{ name: 'Walton', price: 25000, camera: '12mp', color: 'black'},
	{ name: 'HTC', price: 28000, camera: '12mp', color: 'black'},
]

function getCheapestObject (phones) {
	// console.log(phones);
	let min = phones[0];
	for (let phone of phones){
		if (phone.price < min.price){
			min = phone;
		}
	}
	return min;
}

const cheapPhone = getCheapestObject(phones);
console.log('cheapest phone is: ', cheapPhone);