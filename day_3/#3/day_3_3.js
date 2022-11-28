
const array = [2,2,5,5,6];

let a = 0; 
let aRepeat = 1; // a가 반복되는 횟수
let i = -1;  // 현재 반복돼는 숫자
let iRepeat = 0; // 최빈수
let iDouble = false; //  최빈수가 겹치는가



while( a < array.length){
    if( i !== array[a] ){
        i = array[a];
        aRepeat = iRepeat;
    } else{
        aRepeat = aRepeat + 1;
    }

    if(iRepeat === aRepeat){
        iDouble = true;
    }else {
        iDouble = false;
    }
    a = a +1;
}

if(iDouble = true){
    return -1;
}else {
    return i
}

// 배열 갯수만큼 반복해서 검사
// 