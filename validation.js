//typeof number 

function fullName1  (num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number'){
		return 'provide a valid number';
	}
	const mult = num1 * num2;
	return mult;
}

const number = fullName1(5, 'seven');
console.log(number);

//typeof string

function  fullName(first, second) {
	if (typeof first !== 'string'){
		return 'First name should be a string'
	}
	else if (typeof second !== 'string'){
		return 'Second name should be a string'
	}
	const full = first + ' ' + second;
	return full;
}

const full = fullName('string', 4);
console.log(full);

//typeof object

function getPrice (product) {
	if (typeof product !== 'object'){
		return 'please provide an object';
	}
	const price = product.price;
	return price;
}

// const price = getPrice({name: 'chulkani dandi', price: 35, color: 'blue'});
const price = getPrice(5);


console.log(price);

//typeof array 

function getSecond  (numbers) {
	if(Array.isArray(numbers) === false){
		return 'please provide an array'
	}
	const second = numbers[1];
	return second;
}

// const second = getSecond([1,25,69]);
const second = getSecond(5);
console.log(second);