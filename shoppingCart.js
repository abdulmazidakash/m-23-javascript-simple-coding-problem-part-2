const products1 = [
	{name: 'Shampoo', price: 300, quantity: 2},
	{name: 'Chiruni', price: 100, quantity: 2},
	{name: 'Shirt', price: 700, quantity: 3},
	{name: 'Pant', price: 1200, quantity: 1},
]

function cartTotal (products) {
	let total = 0;
	for (const product of products) {
		const thisProductCost = product.price * product.quantity;
		total = total + thisProductCost;
	}
	return total;
}

const shoppingCost = cartTotal (products1);
console.log('total ajke khosabe: ', shoppingCost);