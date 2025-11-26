//定数化

const n = 1000;
const fizzbuzzN = 15; //fizzbuzzの時の数字
const fizzN = 3; //fizzの時
const buzzN = 5; //buzzの時

function fizzbuzz(num){
    if(num%fizzbuzzN === 0){
        return "FizzBuzz";
    }
    if(num%fizzN === 0) {
        return "Fizz";
    }
    if(num%buzzN === 0) {
        return "Buzz";
    }
    return num;
}

for (let i = 1 ; i<=n ; i++){
    console.log(fizzbuzz(i));
}
