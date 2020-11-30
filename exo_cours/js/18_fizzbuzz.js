/* var i
var j = 0;
for(i = 0; i <= 100; i++){
    if(i % 3){
        j += 3;
        console.log(i);
        j= "Fizz"
        console.log(j);
    }
} */

/* let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += 3;
  console.log(x)
} */

var nombre = 1;
for(nombre = 1; nombre <= 100; nombre++){
    if((nombre % 3 === 0) && (nombre % 5 === 0)){
        console.log("FizzBuzz");
    }else if(nombre % 3 === 0){
        console.log("Fizz");
    }else if(nombre % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(nombre);
    }
}