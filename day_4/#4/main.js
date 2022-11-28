const numbers = [1, 2, 4, 5, 6, 7, 8, 8, 10]
let answer;
let cnt = 0;
let sum = 0;
while(cnt < numbers.length){
    
    sum = sum + numbers[cnt];
    cnt = cnt + 1;
}
answer = sum / numbers.length;
return answer;