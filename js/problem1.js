//Project Euler Problem 1
//Multiples of 3

var sum1 = 0;
for (i=0; i<1000; i++){
  if(i%3===0 || i%5 === 0){
    sum1 = sum1 + i;
  }
}


document.getElementById('solution1').innerHTML = sum1;
