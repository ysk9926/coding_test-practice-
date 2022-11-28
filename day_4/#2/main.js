const n = 3;


let answer = 5;
let a = 1;


while(a < 10){
    let pizzaNum = 6 * a;
    console.log(pizzaNum);
    let main = pizzaNum%n;
    if(main === 0){
        answer = a;
        break;
    }
        a = a + 1;
}

console.log("답은 " + answer);