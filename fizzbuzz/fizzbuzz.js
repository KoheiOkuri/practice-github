
const n = 1000;
const fizzbuzzN = 15;
const fizzN = 3;
const buzzN = 5;

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
