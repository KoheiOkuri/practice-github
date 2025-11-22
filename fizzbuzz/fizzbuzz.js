
const n = 1000;
const fizzbuzzN = 15;
const fizzN = 3;
const buzzN = 5;

for(let i=1; i<=n; i++){
    if(i % fizzbuzzN === 0){
        console.log("FizzBuzz");
    }else if(i % buzzN === 0){
        console.log("Buzz");
    }else if(i % fizzN === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}