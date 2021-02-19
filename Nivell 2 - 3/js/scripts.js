var num1 = '';
var num2 = '';
var numbers = [];
var digit;

// Funciona para guardar los números en un array.

function number(a) {

	numbers.push(a);
	if (numbers.length != 1) {
		num1 = '';
		document.getElementById('display').innerHTML = num1;
	}

	for (i=0; i<numbers.length; i++) {
		num1 = num1 + numbers[i];	
	}

	document.getElementById('display').innerHTML = num1;
}


// Funcion para mostrar el resultado al presionar "=".

function equal() {

	document.getElementById('display').innerHTML = '';

	for (i=0; i<numbers.length; i++) {
		num2 += numbers[i];		
	}

	digit = eval(num2);	
	document.getElementById('display').innerHTML = digit;	

	while (numbers.length > 0) {
    	numbers.pop();			
	}

	numbers.push(digit.toString());
}


// Funcion de borrado al presionar "C".

function clearScr() {

	document.getElementById('display').innerHTML = '';
	
	while (numbers.length > 0) {
    	numbers.pop();
	}

	num1 = '';	
	num2 = '';
}