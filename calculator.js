function add (num1, num2) {
	return num1 + num2;
}
function subtract (num1, num2) {
	return num1 - num2;
}
function multiply (num1, num2) {
	return num1 * num2;
}
function divide (num1, num2) {
	return num1 / num2;
}

function calculator (a, b, operation) {
	if (operation === 'add'){
		return add(a, b)
	}
	else if (operation === 'subtract'){
		return subtract(a, b)
	}
	else if (operation === 'multiply'){
		return multiply(a, b)
	}
	else if (operation === 'divide'){
		return divide(a, b)
	}
	else{
		return "only 'add', 'subtract', 'multiply', 'divide' operation is allowed"
	}
}

const result = calculator(5, 7, 'add');
const result2 = calculator(5, 7, 'subtract');
const result3 = calculator(5, 7, 'multiply');
const result4 = calculator(5, 7, 'divide');
console.log('add: ',result);
console.log('subtract', result2);
console.log('multiply: ', result3);
console.log('divide: ', result4);