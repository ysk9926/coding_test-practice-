const slice = 6;
const n = 3;
const devicd = n % slice;
const pizza = Math.floor(n/slice);

let answer = 0;

if(devicd === 0){
    answer = pizza;
} else {
    answer = pizza + 1;
}
return answer;