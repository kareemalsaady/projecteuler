//Project Euler Problem 3
//Largest Prime Factor

var N = 600851475143;

function largestPrimeFactor(number) {

	var i = 2;

	for (i; i <= number; i++){

		// if the number is factored by the iterator, divide the number and test the iterator again
		if ((number % i) === 0){
			number = number / i;
			i--;
		}
	}

	return i;
}


document.getElementById('solution3').innerHTML = i;
