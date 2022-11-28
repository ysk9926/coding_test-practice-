const n = 15;

const devicd = n % 7;
const pizza = Math.floor(n/7);

let answer = 0;

if(devicd === 0){
    answer = pizza;
} else {
    answer = pizza + 1;
}
console.log("답은 " + answer);