//Project Euler Problem 2
//Even Fibonacci Numbers

var f1 	= 1;
var f2 	= 2;
var sum = f1 + f2;
var total_sum	= 2;

while(sum < 4000000){
  if(sum % 2 == 0){
    total_sum = total_sum + sum;
  }

  f1 = f2;
  f2 = sum;
  sum = f1 + f2;
}


document.getElementById('solution2').innerHTML = total_sum;
